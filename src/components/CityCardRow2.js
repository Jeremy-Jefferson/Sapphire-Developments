import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const CityCardRow2 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: var(--gap-5xl);
        @media screen and (max-width: 1200px) {
          flex-direction: row;
        }
        @media screen and (max-width: 960px) {
          flex-direction: column;
        }
      `}
    >
      <Link
        className={css`
          cursor: pointer;
          text-decoration: none;
          flex: 1;
          border-radius: var(--br-5xs);
          height: 241px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-3xs);
          box-sizing: border-box;
          position: relative;
          background-image: url("/card-4@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
        `}
        id="Card4"
        to="/"
      >
        <header
          className={css`
            margin: 0 !important;
            position: absolute;
            top: 16px;
            left: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            mix-blend-mode: normal;
            z-index: 0;
            text-align: left;
            font-size: var(--header-heading-4-size);
            color: var(--color-white);
            font-family: var(--body-large-400);
          `}
          id="Las Vegas, NV: 18 Listings"
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              line-height: 32px;
              font-size: inherit;
              font-family: inherit;
            `}
            id="Las Vegas, NV"
          >
            <p
              className={css`
                margin: 0;
                font-weight: 600;
              `}
            >
              Las Vegas, NV
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--font-size-lg);
              `}
            >
              18 Listings
            </p>
          </h1>
        </header>
      </Link>
      <Link
        className={css`
          cursor: pointer;
          text-decoration: none;
          flex: 1;
          border-radius: var(--br-5xs);
          height: 241px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-3xs);
          box-sizing: border-box;
          position: relative;
          background-image: url("/card-5@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
        `}
        id="Card5"
        to="/"
      >
        <header
          className={css`
            margin: 0 !important;
            position: absolute;
            top: 16px;
            left: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            z-index: 0;
            text-align: left;
            font-size: var(--header-heading-4-size);
            color: var(--color-white);
            font-family: var(--body-large-400);
          `}
          id="Los Angeles, CA: 32 Listings"
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              line-height: 32px;
              font-size: inherit;
              font-family: inherit;
            `}
            id="Los Angeles, CA"
          >
            <p
              className={css`
                margin: 0;
                font-weight: 600;
              `}
            >
              Los Angeles, CA
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--font-size-lg);
              `}
            >
              32 Listings
            </p>
          </h1>
        </header>
      </Link>
    </div>
  );
};

export default CityCardRow2;
