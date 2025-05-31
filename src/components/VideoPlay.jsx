import React from "react";
import ReactPlayer from "react-player";

function VideoPlay() {
  return (
    <>
      <div className="flex flex-col gap-5 border-b-1 border-white h-[100%] p-3 lg:h-[150%] mt-5  items-center  ">
        <h1 className="text-blue-400 text-3xl font-['Chillax']">My Work</h1>\
        <div className="w-full h-[25%] lg:w-[60%] lg:h-[40%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8mdP_k8w26U&t=1s"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="w-full h-[25%] lg:w-[60%] lg:h-[40%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Du36Ykl_XuE"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="w-full h-[25%] lg:w-[60%] lg:h-[40%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=iUIZcZceZf0"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default VideoPlay;
