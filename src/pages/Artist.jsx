import React from "react";
import {
  user1_bg,
  user2_bg,
  user3_bg,
  user4_bg,
  user5_bg,
  profilepic,
  profilepic2,
} from "../assets";

const Artist = () => {
  return (
    <div className="w-72 bg-white p-6 rounded-lg shadow-lg border-l overflow-y-auto max-h-screen">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex items-center gap-4 mb-4 font-gilroy">
          <h3 className="font-bold text-lg">Artists</h3>
          <p className="text-gray-500 text-sm mr-2">photographer</p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            name: "Amit Kumar",
            username: "@amitkumar",
            image: profilepic,
            backgroundImage: user1_bg,
          },
          {
            name: "Priya Sharma",
            username: "@priyasharma",
            image: profilepic2,
            backgroundImage: user2_bg,
          },
          {
            name: "Rahul Verma",
            username: "@rahulverma",
            image: "",
            backgroundImage: user3_bg,
          },
          {
            name: "Neha Gupta",
            username: "@nehagupta",
            image: "",
            backgroundImage: user4_bg,
          },
          {
            name: "Arjun Singh",
            username: "@arjunsingh",
            image: "",
            backgroundImage: user5_bg,
          },
          {
            name: "Ananya Pandey",
            username: "@ananyapandey",
            image: "",
            backgroundImage: user5_bg,
          },
          {
            name: "Ravi Patel",
            username: "@ravipatel",
            image: "",
            backgroundImage: user1_bg,
          },
          {
            name: "Sita Devi",
            username: "@sitadevi",
            image: "",
            backgroundImage: user1_bg,
          },
          {
            name: "Vikas Mehta",
            username: "@vikasmehta",
            image: "",
            backgroundImage: user1_bg,
          },
          {
            name: "Kavya Reddy",
            username: "@kavyareddy",
            image: "",
            backgroundImage: user1_bg,
          },
        ].map((artist, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
            style={{
              backgroundImage: `url(${artist.backgroundImage})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-[244px] h-[126px] rounded-[10px] opacity-100 bg-cover bg-center"
              style={{
                backgroundImage: `url(${artist.backgroundImage})`,
              }}
            ></div>
            <img
              src={artist.image}
              // alt={artist.name}
              className="w-16 h-16 text-white rounded-full object-cover"
            />
            <div className="">
              <h4
                className="font-bold text-white"
                style={{
                  width: "91px",
                  height: "19px",
                  color: "#FFFFFF",
                  opacity: 1,
                }}
              >
                {artist.name}
              </h4>
              <p className="text-white text-sm">{artist.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
