import { Button } from "@material-ui/core";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import { AnimationWrapper } from "react-hover-animation";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <AnimationWrapper
        style={{
          textAlign: "center",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#5dc8d3",
        }}
      >
        {" "}
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          href="mailto:Eman.Eid.Alatawi@gmail.com"
        >
          Contact Me
        </Button>
      </AnimationWrapper>
    </div>
  );
}
