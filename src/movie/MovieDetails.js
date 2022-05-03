import React, { useState } from "react";
const MovieDetails = (videodetails) => {
  const [videokey, setVideoKey] = useState("");

  setVideoKey(videodetails.key);

  console.log("video key", videokey);
  return (
    <div>Movie Details Components</div>
    // <>
    //   <iframe
    //     width={420}
    //     height={315}
    //     src={`https://www.youtube.com/embed/${videokey}`}
    //   ></iframe>
    // </>
  );
};
export default MovieDetails;
