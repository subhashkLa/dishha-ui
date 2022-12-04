import React, { useCallback, useEffect, useState } from "react";

import ImageViewer from "react-simple-image-viewer";

const PortfolioCard = (props) => {
  const {
    data,
    index,
    pictures,
    showImageFullScreenView,
    setIsViewerOpen,
    isViewerOpen,
  } = props;

  const customStyle = {
    cardStyle: {
      width: "200px",
      height: "300px",
    },
    imageStyle: {
      width: "200px",
      height: "300px",
    },
  };

  const [currentImage, setCurrentImage] = useState(0);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen && setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen && setIsViewerOpen(false);
  };

  return (
    <>
      <div style={customStyle.cardStyle} className="rounded-lg">
        <img
          onClick={() => openImageViewer(index)}
          style={customStyle.imageStyle}
          className="rounded-lg cursor-pointer"
          src={data?.url}
        />
      </div>
      {isViewerOpen && (
        <div style={{ marginTop: "10px" }}>
          <ImageViewer
            src={pictures}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
