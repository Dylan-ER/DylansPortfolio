import Page from "../components/page";

export default function Resume() {
  return (
    <Page>
      <div className="mt-2 mx-5 px-5">
        <h2 className="text-center fw-medium fs-2 lh-sm">
          Dylan Estronza-Ramirez
        </h2>
        <div className="d-flex">
          <div className="d-inline p-2 flex-column">
            <p className="mb-2">
              <i className="bi bi-github" /> GitHub:{" "}
              <a href="https://github.com/Dylan-ER">Dylan-ER</a>
            </p>
            <p className="mb-2">
              <i className="bi bi-linkedin" /> LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/dylan-estronza/">Dylan-ER</a>
            </p>
            <p className="mb-2">
              <i className="bi bi-mailbox-flag" /> Email:{" "}
              <a href="mailto:dylanestronza0311@gmail.com">
                dylanestronza0311@gmail.com
              </a>
            </p>
          </div>
          <div className="ms-auto d-inline p-2">
            Gatesville, Texas 76528 USA
          </div>
        </div>
        <div className="text-center fw-medium fs-2 lh-sm">
          <h4 className="">Education</h4>
          <hr className="m-2" />
        </div>
        <div className="d-flex">
          <div className="d-inline p-2 flex-column">
            <p className="mb-1">University of North Texas, Denton, TX</p>
            <p className="mb-1">B.S., Computer Science</p>
          </div>
          <div className="ms-auto d-inline p-2">
            2024
          </div>
        </div>
        <div className="text-center fw-medium fs-2 lh-sm">
          <h4 className="">Skills</h4>
          <hr className="m-2" />
        </div>
        <div className="d-flex d-inline p-2 flex-column">
            <p className="mb-1">Language and frameworks: JavaScript, HTML, CSS, C++, NodeJS, React, NextJS</p>
            <p className="mb-1">Databases: MongoDB, MySQL Workbench</p>
            <p className="mb-1">Toolsets: NPM, NVM, Git/GitHub, </p>
        </div>
        <div className="text-center fw-medium fs-2 lh-sm">
          <h4 className="">Professional Experience</h4>
          <hr className="m-2" />
        </div>
        <div className="d-flex">
          <div className="d-inline p-2 flex-column">
            <p className="mb-1">Part-Time Desk Clerk</p>
            <p className="mb-1">University of North Texas, Denton, Texas</p>
            <p className="mb-1">McConnell Hall</p>
          </div>
          <div className="ms-auto d-inline p-2">
            11/2021-Present
          </div>
        </div>
        <div className="text-center fw-medium fs-2 lh-sm">
          <h4 className="">References</h4>
          <hr className="m-2" />
        </div>
        <div className="d-flex d-inline p-2 flex-column">
            <p className="mb-1">Available upon request</p>
        </div>
      </div>
    </Page>
  );
}
