import React, { useEffect, useState } from "react";
import PortfolioCard from "../../components/portfolio";
import SectionHeader from "../../components/section-header";

import PortfolioAPIs from "../../services/portfolio";

const Portfolio = (props) => {
  let [portfolios, setPortfolios] = useState([]);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const documentType = "photo";
      const response = await PortfolioAPIs.getPortfolio(documentType);
      if (response.ok) {
        portfolios = response?.data?.data?.filter(
          (portfolio, index) => index <= 14
        );
        setPortfolios(JSON.parse(JSON.stringify(portfolios)));
      } else {
        console.log("Error occurred while getting document");
      }
    } catch (error) {
      console.log("Error occurred while getting document", error.message);
    }
  };

  return (
    <>
      <div className="p-10 mt-10" style={{ height: "auto" }}>
        <div className="text-center">
          <SectionHeader title="Portfolio" />
        </div>
        <div
          className="ml-20 flex flex-row gap-10 flex-wrap mt-10"
          onClick={() => setIsViewerOpen(true)}
        >
          {portfolios.map((picture, index) => (
            <PortfolioCard
              index={index}
              data={picture}
              isViewerOpen={isViewerOpen}
              setIsViewerOpen={setIsViewerOpen}
              pictures={portfolios.map((ele) => ele?.url)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
