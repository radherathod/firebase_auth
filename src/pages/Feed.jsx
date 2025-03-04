import React from "react";
import post from "../assets/post.png";
import post2 from "../assets/post2.png";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Feed = () => {
  const postImages = [post, post2];

  return (
    <div className="bg-gray-100 flex flex-col items-center row-span-2 overflow-y-auto rounded-lg w-full hide-scrollbar">
      {["Radhe", "Prathamesh", "Shree", "Sumit"].map((name, index) => {
        const usernames = {
          Radhe: "radherathod",
          Prathamesh: "prathamesh1234",
          Shree: "shreesham",
          Sumit: "sumitnegi",
        };

        return (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-6 w-full"
          >
            <div className="flex items-center space-x-4 mb-5">
              <img
                src={postImages[index]}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{name}</h3>
                <p className="text-gray-500 text-sm font-gilroy">
                  @{usernames[name]}
                </p>
              </div>
            </div>
            <p className="mb-3 font-gilroy">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout,
              especially when the content is full of intricate details
              {index === 0 && (
                <span className="text-red-500 cursor-pointer"> Read More</span>
              )}
            </p>
            <img
              src={postImages[index]}
              alt="Post"
              className="rounded-lg mb-3"
            />
            <div className="flex justify-between text-gray-600">
              <div className="flex items-center space-x-2">
                <FaHeart /> <span>{(9.8 - index * 1.2).toFixed(1)}k</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaComment /> <span>{(8.6 - index * 1.1).toFixed(1)}k</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaShare /> <span>{(7.2 - index).toFixed(1)}k</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
