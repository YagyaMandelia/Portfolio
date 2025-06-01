import React, { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import ReactPlayer from "react-player";
import VideoPlay from "./components/VideoPlay";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Link } from "react-router";
import TypingText from "./components/Typing";
import TypingSkills from "./components/Skills";

function App() {
  const skillsref = useRef(null);
  const contactref = useRef(null);
  const workref = useRef(null);
  const experienceRef = useRef(null);
  const profileref = useRef(null);

  return (
    <>
      <div className="w-screen h-screen bg-black overflow-scroll hide-scrollbar">
        <Nav
          sr={skillsref}
          pr={profileref}
          cr={contactref}
          wr={workref}
          er={experienceRef}
        />

        {/*Profile*/}

        <div
          ref={profileref}
          className="flex border-b-1 border-white flex-col lg:flex-row lg:p-10 items-center justify-center mt-30 lg:mt-20 gap-10"
        >
          <img
            src="/DP.jpeg"
            className="rounded-full w-[70%] h-[70%] lg:rounded-3xl lg:w-[25%]"
          />
          <div className="flex flex-col gap-4 justify-center ">
            <p className="text-white p-3 lg:p-0 font-['Chillax'] text-2xl">
              I’m an Assistant Director and Art Director, graduated in
              journalism and Mass Communication with specialization of film
              making from MITWPU pune. I bring stories to life through planning,
              on-set management, and creative set design. Explore my work to see
              how I combine artistry and precision.
            </p>
            <div className="flex flex-col gap-3 p-3 font-['Chillax'] text-2xl text-white">
              <span>
                My Proficiency: <TypingText />
              </span>
              <span>
                My Skills: <TypingSkills />
              </span>
              <span>Looking forward to work with you</span>
              <Link
                to={
                  "https://accounts.google.com/v3/signin/confirmidentifier?authuser=0&continue=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1ovaUtwV7V9MCGPVGces0VUkS4zGm9VXa%2Fview%3Fusp%3Ddrivesdk&followup=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1ovaUtwV7V9MCGPVGces0VUkS4zGm9VXa%2Fview%3Fusp%3Ddrivesdk&ifkv=AdBytiPbnu7r2IiXkvbcz55pCJU0mz5Ikuyh970OBuWBsV-RAMJ4IS-L8dGHkESYM7iNsMFgGUmdOw&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-251257943%3A1748706305861487"
                }
              >
                {" "}
                <span className="text-blue-400 hover:underline cursor-pointer">
                  My CV
                </span>
              </Link>
              <Link
                to={
                  "https://drive.google.com/drive/folders/10Ya37lKR_e3u0T4b-Gg0iA9CBwGZ26f6"
                }
              >
                <span className="text-blue-400 hover:underline cursor-pointer">
                  My graphic designs
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/*Work*/}

        <VideoPlay />

        {/*Work*/}
        <div
          ref={experienceRef}
          className="border-b-1 border-white flex flex-col pb-20 "
        >
          <h1 className="text-blue-400 text-3xl font-['Chillax'] self-center m-5">
            Experience
          </h1>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full flex justify-center items-center mt-5"
          >
            <CarouselContent className="items-center">
              {[
                "/pasoori.jpeg",
                "/D.jpg",
                "/Mishti2.jpeg",
                "/NS.png",
                "/TFM.jpeg",
                "/VPS2.jpeg",
              ].map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <div className="w-full h-[300px]  rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={src}
                      alt={`slide-${index}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/*skills*/}
        <div
          ref={skillsref}
          className="flex flex-col p-3 gap-5 border-b-1 border-white"
        >
          <h1 className="font-['Chillax'] text-blue-400 text-3xl self-center m-5 ">
            My Qualifications and Skills
          </h1>
          <p className="font-['Chillax'] text-white text-xl ">
            Graduated in BA journalim and Mass communion from MITWPU, Pune. I
            have also done a 3 months certificate coarse of graphic designing
            from INISD, Gwalior. I have 3 years of experience working on various
            film projects as an Intern and Freelancer. Through my career, I’ve
            had the opportunity to work in multiple Short Films , Music videos
            and Series as a Production Designer, Art Director, 1stAssistant
            Director, 2nd Assistant Director, Assistant to assistant Director,
            Director’s Assistant. I’ve worked in Various FTII projects as a
            freelancer & recently interned with a Delhi based Company called
            Grey Blue Ventures on a commic series as an Art Director and Third
            Ad, where i sharpen up my skills and learn to adapt to different
            aspects of filmmaking. I am excited to continue taking new
            challenges and projects in the industry.
          </p>
          <div className=" flex flex-wrap gap-3 justify-center items-center">
            <img
              src="/c1.jpeg"
              alt=""
              className="w-[40%] h-[40%] lg:w-[20%] hover:scale-110"
            />
            <img
              src="/c2.jpeg"
              alt=""
              className="w-[40%] h-[40%] lg:w-[20%] hover:scale-110"
            />
            <img
              src="/c3.jpeg"
              alt=""
              className="w-[40%] h-[40%] lg:w-[20%] hover:scale-110"
            />
            <img
              src="/c4.jpeg"
              alt=""
              className="w-[40%] h-[40%] lg:w-[20%] hover:scale-110"
            />
          </div>
        </div>

        {/* Contact */}
        <div ref={contactref} className="flex flex-col p-3">
          <h1 className="text-white font-['Chillax'] self-center text-xl">
            Contact
          </h1>
          <div className="flex gap-10 justify-center items-center p-3">
            <a
              href="https://www.instagram.com/yagya03_/profilecard/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[10%] lg:w-[3%]"
            >
              <img src="/instagram.png" className="w-full cursor-pointer" />
            </a>

            <a
              href="https://www.linkedin.com/in/yagya-mandelia-2a4a20238/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="w-[10%] lg:w-[3%]"
            >
              {" "}
              <img
                src="/linkdin2.png"
                alt=""
                className="w-full cursor-pointer"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=918770897959&text&type=phone_number&app_absent=0"
              className="w-[10%] lg:w-[3%]"
            >
              {" "}
              <img
                src="/whatsapp.png"
                alt=""
                className="w-full h-full cursor-pointer"
              />
            </a>
            <a href="mailto:yagyam03@gmail.com" className="w-[10%] lg:w-[3%]">
              <img
                src="/mail.png"
                alt=""
                className="w-full h-full cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
