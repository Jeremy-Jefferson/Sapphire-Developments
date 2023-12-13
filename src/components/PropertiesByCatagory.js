import { css } from "@emotion/css";
import CatagoryCards from "./CatagoryCards";

const PropertiesByCatagory = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        background-color: var(--primary-50);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-51xl) 0px;
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
          padding: var(--padding-56xl) 0px 0px;
          box-sizing: border-box;
          gap: var(--gap-35xl);
          max-width: 95%px;
        `}
        id="Properties by Category"
      >
        <header
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 0px var(--padding-11xl);
            box-sizing: border-box;
            gap: var(--gap-5xl);
            max-width: 95%px;
            text-align: center;
            font-size: var(--font-size-26xl);
            color: var(--primary-800);
            font-family: var(--body-large-400);
          `}
          id="Category Header"
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
            id="Props By Area"
          >
            Properties by Category
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
            id="Take a look at our wonderful homes, arranged by category. The four categories, rental, residential, vacation, and luxury, are below."
            Subtitle3
          >
            Take a look at our wonderful homes, arranged by category. The four
            categories, rental, residential, vacation, and luxury, are below.
          </h2>
        </header>
        <CatagoryCards />
      </div>
    </section>
  );
};

export default PropertiesByCatagory;
