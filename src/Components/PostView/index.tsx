import { Post } from "../../Types/Post";

const PostView = ({ item }: { item: Post }) => {
  return (
    <a href={item.getURL()}>
      <div>
        {item.getAuthor()} - {item.getFormattedDate()}
      </div>
      <div>{item.getTitle()}</div>
    </a>
  );
};

export default PostView;
