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
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit mix-blend-normal">
        ABOUT US
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit mix-blend-normal">
        OUR AGENTS
      </h1>
      <h1
        className="m-0 relative text-inherit leading-[22px] font-semibold font-inherit text-darkslateblue mix-blend-normal"
        id="PROPERTIES"
      >
        PROPERTIES
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit mix-blend-normal">
        GALLERY
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit mix-blend-normal">
        BLOG
      </h1>
      <h1 className="m-0 relative text-inherit leading-[22px] font-normal font-inherit mix-blend-normal">
        CONTACT US
      </h1>
      <Form className="[border:none] bg-[transparent] relative mix-blend-normal">
        <Form.Control type="search" placeholder="SEARCH" />
      </Form>
    </nav>
  );
};

export default Navigation2;
