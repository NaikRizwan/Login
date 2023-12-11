import React, { useEffect, useRef } from "react";

import styled from "styled-components";
const Wrapper = styled.section`
  .container {
    display: flex;
  }

  .video-container {
    width: 40%;
  }

  .video {
    width: 100%;
    height: auto;
  }

  .blocks-container {
    width: 60%;
  }

  .blocks-row {
    display: flex;
    height: 50%;
  }

  .block {
    width: 33%;
    border: 1px solid black;
    max-height: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
  }
`;
const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="video-container">
          <video ref={videoRef} className="video" autoPlay playsInline></video>
        </div>
        <div className="blocks-container">
          <div className="blocks-row">
            <div className="block">Block 1</div>
            <div className="block">Block 2</div>
            <div className="block">Block 3</div>
          </div>
          <div className="blocks-row">
            <div className="block">Block 4</div>
            <div className="block">Block 5</div>
            <div className="block">Block 6</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
