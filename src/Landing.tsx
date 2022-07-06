import React from "react";
// import ReactPlayer from "react-player/wistia";

function Landing() {
  return (
    <div className="landing">
      <iframe
        title='ML Demo Video'
        src="//fast.wistia.net/embed/iframe/76s5twgvtw"
        allowTransparency
        frameBorder="0"
        scrolling="no"
        className="wistia_embed"
        name="wistia_embed"
        allowFullScreen
        width="620"
        height="349"
      ></iframe>
      {/* <ReactPlayer url="" /> */}
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VsRi1bnrByk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
}

export default Landing;
