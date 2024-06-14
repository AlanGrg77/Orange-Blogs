import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContex";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const { query } = useContext(AuthContext);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        console.log("Fetched data:", res.data);
        setPosts(res.data);
        setVisiblePosts(res.data.slice(0, postsPerPage));
        if (res.data.length <= postsPerPage) {
          setLoadMoreVisible(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat, postsPerPage]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const handleLoadMore = () => {
    const newPostsPerPage = postsPerPage + 5; // Increase by 5, adjust as needed
    setVisiblePosts(posts.slice(0, newPostsPerPage));
    setPostsPerPage(newPostsPerPage);
    if (newPostsPerPage >= posts.length) {
      setLoadMoreVisible(false);
    }
  };
  let searchedItem = visiblePosts.filter(todo=>{
    let Title = todo.title;
    return Title.toLowerCase().includes(query.toLowerCase())
})

  return (
    <div className="home">
      <div className="posts">
        {searchedItem.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`..//upload/${post.img}`} alt="" />
              </div>
              <div className="content">
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p className="description">{getText(post.desc)}</p>
                <Link to={`/post/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {loadMoreVisible && (
        <div className="load-more">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Home;
