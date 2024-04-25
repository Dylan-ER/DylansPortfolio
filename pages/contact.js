import Page from "../components/page";
import { useState, useEffect } from "react";

export default function contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  //   Form validation state
  const [errors, setErrors] = useState({});
  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");
  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };
  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(`error: ${error}`);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setShowForm(true);
        setButtonText("Send");
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
        return;
      }
      setShowForm(false);
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <Page>
      <div className="container-fluid">
        {showForm && (
          <form onSubmit={handleSubmit} className="rounded-lg mx-auto">
            <h1 className="text-center font-bold">Send a message</h1>
            <div className="container justify-content-center p-2 text-center border border-info-subtle rounded-5 bg-info-subtle text-info-emphasis">
              <div className="mb-3">
                <label htmlFor="fullname" className="font-light mt-8 ">
                  Full name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="border-b"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
                {errors?.fullname && (
                  <p className="text-danger">Fullname cannot be empty.</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className=""
                  id="inputEmail"
                  aria-describedby="emailHelp"
                >
                  E-mail <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-b"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors?.email && (
                  <p className="text-danger">Email cannot be empty.</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  className="border-b"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                {errors?.subject && (
                  <p className="text-danger">Subject cannot be empty.</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  name="message"
                  className="border-b font-light text-secondary"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              {errors?.message && (
                <p className="text-danger">Message body cannot be empty.</p>
              )}
              <button
                type="submit"
                className="text-primary font-light rounded-md text-lg items-center justify-content-end"
              >
                {buttonText}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-cyan-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center fw-bold">
              {showFailureMessage && (
                <p className="text-danger text-sm">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        )}
            <div className="position-absolute top-50 start-50 translate-middle fw-bold">
              {showSuccessMessage && (
                <p className="text-success fs-3">
                  Thank you! Your Message has been delivered.
                </p>
              )}
            </div>
      </div>
    </Page>
  );
}
