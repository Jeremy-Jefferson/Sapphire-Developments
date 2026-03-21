import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation2 = () => {
  return (
    <nav
      className="m-0 shrink-0 flex flex-row items-center justify-center gap-[30px] mix-blend-normal text-center text-xl text-primary-900 font-body-large-400 lg:hidden"
      id="Nav1"
      NAV="1"
    >
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit] mix-blend-normal"
        id="HOME"
        to="/"
      >
        HOME
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit] mix-blend-normal"
        to="/"
      >
        ABOUT US
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit] mix-blend-normal"
        to="/"
      >
        OUR AGENTS
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] font-semibold font-inherit text-darkslateblue mix-blend-normal"
        id="PROPERTIES"
        to="/properties-grid-view"
      >
        PROPERTIES
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit] mix-blend-normal"
        to="/"
      >
        GALLERY
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit] mix-blend-normal"
        to="/"
      >
        BLOG
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit] mix-blend-normal"
        to="/"
      >
        CONTACT US
      </Link>
      <Form className="[border:none] bg-[transparent] relative mix-blend-normal">
        <Form.Control type="search" placeholder="SEARCH" />
      </Form>
    </nav>
  );
};

export default Navigation2;
