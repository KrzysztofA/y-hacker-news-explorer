import { Post } from "../../Types/Post";

type SortBy = "title" | "date" | "author" | "-title" | "-date" | "-author";

type DispatchType = React.Dispatch<{
  type: string;
  items: Post[];
  loading?: boolean;
  error?: string | null;
}>

export type { DispatchType, SortBy };

