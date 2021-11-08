import React, { useState, useEffect } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";

import Post from "./Post";
import { db } from "../firebase";

// const posts = [
//   {
//     id: "123",
//     username: "thebeast",
//     userImg: "https://images.unsplash.com/photo-1564932437263-dbf5578771bb",
//     img: "https://images.unsplash.com/photo-1564932437263-dbf5578771bb",
//     caption: "I am at it!!!!",
//   },
//   {
//     id: "123",
//     username: "thebeast",
//     userImg: "https://images.unsplash.com/photo-1564932437263-dbf5578771bb",
//     img: "https://images.unsplash.com/photo-1564932437263-dbf5578771bb",
//     caption: "I am at it!!!!",
//   },
// ];

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
