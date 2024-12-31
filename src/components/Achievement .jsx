import React from "react";
import { useScrollAnimations } from "../custom_hooks/useScrollAnimations";

function Achievement() {
  useScrollAnimations();
  return (
    <div id="competition" className="w-full bg-primaryBg mb-5">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Competition
      </h1>
      <div className="animate-on-scroll flex justify-center items-center md:px-14">
        <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col items-start justify-evenly gap-4">
          <img
            className="rounded-lg object-cover lg:h-[50vh] md:h-[60vh] sm:h-[55vh] h-[32vh] m-auto sm:m-auto md:m-4"
            src="/achievement/mobility_hackathon.jpg"
            alt=""
          />
          <div className="text-secondaryTextColor lg:w-[40vw] md:w-[60vw] sm:w-[70vw] w-[88vw] m-auto flex flex-col items-start justify-start py-4">
            <h3 className="text-secondaryTextColor md:text-3xl text-lg font-semibold mb-2">
              Mobility Hackathon 2024
            </h3>
            <p className="leading-tight md:text-lg text-base">          
              💡 The Problem: Walkability is a major concern for many Bangalore
              residents, with uneven sidewalks, poorly maintained streets, and
              traffic making it difficult for people to walk safely. 
              <br></br><br></br>
              ✨ Our Solution? We developed <a
                href="https://ratemystreet.onlydev.in/"
                target="_blank"
                className="text-hoverBg inline-flex gap-1 items-center"
              >RateMyStreet<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg></a>, a web app that enables users
              to share reviews of specific streets and view the walkability
              ratings on an interactive dashboard map. This platform empowers
              people to make informed decisions about the walkability of streets
              around them, helping them choose safer routes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
