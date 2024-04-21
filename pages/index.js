import Page from "@/components/page";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import luffy from "../pages/img/Luffy.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="mt-2 mx-5 px-5">
        <div className="picture">
          <AnimatePresence>
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.75,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image
                className="rounded-circle"
                src={luffy}
                width={200}
                height={200}
                alt=""
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <h1 className="text-center fw-medium fs-2 lh-sm m-1">
          Dylan Jose Estronza-Ramirez
        </h1>
        <div className="d-flex justify-content-center m-4 p-2 border border-info-subtle rounded-pill bg-info-subtle text-info-emphasis">
          <div className="text-center mx-5 px-5">
            <p className="pt-4">
              I'm a Computer Scientist who has just completed his bachelors at
              the University of North Texas and who wants to further enhance his
              techniques. I've spent the last year and a half working on my
              skills to create web applications for myself and for a sponsor
              during my capstone. I've gained experience programming in React,
              Nextjs, JavaScript and MySQL Workbench and i've gained a special
              interest in Software Engineering.
            </p>
            <p className="pt-5">
              If you would like to learn more about me:{" "}
              <Link href="/about">Click Here</Link>
            </p>
            <p className="pt-0">
              If you want to take a look at my resume:{" "}
              <Link href="/resume">Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
