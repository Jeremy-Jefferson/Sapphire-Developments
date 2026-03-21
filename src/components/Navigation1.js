import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation1 = () => {
  return (
    <nav
      className="m-0 shrink-0 flex flex-row items-center justify-center gap-[30px] text-center text-xl text-primary-900 font-body-large-400 lg:hidden"
      id="Nav1"
      NAV="1"
    >
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-semibold font-inherit text-darkslateblue"
        id="HOME"
        to="/"
      >
        HOME
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-normal text-[inherit]"
        to="/"
      >
        ABOUT US
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-normal text-[inherit]"
        to="/"
      >
        OUR AGENTS
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-semibold text-[inherit]"
        to="/properties-grid-view"
      >
        PROPERTIES
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-normal text-[inherit]"
        to="/"
      >
        GALLERY
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-normal text-[inherit]"
        to="/"
      >
        BLOG
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-normal text-[inherit]"
        to="/"
      >
        CONTACT US
      </Link>
      <Button className="relative" variant="primary">
        SEARCH
      </Button>
    </nav>
  );
};

export default Navigation1;
