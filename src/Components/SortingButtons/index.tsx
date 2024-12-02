import { useEffect, useState } from "react";
import { DispatchType, SortBy } from "./types";

const SortingButtons = ({
  dispatch,
}: {
  dispatch: DispatchType;
}) => {
  const [sortBy, setSortBy] = useState<SortBy>("date");

  useEffect(() => {
    switch (sortBy) {
      case "date":
        dispatch({
          type: "sort_items_by_date",
          items: [],
        });
        break;
      case "author":
        dispatch({
          type: "sort_items_by_author",
          items: [],
        });
        break;
      case "title":
        dispatch({
          type: "sort_items_by_title",
          items: [],
        });
        break;
      case "-date":
        dispatch({
          type: "sort_items_by_date_reverse",
          items: [],
        });
        break;
      case "-author":
        dispatch({
          type: "sort_items_by_author_reverse",
          items: [],
        });
        break;
      case "-title":
        dispatch({
          type: "sort_items_by_title_reverse",
          items: [],
        });
        break;
    }
  }, [sortBy]);

  return (
    <span>
      Sort By:
      <button onClick={() => setSortBy((prev) => (prev == "title" ? "-title" : "title"))}>
        Title {sortBy == "title" ? "-" : "+"}
      </button>
      <button onClick={() => setSortBy((prev) => (prev == "date" ? "-date" : "date"))}>
        Date {sortBy == "date" ? "-" : "+"}
      </button>
      <button onClick={() => setSortBy((prev) => (prev == "author" ? "-author" : "author"))}>
        Author {sortBy == "author" ? "-" : "+"}
      </button>
    </span>
  );
};

export default SortingButtons;
