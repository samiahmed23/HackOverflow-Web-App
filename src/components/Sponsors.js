import { Container } from "react-bootstrap";
import { useEffect } from "react";
import devfolioWhite from "../assets/img/devfolioWhite.png";
import polygonWhite from "../assets/img/polygonWhite.png";
import solanaWhite from "../assets/img/solanaWhite.png";
import replitWhite from "../assets/img/replitWhite.png";
import filecoinWhite from "../assets/img/filecoinWhite.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MediumSponsorsCard from "./MediumSponsorsCard";
import "./Sponsor.css";
import GoldSponsorCard from "./GoldSponsorCard/GoldSponsorCard";

// UNUSED
// import hack2skill from "../assets/img/devfolioWhite.png";
// import TitleSponsorsCard from "./TitleSponsorsCard";
// import GeneralSponsorsCard from "./GeneralSponsorsCard";

export const Sponsors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sm:my-5 p-2 px-2">
        <div className="row pt-5">
          <div className="col-md-10 col-12 spon_us mb-5">
            <div className="row CotentRow">
              <div className="col-7">
                {/* <div className="triangle-left"></div> */}
                <p className="spon_p">Reach hundreds of students and potential customers by sponsoring HackOverFlow 1.0</p>
                <h1 className="spon_head mt-5">WANT TO <br />SPONSOR US</h1>
              </div>
              <div className="col-5 spon_right">
                <p className="spon_p"></p>
                <div className="boxx">
                  <a href="https://phcet.tech/brochure" target="_blank" rel="noreferrer"><div className="spon_coll"><span className="text-[9px] md:text-[22px]">Brochure</span></div></a>
                  <a href="https://phcet.tech/sponsors" target="_blank" rel="noreferrer"><div className="spon_coll mt-4"><nowrap><span className="text-[9px] md:text-[22px]">Fill the form</span></nowrap></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sponsors" id="sponsors">
        <Container>
          <div className="relative p-4 lg:py-10 w-full">
            <h1
              className="text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize"
              style={{ fontFamily: "Helvetica Bold" }}
            >
              Our Sponsors
            </h1>
            <div className="absolute h-[2px] bg-[#7b1072] w-56" />
          </div>
          <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1 className="capitalize text-[2rem] lg:text-[2.5rem] font-normal">
              Platinum Sponsor
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-3">
            <MediumSponsorsCard
              weblink={'https://devfolio.co/home/'}
              image={devfolioWhite}
              dataAos="fade-right"
            />
            <MediumSponsorsCard
              weblink={'https://polygon.technology/'}
              image={polygonWhite}
              dataAos="fade-left"
            />
          </div>
          {/* <TitleSponsorsCard image={hack2skill} dataAos="fade-up" weblink={'#'} /> */}
          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div>

          <div className="lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1 className="capitalize text-[2rem] lg:text-[2.5rem] font-normal">
              Gold Sponsor
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-2 xl:grid xl:grid-cols-3 xl:gap-6">
            <GoldSponsorCard
              weblink={'https://replit.com/'}
              image={replitWhite}
              dataAos="fade-right"
            />
            <GoldSponsorCard
              weblink={'https://solana.com/'}
              image={solanaWhite}
              dataAos="fade-left"
            />
            <GoldSponsorCard
              weblink={'https://filecoin.io/'}
              image={filecoinWhite}
              dataAos="fade-left"
            />
          </div>

          {/* <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-3">
            <MediumSponsorsCard
              weblink={'#'}
              title="Event Sponsors"
              image={hack2skill}
              dataAos="fade-right"
            />
            <MediumSponsorsCard
              weblink={'#'}
              title="Associate Sponsors"
              image={hack2skill}
              dataAos="fade-left"
            />
            <MediumSponsorsCard
              weblink={'#'}
              title="Upskilling Sponsors"
              image={hack2skill}
              dataAos="fade-right"
            />
            <MediumSponsorsCard
              weblink={'#'}
              title="Silver Sponsors"
              image={hack2skill}
              dataAos="fade-left"
            />
          </div> */}
          <div className="pt-10">
            <hr className="text-[#767676] dark:text-[#767676]" />
          </div>
          {/* <div className="p-6 lg:px-56 lg:pt-10 space-y-8 fonts-space-grotesk text-[#fafafa] flex space-x-2 justify-center">
            <h1 className="capitalize text-[1.4rem] lg:text-[1.6rem] font-normal">
              General Sponsors
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid xl:grid-cols-4 xl:gap-5 md:grid md:grid-cols-2 md:gap-3">
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
            <GeneralSponsorsCard image={hack2skill} dataAos="fade-up" />
          </div> */}
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </>

  );
};
