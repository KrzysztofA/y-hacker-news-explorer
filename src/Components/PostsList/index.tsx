import Post from "../../Types/Post";
import PostView from "../PostView";

const PostsList = ({ items }: { items: Post[] }) => {
  return (
    <ul>
      {items?.map((x, i) => (
        <li key={`listItem${i}${x.getObjectID}`}>
          <PostView item={x} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
