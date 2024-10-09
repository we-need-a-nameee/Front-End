import React, { useState } from "react";
import "./blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "The importance of regular health check-ups cannot be overstated. They help in early detection of health issues.",
      imageUrl: null,
      author: { name: "Dr. John Doe", profession: "General Practitioner" },
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [
        "Alice: Regular check-ups saved my life!",
        "Bob: I schedule mine every year.",
      ],
      newComment: "",
    },
    {
      id: 2,
      content: "Mental health is just as important as physical health. Make sure to take time for self-care.",
      imageUrl: null,
      author: { name: "Dr. Jane Smith", profession: "Psychiatrist" },
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [],
      newComment: "",
    },
    // Add more initial posts here if needed
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(""); // Track image URL input
  const [newPostFile, setNewPostFile] = useState(null); // Track uploaded image file

  const handleAddPost = () => {
    if (newPostContent) {
      const newPost = {
        id: Date.now(),
        content: newPostContent,
        imageUrl: newPostFile ? URL.createObjectURL(newPostFile) : newPostImage, // Use file URL or image URL
        author: { name: "Omar", profession: "User" }, // Set user name here
        reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
        comments: [],
        newComment: "",
      };
      setPosts([...posts, newPost]);
      setNewPostContent("");
      setNewPostImage(""); // Reset image URL input
      setNewPostFile(null); // Reset uploaded file
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first uploaded file
    if (file) {
      setNewPostFile(file); // Set the file in state
      setNewPostImage(""); // Clear the URL input if a file is selected
    }
  };

  const handleAddComment = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && post.newComment) {
        return {
          ...post,
          comments: [...post.comments, `Omar: ${post.newComment}`], // Set user name here
          newComment: "",
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleCommentChange = (postId, value) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          newComment: value,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleReaction = (postId, reactionType) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              [reactionType]: post.reactions[reactionType] + 1,
            },
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog</h1>

      <div className="create-post mb-5">
        <h3>Create a New Post</h3>
        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <input
          type="url"
          className="form-control mb-2"
          placeholder="Image URL (optional)"
          value={newPostImage}
          onChange={(e) => {
            setNewPostImage(e.target.value);
            setNewPostFile(null); // Clear file input if URL is used
          }}
        />
        <input
          type="file"
          className="form-control mb-2"
          accept="image/*"
          onChange={handleImageChange} // Handle image upload
        />
        <button className="btn btn-primary" onClick={handleAddPost}>
          Post
        </button>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post mb-4">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt="Post"
                className="img-fluid mb-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150"; // Default placeholder if image fails
                }}
              />
            )}
            <p>
              <strong>{post.author.name}</strong> - <em>{post.author.profession}</em>
            </p>
            <p>{post.content}</p>
            <div className="reactions mb-2">
              <button className="btn btn-light me-1" onClick={() => handleReaction(post.id, "like")}>
                👍 {post.reactions.like}
              </button>
              <button className="btn btn-light me-1" onClick={() => handleReaction(post.id, "love")}>
                ❤️ {post.reactions.love}
              </button>
              <button className="btn btn-light me-1" onClick={() => handleReaction(post.id, "haha")}>
                😂 {post.reactions.haha}
              </button>
              <button className="btn btn-light me-1" onClick={() => handleReaction(post.id, "sad")}>
                😢 {post.reactions.sad}
              </button>
              <button className="btn btn-light" onClick={() => handleReaction(post.id, "angry")}>
                😡 {post.reactions.angry}
              </button>
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control comment-input"
                placeholder="Write a comment..."
                value={post.newComment}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddComment(post.id);
                  }
                }}
              />
              <button className="btn btn-secondary mt-2" onClick={() => handleAddComment(post.id)}>
                Comment
              </button>
            </div>
            <div className="comments mt-2">
              {post.comments.map((comment, index) => (
                <p key={index}>
                  <strong>{comment.split(':')[0]}:</strong> {comment.split(':')[1]}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
