import React from "react";
import Button from "@mui/material/Button";
// import ReactPlayer from "react-player/wistia";

function Landing() {
  return (
    <div className="landing">
      <Button
        color="primary"
        variant="contained"
        href="https://www.canva.com/design/DAFFtnKEmVI/JEx3V0VF6dKBZhMRjVnKpA/edit?utm_content=DAFFtnKEmVI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="__blank"
        rel="noopener noreferrer"
        style={{ marginBottom: "40px" }}
      >
        Презентация
      </Button>
      <iframe
        title="ML Demo Video"
        src="//fast.wistia.com/embed/iframe/dhubzfmqvx"
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
