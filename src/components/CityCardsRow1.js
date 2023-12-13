import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const CityCardsRow1 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: var(--gap-7xl);
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
          position: relative;
          background-image: url("/card-1@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
        `}
        id="Card1"
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
          id="Hoston, TX: 15 Listings"
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              line-height: 32px;
              font-weight: 600;
              font-family: inherit;
              mix-blend-mode: normal;
              font-size: inherit;
            `}
            id="Houston, TX"
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Houston, TX
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--font-size-lg);
              `}
            >
              15 Listings
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
          position: relative;
          background-image: url("/card-2@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
        `}
        id="Card2"
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
          id="New York, NY: 21 Listings"
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              line-height: 32px;
              mix-blend-mode: normal;
              font-size: inherit;
              font-family: inherit;
            `}
            id="New York, NY"
          >
            <p
              className={css`
                margin: 0;
                font-weight: 600;
              `}
            >
              New York, NY
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--font-size-lg);
              `}
            >
              21 Listings
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
          position: relative;
          background-image: url("/card-3@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          @media screen and (max-width: 960px) {
            flex: unset;
            align-self: stretch;
          }
        `}
        id="Card3"
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
          id="MIami, FL: 25 Listings"
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              line-height: 32px;
              font-size: inherit;
              font-family: inherit;
            `}
            id="Miami, FL"
          >
            <p
              className={css`
                margin: 0;
                font-weight: 600;
              `}
            >
              Miami, FL
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--font-size-lg);
              `}
            >
              25 Listings
            </p>
          </h1>
        </header>
      </Link>
    </div>
  );
};

export default CityCardsRow1;
