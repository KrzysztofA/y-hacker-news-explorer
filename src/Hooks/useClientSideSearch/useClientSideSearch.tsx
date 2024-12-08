import { ChangeEvent, useEffect, useState } from "react";
import Post from "../../Types/Post";

function useClientSideSearch(key: string, itemsData: Post[]) {
  const [searchTerm, setSearchTerm] = useState<string>(
    localStorage.getItem(key) != null ? `${localStorage.getItem(key)}` : ""
  );
  const [items, setItems] = useState<Post[]>(itemsData ? itemsData.filter((x) => x.search(searchTerm)) : []);
  const onSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(() => event?.target?.value);
  };

  useEffect(() => {
    localStorage.setItem(key, searchTerm);
    setItems(() => itemsData.filter((x) => x.search(searchTerm)).sort((x, y) => x.compare(y)));
  }, [searchTerm]);
  return { items: items, searchTerm: searchTerm, onChangeCallback: onSearchTermChange };
}

export default useClientSideSearch;
