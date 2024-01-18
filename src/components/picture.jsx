import React, { useState } from "react";

const PictureGallery = ({ pictureData }) => {
  const [showFullImage, setShowFullImage] = useState(null);

  const handleImageClick = (index) => {
    setShowFullImage(index);
  };

  const handleCloseFullImage = () => {
    setShowFullImage(null);
  };

  return (
    <div className="pages_area">
      {pictureData.map((picture, index) => (
        <div className="area_pad" key={picture.date}>
          <h2 className="area_pad">{picture.title}</h2>
          <p className="area_pad">{picture.date}</p>
          <div className="image_description__container">
            <p className="description_img area_pad">{picture.explanation}</p>
            <img
              className={`space_image area_pad ${
                showFullImage === index ? "full_size" : ""
              }`}
              src={picture.url}
              alt={picture.title}
              style={{ height: showFullImage === index ? "100%" : "50%" }}
              onClick={() => handleImageClick(index)}
            />
            
            {showFullImage === index && (
              <div className="overlay" onClick={handleCloseFullImage}>
                <img
                  className="full_size_image"
                  src={picture.url}
                  alt={picture.title}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PictureGallery;
