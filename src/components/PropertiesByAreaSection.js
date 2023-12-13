import { css } from "@emotion/css";
import CityCardWrapper from "./CityCardWrapper";

const PropertiesByAreaSection = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-34xl) var(--padding-31xl);
        gap: var(--gap-26xl);
        text-align: center;
        font-size: var(--font-size-26xl);
        color: var(--primary-800);
        font-family: var(--body-large-400);
      `}
      id="Props By Area"
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 0px var(--padding-11xl);
          gap: var(--gap-5xl);
          @media screen and (max-width: 960px) {
            align-self: stretch;
            width: auto;
          }
        `}
      >
        <h1
          className={css`
            margin: 0;
            align-self: stretch;
            position: relative;
            font-size: inherit;
            line-height: 48px;
            font-weight: 600;
            font-family: inherit;
          `}
          id="Props by Area"
        >
          Properties by City
        </h1>
        <h2
          className={css`
            margin: 0;
            align-self: stretch;
            position: relative;
            font-size: var(--header-heading-4-size);
            line-height: 28px;
            font-weight: 400;
            font-family: inherit;
            color: var(--color-lightslategray);
          `}
          id="Take a look at our gorgeous properties, grouped by city. Find your city below."
        >
          Take a look at our gorgeous properties, grouped by city. Find your
          city below.
        </h2>
      </div>
      <div
        className={css`
          align-self: stretch;
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-3xs);
          box-sizing: border-box;
          max-width: 95%px;
        `}
        id="Cardss"
        Cards
      >
        <CityCardWrapper />
      </div>
    </section>
  );
};

export default PropertiesByAreaSection;
