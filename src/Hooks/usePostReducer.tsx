import { useEffect, useReducer } from "react";
import { Post, PostJSON } from "../Types/Post";
import axios from "axios";

const postsReducer = (
  state: { items: Post[]; loading?: boolean; error?: string | null },
  action: { type: string; items: Post[]; loading?: boolean; error?: string | null }
) => {
  switch (action.type) {
    case "set_error":
      return {
        items: state.items,
        loading: false,
        error: action.error,
      };
    case "set_items":
      return {
        items: action.items,
        loading: false,
        error: null,
      };
    case "sort_items_by_author":
      return {
        items: [...state.items].sort((x: Post, y: Post) => x.compareAuthor(y)),
        loading: state.loading,
        error: null,
      };
    case "sort_items_by_author_reverse":
      return {
        items: [...state.items].sort((x: Post, y: Post) => -x.compareAuthor(y)),
        loading: state.loading,
        error: null,
      };
    case "sort_items_by_date":
      return {
        items: [...state.items].sort((x: Post, y: Post) => x.compare(y)),
        loading: state.loading,
        error: null,
      };
    case "sort_items_by_date_reverse":
      return {
        items: [...state.items].sort((x: Post, y: Post) => -x.compare(y)),
        loading: state.loading,
        error: null,
      };
    case "sort_items_by_title":
      return {
        items: [...state.items].sort((x: Post, y: Post) => x.compareTitle(y)),
        loading: state.loading,
        error: null,
      };
    case "sort_items_by_title_reverse":
      return {
        items: [...state.items].sort((x: Post, y: Post) => -x.compareTitle(y)),
        loading: state.loading,
        error: null,
      };
  }
  throw Error("Unknown action: " + action.type);
};

const usePostReducer = (query?: string) => {
  const [itemsState, dispatchItems] = useReducer(postsReducer, { items: [], loading: true, error: null });

  useEffect(() => {
    new Promise(async (_resolve, reject) => {
      let stop = false;
      try {
        const timeout = setTimeout(() => {
          dispatchItems({ type: "set_error", items: [], error: `Execution stopped due to timeout` });
          stop = true;
        }, 200000);
        let jsonData = await axios(`https://hn.algolia.com/api/v1/search?query=${query ? query : ""}?page=1`);
        let data: Array<any | never> = jsonData.data.hits.map(
          (x: { author: string; created_at: string; objectID: string; url: string; title: string }) => {
            return { author: x.author, date: x.created_at, objectID: x.objectID, url: x.url, title: x.title };
          }
        );
        for (let i = 2; i < jsonData.data.nbPages; i++) {
          jsonData = await axios(`https://hn.algolia.com/api/v1/search?query=${query ? query : ""}?page=${i}`);
          const temp = jsonData.data.hits.map(
            (x: { author: string; created_at: string; objectID: string; url: string; title: string }) => {
              return { author: x.author, date: x.created_at, objectID: x.objectID, url: x.url, title: x.title };
            }
          );
          if (stop) break;
          data = data.concat(temp);
        }
        clearTimeout(timeout);

        if (!stop)
          dispatchItems({
            type: "set_items",
            items: data.map((x: PostJSON) => Post.fromJSON(x)),
          });
      } catch (err) {
        dispatchItems({ type: "set_error", items: [], error: `${err}` });
      }
    });
  }, [query]);

  return { itemsData: itemsState.items, error: itemsState.error, loading: itemsState.loading, dispatch: dispatchItems };
};

export default usePostReducer;
