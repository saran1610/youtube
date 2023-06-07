import React from "react";
import "./videos.scss";

function Videos({
  thumbnail,
  duration,
  title,
  channel,
  views,
  uploadtime,
  logo,
}) {
  console.log(thumbnail, duration, title, channel, views, uploadtime, logo);
  return (
    <div>
      <div className="videodisplay">
        <img src={thumbnail} alt="" />
        <p className="duration">{duration}</p>
      </div>

      <div className="display ">
        <div className="row">
          <div className="col-1 ">
            <img src={logo} alt="" />
          </div>
          <div className="col-11 line">
            <h5 className=" title">
              {title.length <= 70 ? title : `${title.substr(0, 60)}`}
            </h5>

            <h6>{channel}</h6>

            <div>
              <span>{views} views .</span>
              <span className="ms-1">{uploadtime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
