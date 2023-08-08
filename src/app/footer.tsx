"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="Footer-Section">
      <div className="Footer-Top">
        <div className="Footer-Browse">
          <p>BROWSE</p>
        </div>
        <div className="Footer-SubSection">
          <p>HELP</p>
          <p>ABOUT US</p>
        </div>
      </div>
      <div className="Footer-Column-Container">
        <div className="Footer-Column">
          <p>Streaming Library</p>
          <p>Live TV</p>
          <p>Live News</p>
          <p>Live Sports</p>
        </div>

        <div className="Footer-Column">
          <p>TV Shows</p>
          <p>Movies</p>
          <p>Originals</p>
          <p>Networks</p>
          <p>Kids</p>
          <p>FX</p>
        </div>
        <div className="Footer-Column">
          <p>Max</p>
          <p>Cinemax</p>
          <p>Showtime</p>
          <p>STARZ</p>
        </div>
        <div className="Footer-Column">
          <p>Hulu, Disney+, and ESPN+</p>
          <p>Hulu (No Ads), Disney+, and ESPN+</p>
          <p>Student Discount</p>
        </div>

        {/* Area to follow the right content of footer */}
        <div className="Footer-SubColumn">
          <div className="">
            <p>Account & Billing</p>
            <p>Plans & Pricing</p>
            <p>Supported Devices</p>
            <p>Accessibility</p>
          </div>
          <div className="Footer-Column">
            <p>Press</p>
            <p>Jobs</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="Footer-Break"></div>

      <div className="Footer-Social">
        <Image
          className="Social-Svg"
          alt="social-twitter"
          src={"https://www.hulu.com/static/hitch/static/icons/facebook.svg"}
          height={14}
          width={24}
        />

        <Image
          className="Social-Svg"
          alt="social-twitter"
          src={
            "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.2560.png"
          }
          height={14}
          width={24}
        />
        <Image
          className="Social-Svg"
          alt="social-twitter"
          src={"https://www.hulu.com/static/hitch/static/icons/youtube.svg"}
          height={14}
          width={32}
        />
        <Image
          className="Social-Svg"
          alt="social-twitter"
          src={"https://www.hulu.com/static/hitch/static/icons/instagram.svg"}
          height={14}
          width={32}
        />
      </div>

      <div className="Footer-Bottom">
        <p>About Ads</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Do Not Sell My Personal Information</p>
        <p>Your California Privacy Rights</p>
        <p>TV Parental Guidelines</p>

        <p>Sitemap</p>

        <p>© 2023 Hulu, LLC</p>
      </div>
    </footer>
  );
};
export default Footer;
