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
      <h1
        className="m-0 relative text-inherit leading-[22px] font-semibold font-inherit text-darkslateblue"
        id="HOME"
      >
        HOME
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit">
        ABOUT US
      </h1>
      <h2 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit">
        OUR AGENTS
      </h2>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-semibold text-[inherit]"
        to="/properties-grid-view"
      >
        PROPERTIES
      </Link>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit">
        GALLERY
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit">
        BLOG
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit">
        CONTACT US
      </h1>
      <Button className="relative" variant="primary">
        SEARCH
      </Button>
    </nav>
  );
};

export default Navigation1;
