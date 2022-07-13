import PropTypes from "prop-types";
import React from "react";
import SanityImage from "../SanityImage";
import ReactPlayer from "react-player";

function FullSizeImage({ image, videoId }) {
  return (
    <>
      <div className="bg-dark-gray mx-auto">
        {!videoId ? (
          <SanityImage image={image} />
        ) : (
          <div className="relative pt-[56.25%]">
            {" "}
            {/* Responsive, full-width, video player */}
            <ReactPlayer
              className="absolute top-0 left-0"
              url={videoId}
              width="100%"
              height="100%"
            />
          </div>
        )}
      </div>
    </>
  );
}

FullSizeImage.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  videoId: PropTypes.string,
};

export default FullSizeImage;
