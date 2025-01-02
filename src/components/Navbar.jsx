import React, {useContext} from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToggleContext from "../context/ToggleContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const { isNavOpen, setIsNavOpen } = useContext(ToggleContext);
  const toggleNav=()=>{
    setIsNavOpen(!isNavOpen)
  }

  useGSAP(()=>{
    gsap.from("nav", {
      opacity:0,
      duration: 0.6,
      y: -100,
    })
  })

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = "Nayan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex justify-between md:px-6 p-4 pt-12 h-[10vh] mb-5 items-center">
      <Button
      className="border-none bg-hoverBg font-bold py-1 px-2 text-xl"
      textColor="black"
      ><a href="/">NAYAN</a></Button>
      <div className="flex items-center justify-between gap-x-5">
      
        <Button
        className="hover:bg-hoverBg hover:text-black hover:border-hoverBg hidden md:block "
        onClick={handleDownload} >Download CV</Button>
        <Button className="border-none" onClick={toggleNav}>
          {isNavOpen ? <FontAwesomeIcon icon={faXmark} size="xl" className="hover:text-[#CB450C]" /> : <FontAwesomeIcon size="xl" className="hover:text-[#CB450C]" icon={faBars} />}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
