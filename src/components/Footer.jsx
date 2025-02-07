import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  const date = new Date();
  return (
    <footer className="p-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 md:justify-between gap-y-3">
        <div className="flex items-end justify-center lg:justify-start md:order-1 order-3">
          <p className="text-secondaryTextColor font-semibold text-center lg:text-start ">
            <FontAwesomeIcon color="#777777" icon={faCopyright} />{" "}
            {date.getFullYear()} Nayan. All rights reserved.
          </p>
        </div>
        <p className="text-center mx-auto text-secondaryTextColor font-semibold text-xl md:text-2xl md:order-2 order-2">
          kumarnayab6@gmail.com
        </p>
        <div className="flex lg:justify-end justify-center items-center gap-x-2 md:order-3 order-1">
          <Button className="border-none hover:text-hoverBg">
            <a href="https://github.com/NayanCod" target="_blank">
            <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </Button>
          <Button className="border-none hover:text-hoverBg">
            <a
              href="https://www.linkedin.com/in/nayan-4b2b61249"
              target="_blank"
            >
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
          </Button>
          <Button className="border-none hover:text-hoverBg">
            <a href="https://x.com/nayannew9" target="_blank">
            <FontAwesomeIcon size="xl" icon={faXTwitter} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
