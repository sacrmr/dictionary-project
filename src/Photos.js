import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          <div className="col-md-6">
            {props.photos.slice(0, 3).map(function (photo, index) {
              return (
                <div key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt={photo.url}
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            {props.photos.slice(3, 6).map(function (photo, index) {
              return (
                <div key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt={photo.url}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}