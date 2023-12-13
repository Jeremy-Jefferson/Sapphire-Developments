import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const Navigation2 = () => {
  return (
    <nav
      className={css`
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--gap-11xl);
        mix-blend-mode: normal;
        text-align: center;
        font-size: var(--body-large-400-size);
        color: var(--primary-900);
        font-family: var(--body-large-400);
        @media screen and (max-width: 1200px) {
          display: none;
        }
      `}
      id="Nav1"
      NAV="1"
    >
      <Link
        className={css`
          cursor: pointer;
          text-decoration: none;
          position: relative;
          line-height: 22px;
          color: inherit;
          mix-blend-mode: normal;
        `}
        id="HOME"
        to="/landing-page"
      >
        HOME
      </Link>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
          mix-blend-mode: normal;
        `}
      >
        ABOUT US
      </h1>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
          mix-blend-mode: normal;
        `}
      >
        OUR AGENTS
      </h1>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 600;
          font-family: inherit;
          color: var(--color-darkslateblue-100);
          mix-blend-mode: normal;
        `}
        id="PROPERTIES"
      >
        PROPERTIES
      </h1>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
          mix-blend-mode: normal;
        `}
      >
        GALLERY
      </h1>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
          mix-blend-mode: normal;
        `}
      >
        BLOG
      </h1>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
          mix-blend-mode: normal;
        `}
      >
        CONTACT US
      </h1>
      <Form
        className={css`
          border: none;
          background-color: transparent;
          position: relative;
          mix-blend-mode: normal;
        `}
      >
        <Form.Control className={css``} type="search" placeholder="SEARCH" />
      </Form>
    </nav>
  );
};

export default Navigation2;
