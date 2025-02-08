import React from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

interface PostSectionProps {
  onClose: () => void;
}

const PostSection: React.FC<PostSectionProps> = ({ onClose }) => {
  return (
    <div className="post-overlay">
      <div className="post-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <FaCloudUploadAlt className="upload-icon" size={60} />
        <h2>Create a New Post</h2>
        <button className="browse-button">Browse Computer Files</button>
      </div>
    </div>
  );
};

export default PostSection;
