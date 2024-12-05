/// <reference types="vite-plugin-svgr/client" />
import LabelledTextInputForm from "./Components/LabelledTextInputForm";
import PostsList from "./Components/PostsList";
import SortingButtons from "./Components/SortingButtons";
import useFormStoredState from "./Hooks/useFormStoredState";
import usePostReducer from "./Hooks/usePostReducer";
import Load from "./loading.svg?react";

const App = () => {
  const {
    state: searchTerm,
    temp: searchTermValue,
    onStateChange: onChangeCallback,
    onSubmit,
  } = useFormStoredState("search");
  const { itemsData, error, loading, dispatch } = usePostReducer(searchTerm);

  return (
    <div className="division">
      <aside>
        <h1>Hacker News Loader</h1>
        <LabelledTextInputForm
          title="Search"
          id="search"
          value={searchTermValue}
          onSubmit={onSubmit}
          onChange={onChangeCallback}
          description="Search phrase"
        />
        <SortingButtons dispatch={dispatch} />
        {error && <div id="error">{error}</div>}
      </aside>
      <main>
        {loading && (
          <div className="load">
            <div>Loading</div>
            <Load />
          </div>
        )}
        {!error && !loading && <PostsList items={itemsData} />}
      </main>
    </div>
  );
};

export default App;
