// eslint-disable-next-line
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Button from "../components/button";
import PortfolioCard from "../components/portfolio";
import Testimonial from "../components/testimonial";
import YoutubeEmbed from "../components/youtube-embed";
import SectionHeader from "../components/section-header";

import GranthAPIs from "../services/granths";
import PortfolioAPIs from "../services/portfolio";

import Request from "../utils/request";

export default function Home() {
  const router = useRouter();
  const customStyle = {
    homepage: {
      zIndex: "-1",
      height: "90vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundImage: `url("https://res.cloudinary.com/dqmmfvccl/raw/upload/v1669662190/rprezyelfhy9nkdgseim.png")`,
    },
    overlay: {
      zIndex: "-1",
      height: "90vh",
      width: "100%",
      opacity: "0.5",
      backgroundColor: "#7a7878",
    },
    button: {
      width: "200px",
      textAlign: "center",
    },
  };

  let [videos, setVideos] = useState([]);
  let [granths, setGranths] = useState([]);
  let [portfolios, setPortfolios] = useState([]);

  const testimonials = [
    {
      image:
        "https://www.imilap.com/profileimages/profile_11%20SDN_01553%20copy.jpg",
      name: "Subhash Kalarathi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      profileName: "",
      city: "Mumbai",
    },
    {
      image:
        "https://www.imilap.com/profileimages/profile_PHOTO-2022-08-19-03-30-28.jpg",
      name: "Sonali Pandit",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      city: "Pune",
    },
    {
      image:
        "https://c.ndtvimg.com/2021-08/62mlsdc8_falguni-nayar_625x300_03_August_21.jpg",
      name: "Subodh Kalarathi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      city: "Delhi",
    },
  ];

  useEffect(() => {
    fetchVideo();
    fetchGranths();
    fetchDocuments();
    // eslint-disable-next-line
  }, []);

  const fetchGranths = async () => {
    try {
      const query = {
        limit: 5,
        skip: 0,
      };
      const filterParams = `?${Request.toRequestParams(query)}`;
      const response = await GranthAPIs.getGrants(filterParams);
      if (response.ok) {
        granths = response.data.data;
        setGranths(JSON.parse(JSON.stringify(granths)));
      } else {
        console.log("Error occurred while getting granth", error.message);
      }
    } catch (error) {
      console.log("Error occurred while getting document", error.message);
    }
  };

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

  const fetchVideo = async () => {
    try {
      const documentType = "video";
      const response = await PortfolioAPIs.getPortfolio(documentType);
      if (response.ok) {
        videos = response?.data?.data?.filter((video, index) => index <= 6);
        setVideos(JSON.parse(JSON.stringify(videos)));
      } else {
        console.log("Error occurred while getting document");
      }
    } catch (error) {
      console.log("Error occurred while getting document", error.message);
    }
  };

  return (
    <>
      <section style={{ height: "90vh" }}>
        <div className="homepage" style={customStyle.homepage}>
          <div className="overlay" style={customStyle.overlay}></div>
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "20%",
              width: "50%",
              color: "white",
            }}
          >
            <div className="text-8xl text-white">श्री चंद्रप्पामुत्याजी</div>
            <div className="text-xl mt-3 ml-5 text-yellow-500">
              इंसान से भगवान बनने तक की यात्रा
            </div>
            <div className="text-xl mt-5 ml-5 text-white w-100">
              हजारों सालों से बहुत सारे महापुरुषों ने, वैज्ञानिकों ने,मन को
              समझने के लिए अपनी पूरी जिंदगी खत्म कर दी है, और कुछ ही लोग कुछ हद
              तक जानकारी भी प्राप्त की है। मगर असल बात अभी कोई नहीं जान पाया है।
              इसीलिए परमात्मा ने भगवान श्री चंद्रप्पा मुत्याजी के विनंती पर मन
              की पुर्ण जानकारी दी है। मन की 100% जानकारी लेने के लिए श्री
              चंद्रलीला ग्रंथ का अध्ययन करना चाहिए।
            </div>
            <Button
              onClick={() => router.push("/contact-us")}
              className="justify-center mt-10 ml-6"
              style={customStyle.button}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
      <section style={{ height: "60vh" }}>
        <div className="mt-10 text-center">
          <SectionHeader title="Granth" />
          <div className="mt-16"></div>
          <div className="mt-10">
            <Button
              type="submit"
              onClick={() => router.push("/granth")}
              className="justify-center"
              style={customStyle.button}
            >
              View Granths
            </Button>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100"
        style={{ height: "auto", padding: "100px 0px" }}
      >
        <div className="text-center">
          <SectionHeader title="Portfolio" />
          <div className="mt-10 mb-10 flex justify-center flex-wrap gap-8">
            {portfolios.map((picture) => (
              <PortfolioCard data={picture} />
            ))}
          </div>
          <div className="mt-10">
            <Button
              onClick={() => router.push("/portfolios")}
              className="justify-center"
              style={customStyle.button}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
      <section style={{ height: "auto", padding: "40px 0px" }}>
        <div className="mt-10 text-center">
          <SectionHeader title="Video" />
          <div
            className="rounded-lg grid md:grid-flow-col sm:grid-flow-col-1 mt-16 gap-5"
            style={{
              padding: "10px 50px",
            }}
          >
            {videos.map((video) => (
              <div className="p-5">
                <YoutubeEmbed embedId={video?.embedId || "ZXhU9nLMRVM"} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              onClick={() => router.push("/videos")}
              className="justify-center"
              style={customStyle.button}
            >
              View Video
            </Button>
          </div>
        </div>
      </section>
      <section
        className="bg-gray-100 mt-20"
        style={{ height: "auto", padding: "100px 0px" }}
      >
        <div className="text-center">
          <SectionHeader
            title="Testimonials"
            description="See what our clients says about us"
          />
          <div className="flex justify-center mt-16">
            {testimonials.map((testimonial) => (
              <div className="mr-10">
                <Testimonial data={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
