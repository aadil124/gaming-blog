import BlogList from "../BlogList";
import useCustomFetch from "../customFetch";

const AllBlogs = () => {
  const { datas, isFetchPending, isError } = useCustomFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="allblogs">
      <h1>All Blogs</h1>
      {isError && <div>{isError}</div>}
      {isFetchPending && <div>Data is Loading ....</div>}
      {datas && <BlogList blogs={datas} title="Gaming Blogs" />}
    </div>
  );
};

export default AllBlogs;
