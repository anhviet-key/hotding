/** @format */

import React from "react";
import Video from "../../../../assets/video.mp4";
import Mask from "../../../../assets/mask.jpg";
import ContentNew from "./contentNew";
export default function HeaderNews() {
  return (
    <>
      <div className=''>
        <div className='header-news relative'>
          <video
            className=''
            autostart
            autoPlay
            loop
            muted
            src={Video}
            type='video/mp4'
          />
          <img src={Mask} alt='' className='maskImg' />
          <h2>Information</h2>
        </div>
        <ContentNew />
      </div>
    </>
  );
}
