import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Divider from "../../components/divider";
import Button from "../button";

const Footer = (props) => {
  const route = useRouter();

  return (
    <>
      <footer>
        <section className="p-10">
          <div className="flex justify-center">
            <div className="flex-col">
              <div className="">
                <img src="/project-light-logo.png" className="h-20" />
              </div>
              <div className="flex justify-between text-center w-36 mt-10 ml-32">
                <a href="#twitter" className="social-icon">
                  <img src="/twitter.svg" />
                </a>
                <a href="#fb" className="social-icon">
                  <img src="/facebook.svg" />
                </a>
                <a href="#youtube" className="social-icon">
                  <img src="/youtube.svg" />
                </a>
              </div>
              <div className="flex justify-center mt-10 mr-10">
                <Button
                  onClick={() => route.push("/contact-us")}
                  className="justify-center"
                  style={{
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                  GET IN TOUCH
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="copyright">
          <p>
            <span>©</span> 2022 Rights Reserved, Aravali Bharat
          </p>
          <p>
            <a href="#privacy">Privacy</a>|
            <a href="#terms">Terms & Conditions</a>|
            <a href="#security">Security & Privacy by Aravali Bharat</a>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;

{
  /* <div className="social">
<a href="#twitter" className="social-icon">
  <img src="/twitter.svg" />
</a>
<a href="#fb" className="social-icon">
  <img src="/facebook.svg" />
</a>
<a href="#youtube" className="social-icon">
  <img src="/youtube.svg" />
</a>
</div> */
}
