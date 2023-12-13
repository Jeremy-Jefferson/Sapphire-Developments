import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const Navigation1 = () => {
  return (
    <nav
      className={css`
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--gap-11xl);
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
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 600;
          font-family: inherit;
          color: var(--color-darkslateblue-100);
        `}
        id="HOME"
      >
        HOME
      </h1>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
        `}
      >
        ABOUT US
      </h1>
      <h2
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
        `}
      >
        OUR AGENTS
      </h2>
      <Link
        className={css`
          cursor: pointer;
          text-decoration: none;
          position: relative;
          line-height: 22px;
          font-weight: 600;
          color: inherit;
        `}
        to="/"
      >
        PROPERTIES
      </Link>
      <h1
        className={css`
          margin: 0;
          position: relative;
          font-size: inherit;
          line-height: 22px;
          font-weight: 400;
          font-family: inherit;
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
        `}
      >
        CONTACT US
      </h1>
      <Button
        className={css`
          position: relative;
        `}
        variant="primary"
      >
        SEARCH
      </Button>
    </nav>
  );
};

export default Navigation1;
