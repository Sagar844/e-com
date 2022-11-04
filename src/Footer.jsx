import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-white lg:flex space-x-5 mt-30   ">
      <div className="space-y-5 mt-16 ml-10">
        <h1>Print</h1>
        <h1 className=" mr-20">
          Semper nibh a dignissim Integer cursus tempsed quis justo molis starm
          facilisis shriking from toil the semper consectetur.
        </h1>

        <div>
          <Link
            className=" px-3 py-3 rounded-lg   text-white  hover:bg-indigo-500 "
            to="Contact" target="_blank"
          >
            {" "}
            Contact Us
          </Link>
        </div>
      </div>
      <div className="space-y-5 mt-16  ">
        <h1>Latest news</h1>
        <h1 className=" mr-32">
          Get in Touch with Us for the Best Quality Custom Prints & Supplies..
        </h1>
        <h1 className="mr-32">
          Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed
          quia non numquam eius modi tempora incidunt lores taporro ame
        </h1>
      </div>

      <div className="space-y-5 mt-16">
        <h1>Features</h1>
        <h1>Features</h1>
        <h1>About</h1>
        <h1>Testimonial</h1>
        <h1>Video</h1>
        <h1>pricing</h1>
        <h1>Team</h1>
      </div>

      <div className="space-y-5 mt-16 mr-16">
        <h1>Get in Touch</h1>
        <h1> 538 Whispering City Pins</h1>
        <h1>+(425) 972-424-8147</h1>
        <h1>JasonCHarris@teleworm.us</h1>
        <h1>Patrickellmer@armyspy.com</h1>
      </div>
    </div>
  );
}

export default Footer;
