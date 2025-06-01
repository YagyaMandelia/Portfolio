import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import { Link } from "react-router";
function Projects() {
  return (
    <>
      <div className="flex flex-col overflow-scroll  hide-scrollbar items-center w-screen h-screen bg-black p-5 lg:p-15">
        <div className="flex w-full border-b-1 border-white p-3">
          <Link to={"/"}>
            {" "}
            <span className="text-white cursor-pointer hover:underline font-['Chillax'] text-2xl self-start">
              Back
            </span>
          </Link>
        </div>
        <h1 className="text-white self-center text-2xl lg:text-3xl font-['Chillax'] mb-20 mt-20">
          My Projects & Contributions
        </h1>
        {/*VERY PAARIVARIK*/}
        <div className="flex flex-col gap-3">
          <h2 className="text-yellow-200 underline ml-5 self-center lg:self-start text-2xl font-['Chillax']">
            VERY PAARIVARIK (2025)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            <Link
              to={"https://www.youtube.com/watch?v=tWUNkqapKmk"}
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/VPS2.jpeg"
                alt=""
                className="object-contain w-50 lg:w-150"
              />
            </Link>

            <p className="text-white text-xl">
              Assisted in art for this series did set dressing ,sourcing and
              shoot handling for this project involved in every process from
              scratch. We’re back to destroy your regularly scheduled boredom
              with Very Parivarik Season 2. This family loves each
              other...conditionally!
            </p>
          </div>
        </div>

        {/*KURKURE ADD (2025)

*/}

        <div className="flex flex-col gap-3 w-full mt-30">
          <h2 className="text-red-600 underline  self-center lg:self-start text-2xl font-['Chillax']">
            KURKURE ADD (2025)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center ">
            <Link
              to={"https://www.youtube.com/watch?v=iUIZcZceZf0"}
              className=""
            >
              <img src="/KA.jpeg" alt="" className="object-contain lg:w-50" />
            </Link>

            <p className="text-white text-xl">
              Kurkure advertisement Did set dressing for this project.
              <br /> Managed all creative props.
            </p>
          </div>
        </div>

        {/*
THE FLOWERING MAN (2023)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            THE FLOWERING MAN (2023)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link
              to={"https://www.youtube.com/watch?v=Nt2e0Sxkol8"}
              className="  hover:opacity-50 cursor-pointer"
            >
              <img
                src="/TFM.jpeg"
                alt=""
                className="object-contain w-50 lg:w-200"
              />
            </Link>

            <p className="text-white text-xl">
              Sashi undergoes a metamorphosis as a flowering plant starts
              growing from inside his mouth. His distanced teenage daughter
              undertakes a journey towards embracing the new image of her
              father. It was selected in the Competition Short Fiction Section
              at the 18th Mumbai International Film Festival - MIFF and screened
              at MAMI film festival 2023 I assisted in art, set building ,
              sourcing props, handling action props and props making.
            </p>
          </div>
        </div>

        {/*
NON AC (2023)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            NON AC (2023)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link
              to={
                "https://drive.google.com/file/d/1mHRjTvdrT1gWBwRrfmRrRXxxcoXeKw0L/view"
              }
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/NONAC.jpeg"
                alt=""
                className="object-contain w-50 lg:w-400"
              />
            </Link>

            <p className="text-white text-xl">
              Maya and Jorge are immigrants from Nepal,trying to make ends meet
              and survive in the city of Pune,India and are often left feeling
              like outsiders because of the treatment they receive as
              immigrants.They find solace in each other's company and their
              friendship starts to grow into something more meaningful whose
              foundations somewhere lies on the idea of 'Home'.The film explores
              the themes of Migration, Racism,Xenophobia,Economic Class
              differences that penetrates deep into Indian Society.<br></br>
              <br />
              FTII Diploma Short Fiction Film (2023)<br></br> Role: Assistant
              Director & Art Assistant <br />
              <br />
              Art Assistance: Contributed to the art department by preparing
              mood boards, assisting with set design, and managing action props.
              Responsible for sourcing and creating props for the scenes,
              ensuring they aligned with the overall vision of the film. <br />
              1st Assistant Director: Led the pre-production planning, including
              developing shooting schedules and master sheets. Coordinated
              logistics, ensured smooth communication between departments, and
              maintained actor briefings. Managed the set during production,
              keeping track of time, and ensuring that all tasks were completed
              on schedule.
            </p>
          </div>
        </div>

        {/*
Incomplete (2023)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Incomplete (2023)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link
              to={
                "https://drive.google.com/file/d/1zGGeKVBODdIquJDyGZKtNrjkZG3teyvm/view"
              }
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/INCP.jpeg"
                alt=""
                className="object-contain w-50 lg:w-400"
              />
            </Link>

            <p className="text-white text-xl">
              This story follows Tara, a young woman battling alcoholism, as she
              makes the courageous decision to enter rehab. Facing intense
              withdrawal, emotional confrontations, and deep-seated family
              issues, she learns that sobriety is about much more than giving up
              alcohol—it’s about healing wounds, finding purpose, and redefining
              her relationships with herself and those around her.
              <br />
              <br /> FTII Student Diploma Short Fiction Film (2023) <br />
              Role: Art Director <br />
              <br />
              Worked as an Art Director on this project, responsible for
              creating mood boards for set design, planning and executing design
              strategies, and curating property lists. Also involved in
              selecting color palettes and delegating tasks to assistant
              designers, ensuring smooth workflow and attention to detail
              throughout the production process.
            </p>
          </div>
        </div>

        {/*
Mishti (2023))*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Mishti (2023)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link
              to={"https://www.youtube.com/watch?v=bJpas98l9pM"}
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/MISHTI.jpeg"
                alt=""
                className="object-contain w-50 lg:w-400"
              />
            </Link>

            <p className="text-white text-xl">
              A middle aged lonely gangster meeting his enemy to ask him if he
              is as lonely as him.
              <br />
              <br /> FTII Student Diploma Short Fiction Film (2023) <br />
              Role: Art Assistant <br />
              <br />
              Assisted in the art department, contributing to set design,
              managing action props, sourcing and organizing properties, and
              crafting some props for the scenes. Worked in alignment with the
              mood boards prepared by the Art Directors and Production Designer,
              ensuring the visual elements were consistent with the overall
              vision of the film.
            </p>
          </div>
        </div>

        {/*
Chori By Choice (2023))*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Chori By Choice (2023)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link
              to={
                "https://drive.google.com/file/d/1-Xwz_d5WN-DVOU4ntzkdKRAoJg8hzlbu/view"
              }
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/CBC.jpeg"
                alt=""
                className="object-contain w-50 lg:w-400"
              />
            </Link>

            <p className="text-white text-xl">
              As Art Director for a student short-format fiction film created
              for the IFP 2023 World 50-Hour Film Making Challenge, I managed
              all aspects of art direction under tight constraints. This
              included framing shots on short notice, executing design work
              within a minimal budget, and sourcing and arranging all essential
              props to support the film’s visual aesthetic within the limited
              timeframe.
            </p>
          </div>
        </div>

        {/*
Bright Spot (2022)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Bright Spot (2022)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link
              to={
                "https://drive.google.com/file/d/1r4uuhM-epAB0frg4LxGQT18WvO3M7ejm/view?pli=1"
              }
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/BS.jpeg"
                alt=""
                className="object-contain w-50 lg:w-400"
              />
            </Link>

            <p className="text-white text-xl">
              This documentary explores the lasting impact of the Mumbai attacks
              through the lens of untold, interwoven stories from various
              perspectives. It mixes historical reenactments, survivor
              interviews, archival footage, and fictionalized portrayals of
              those affected—creating a deeply immersive narrative that goes
              beyond the headlines. <br />
              <br />
              In a documentary produced for the 2022 IFP 50-Hour Film Making
              Challenge, I served as both Assistant Director and Art Director.
              My responsibilities involved preparing frames quickly under tight
              deadlines, managing all design work within limited budgets and
              resources, and maintaining detailed clap and log sheets to
              streamline post-production.
            </p>
          </div>
        </div>

        {/*
Savli (2022)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Savli (2022)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center justify-center">
            <Link className="  hover:opacity-50 cursor-pointer    ">
              <img
                src="/S.jpeg"
                alt=""
                className="object-contain w-50 lg:w-400"
              />
            </Link>

            <p className="text-white text-xl">
              A man finds himself accidentally transported to the past, where he
              struggles with the fear that his current misfortunes might be the
              result of past mistakes. Unwillingly trapped in this moment, he
              desperately tries to understand the chain of events and whether
              his actions can still influence his future. The film explores
              themes of fate, regret, and the consequences of choices, as the
              protagonist tries to reconcile his present self with his
              unintentional journey through time. <br />
              <br />
              As part of the art team for an FTII student diploma short-format
              fiction film (2022), I assisted in creating and arranging
              properties according to the mood board prepared by the art
              directors. My responsibilities included sourcing materials,
              crafting props, and keeping a meticulous track of action
              properties to ensure consistency in each scene.
            </p>
          </div>
        </div>

        {/*
Pasoori (2021)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Pasoori (2021)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center ">
            <Link
              to={
                "https://drive.google.com/file/d/1-0pskzk-PDDFbrG5AmbkTFhFPi88b0bs/view"
              }
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/Pasoori2.jpeg"
                alt=""
                className="object-contain w-50 lg:w-100"
              />
            </Link>

            <p className="text-white text-xl">
              A music video of a romantic love triangle and breakup.
              <br />
              <br />
              Role: First Assisstant Director
            </p>
          </div>
        </div>

        {/*
Doorbell (2023)*/}
        <div className="flex flex-col gap-3 mt-30 w-full">
          <h2 className="text-yellow-200 underline  self-center lg:self-start text-2xl font-['Chillax']">
            Doorbell (2023)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10  items-center ">
            <Link
              to={"https://www.youtube.com/watch?v=qXaaNJNVUFE"}
              className="  hover:opacity-50 cursor-pointer    "
            >
              <img
                src="/D2.jpeg"
                alt=""
                className="object-contain w-50 lg:w-100"
              />
            </Link>

            <p className="text-white text-xl">
              A young boy undergoes a dilemma when his fiancé gives him a
              surprise visit to his house when actually he was expecting someone
              else.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col p-3 mt-30">
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

export default Projects;
