import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-md">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl aspect-square object-cover"
          />
        </div>
        <h2 className="text-xl font-medium text-left text-ellipsis line-clamp-1">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
