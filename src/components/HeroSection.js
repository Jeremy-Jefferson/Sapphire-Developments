import { css } from "@emotion/css";
import RentSale from "./RentSale";

const HeroSection = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-101xl) var(--padding-11xl);
        background-image: url("/hero-section@3x.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
      `}
      id="Hero Section"
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--gap-43xl);
          max-width: 95%px;
        `}
        id="Hero Contents"
      >
        <header
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            mix-blend-mode: normal;
            text-align: center;
            font-size: var(--font-size-45xl);
            color: var(--color-white);
            font-family: var(--header-heading-4);
            @media screen and (max-width: 960px) {
              max-width: 100%;
            }
          `}
          id="Find Your Dream Home"
        >
          <h1
            className={css`
              margin: 0;
              align-self: stretch;
              position: relative;
              line-height: 72px;
              mix-blend-mode: normal;
              font-size: inherit;
              font-family: inherit;
            `}
            id="Find Your Dream Home"
            Title="1"
          >
            <p
              className={css`
                margin: 0;
                font-weight: 600;
              `}
            >
              Find Your Dream Home
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--font-size-13xl);
              `}
            >
              {" "}
              Your dream home is just a click away, find the home that fits your
              lifestyle below:
            </p>
          </h1>
        </header>
        <RentSale />
      </div>
    </section>
  );
};

export default HeroSection;
