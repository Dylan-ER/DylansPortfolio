import Page from "../components/page";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SwE from "../pages/img/SwE_img.png";
import project from "../pages/img/agile-01-scaled.jpg";
import education from "../pages/img/education.jpeg";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Knowledge",
    dec: "I began learning programming with C++, learning to create a library where you can check in and out books. From there I learned a mix of C and assembly for my first few years in college. Wasn't until my 3rd year where I started to learn JavaScript, React, Nextjs, HTML, CSS, and even use css frameworks like tailwind and bootstrap. ",
    img: SwE,
  },
  {
    id: 2,
    name: "Projects",
    dec: "I've worked on 2 major projects that vastly improved my skills. The first was when I was introduced into React, JavaScript, Bootstrap, and API calls to create a application similar to Airbnb. The second project lasted 2 semesters and involved updating and adding components to a survey system that will eventually be used for the school(UNT).",
    img: project,
  },
  {
    id: 3,
    name: "Education",
    dec: "After graduating highschool, I went straight into college at the University of North Texas(UNT). I've spent the last 4 years completing my bachelors in Computer Science at UNT. While attending UNT, I participated in multiple hackathons and even won first place in a category at UNT's hackathon with my team of 4!",
    img: education,
  },
];

export default function About() {
  const [show, setShow] = useState(false);
  const [info, setinfo] = useState();
  // animation for list
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  //  animation for  popup

  const variants = {
    visible: {
      scale: 1.1,
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      y: -50,
      x: -100,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };
  return (
    <Page>
      <h1 className="text-center fw-medium fs-2 lh-sm">About Me</h1>

      <div className="d-flex justify-content-center mx-5 py-2">
        <p className="rounded-pill m-2 p-2 border border-info-subtle bg-info-subtle text-info-emphasis">
          This site was created with NextJ, Bootstrap, and framer-motion! Click
          on a card to learn more on me!
        </p>
      </div>

      <section className="container mx-auto mt-5">
        <motion.ul
          style={{
            filter: show ? "blur(1px)" : "none",
          }}
          className="row d-flex justify-content-center align-items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {data.map((cval) => {
            return (
              <>
                <motion.div
                  layout
                  className="col-lg"
                  onClick={() => {
                    setShow(!show);
                    setinfo(cval);
                  }}
                  variants={item}
                >
                  <div
                    className="card position-flex m-3"
                    style={{ borderRadius: "2rem", cursor: "pointer" }}
                  >
                    <Image
                      src={cval.img}
                      width={600}
                      height={300}
                      className="img-fluid"
                      style={{
                        borderRadius: "inherit",
                      }}
                      alt=""
                    />
                    <h3
                      className="position-absolute text-capitalize text-black fw-bold"
                      style={{
                        top: "0%",
                        left: "35%",
                      }}
                    >
                      {cval.name}
                    </h3>
                  </div>
                </motion.div>
              </>
            );
          })}
        </motion.ul>

        <AnimatePresence>
          {show && (
            <>
              <motion.div
                className="card "
                style={{
                  position: "fixed",
                  top: "35%",
                  left: "43%",
                  right: "32%",
                }}
                onClick={() => {
                  setShow(!show);
                }}
                variants={variants}
                animate={show ? "visible" : "hidden"}
                exit={{ scale: 1, opacity: 0 }}
              >
                <Image
                  src={info.img}
                  className="img-fluid rounded-4"
                  width={500}
                  height={300}
                  borderRadius="2rem"
                  alt=""
                  srcset=""
                />

                <h1 className="m-2"> {info.name}</h1>
                <p className="m-2">{info.dec}</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </Page>
  );
}
