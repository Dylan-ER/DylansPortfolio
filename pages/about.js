import Page from "../components/page";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SwE from "../pages/img/robot.jpg";
import project from "../pages/img/code.jpg";
import education from "../pages/img/bookman.jpg";
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

  return (
    <Page>
      <h1 className="text-center fw-medium fs-2 lh-sm">About Me</h1>

      <div className="container justify-content-center text-center">
        <p className="rounded-5 p-2 border border-info-subtle bg-info-subtle text-info-emphasis">
          This site was created with NextJS, Bootstrap, and framer-motion! Click
          on a card to learn more on me!
        </p>
      </div>

      <section className="container mx-auto mt-5">
        <motion.div
          style={{
            filter: show ? "blur(1px)" : "none",
          }}
          className="row d-flex justify-content-center align-items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="container text-center">
            <div className="row">
              {data.map((cval) => {
                return (
                  <>
                    <motion.div
                      layout
                      className="col-sm-12 col-md-6 col-lg-4"
                      variants={item}
                    >
                      <button
                        type="button"
                        className="position-relative m-3 rounded-5 border-0"
                        data-bs-toggle="modal"
                        data-bs-target={"#myModal" + cval.id}
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
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                          {cval.name}
                          <span className="visually-hidden">{cval.name}</span>
                        </span>
                      </button>
                    </motion.div>
                    <div
                      className="modal fade"
                      id={"myModal"+cval.id}
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <Image
                              src={cval.img}
                              className="img-fluid rounded-4"
                              width={600}
                              height={400}
                              borderRadius="2rem"
                              alt=""
                              srcset=""
                            />
                          </div>
                          <div className="modal-body text-black">
                            <h1> {cval.name}</h1>
                            <p>{cval.dec}</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* <AnimatePresence> */}
        {/* {show && <></>} */}
        {/* </AnimatePresence> */}
      </section>
    </Page>
  );
}
