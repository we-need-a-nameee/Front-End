import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import gluten from "D:/Depi/MediConnect/Front-End/src/assets/gluten.jpg"
export default function Blog() {
  const navigate = useNavigate(); 
  const [posts, setPosts] = useState([
    {
      id: 1,
      content:
        "As a physician, I often see patients searching for effective ways to manage their pain. While medications and therapies are often the focus, an increasingly important factor is emerging: the role of diet and gut health in pain management.",
      title: "How Your Diet Affects Your Pain",
      author: { name: "Dr. Anita Gupta", profession: "PharmD", imageUrl: "https://via.placeholder.com/300x300" },
      date: "October 8, 2024",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [
        "Omar: Informative!",
        "Marina: One of the best articles I have ever read.",
      ],
      newComment: "",
    },
    {
      id: 2,
      content:
        "“You’re going in through the exit, idiot.” These seven words from a stranger were enough to ruin the rest of the day for John. He’d just enjoyed a lovely week at the beach with his family and had stopped at a department store on the last morning of their vacation. John was in a great mood just before this incident, and then wound up fuming for the entire 6-hour car ride home, unable to let it go.",
      title: "Don't Let Other People Ruin Your Day",
      author: { name: "Dr. Seth J. Gillihan", profession: "Therapist", imageUrl: "https://via.placeholder.com/300x200" },
      date: "July 14, 2021",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [
        "Omar: Insightful!",
        "Ahmed: Great Article.",
      ],
      newComment: "",
    },
    {
      id: 3,
      content:
        "Myth: Cutting out gluten means cutting out carbs.\nFact: Not all carbohydrates contain gluten. Gluten is a protein found in wheat, barley, rye, and related grains like spelt and farro. Many other grain foods such as rice, oats, and quinoa are naturally gluten-free. Carbohydrate-rich foods like fruit, plain yogurt, and vegetables like potatoes and corn don’t naturally contain gluten either.",
      title: "Myths and Facts About Going Gluten-Free",
      author: { name: "Sally Kuzemchak", profession: "Doctor", imageUrl: gluten },
      date: "August 12, 2022",
      reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
      comments: [""],
      newComment: "",
    },
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");
  const [newPostFile, setNewPostFile] = useState(null);

  const handleAddPost = () => {
    if (newPostContent) {
      const newPost = {
        id: Date.now(),
        content: newPostContent,
        title: "New Blog Post", // Default title for new posts
        imageUrl: newPostFile ? URL.createObjectURL(newPostFile) : newPostImage,
        author: { name: "Marina", profession: "User", imageUrl: "https://via.placeholder.com/50" },
        date: new Date().toLocaleDateString(),
        reactions: { like: 0, love: 0, haha: 0, sad: 0, angry: 0 },
        comments: [],
        newComment: "",
      };
      setPosts([...posts, newPost]);
      setNewPostContent("");
      setNewPostImage("");
      setNewPostFile(null);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewPostFile(file);
      setNewPostImage("");
    }
  };

  const handleAddComment = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId && post.newComment) {
        return {
          ...post,
          comments: [...post.comments, `Marina: ${post.newComment}`],
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
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full bg-blue-100 py-10">
        <div className="container mx-auto px-4 text-center mt-4">
          <h1 className="text-4xl font-bold text-da mb-4">Our Health Blog</h1>
          <p className="text-lg text-pr mb-4">
            Stay informed with the latest health tips and articles by experts.
          </p>
        </div>
      </div>

      {/* Main Blog Content */}
      <div className="container mx-auto py-10 px-4">
        {/* Create a New Post Section */}
        <div className="create-post mb-10 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Create a New Post</h3>
          <textarea
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pr"
            rows="3"
            placeholder="What's on your mind?"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <input
            type="url"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pr"
            placeholder="Image URL (optional)"
            value={newPostImage}
            onChange={(e) => {
              setNewPostImage(e.target.value);
              setNewPostFile(null);
            }}
          />
          <input
            type="file"
            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pr"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="w-full bg-pr text-white py-2 rounded-md hover:bg-da transition-all"
            onClick={handleAddPost}
          >
            Post
          </button>
        </div>

        {/* Display Posts */}
        <div className="posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="blog-post mb-6 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              )}
              <div className="mb-4">
                <h2
                  className="text-xl font-bold text-gray-900 hover:text-blue-500 cursor-pointer"
                  
                >
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="reactions mb-4 flex space-x-2">
                <button
                  className="bg-gray-100 p-2 rounded-lg hover:bg-c3 transition"
                  onClick={() => handleReaction(post.id, "like")}
                >
                  👍 {post.reactions.like}
                </button>
                <button
                  className="bg-gray-100 p-2 rounded-lg hover:bg-red-300 transition"
                  onClick={() => handleReaction(post.id, "love")}
                >
                  ❤️ {post.reactions.love}
                </button>
                <button
                  className="bg-gray-100 p-2 rounded-lg hover:bg-yellow-300 transition"
                  onClick={() => handleReaction(post.id, "haha")}
                >
                  😂 {post.reactions.haha}
                </button>
                <button
                  className="bg-gray-100 p-2 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => handleReaction(post.id, "sad")}
                >
                  😢 {post.reactions.sad}
                </button>
                <button
                  className="bg-gray-100 p-2 rounded-lg hover:bg-red-500 transition"
                  onClick={() => handleReaction(post.id, "angry")}
                >
                  😡 {post.reactions.angry}
                </button>
              </div>
              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pr"
                  value={post.newComment}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                />
                <button
                  className="mt-2 bg-pr text-white py-2 px-4 rounded-md hover:bg-da transition-all"
                  onClick={() => handleAddComment(post.id)}
                >
                  Comment
                </button>
              </div>
              <div className="comments mt-4">
                {post.comments.map((comment, index) => (
                  <p key={index} className="text-gray-600 text-sm">
                    {comment}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
