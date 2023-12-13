import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { css } from "@emotion/css";
import VacationCards from "./VacationCards";

const VacationPropSection = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-67xl) 0px;
        gap: var(--gap-20xl);
      `}
      id="Latest Properties"
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-21xl);
          max-width: 95%px;
        `}
      >
        <header
          className={css`
            width: 688px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-5xl);
            max-width: 95%px;
            text-align: center;
            font-size: var(--heading-heading-1-size);
            color: var(--primary-800);
            font-family: var(--body-large-400);
            @media screen and (max-width: 1200px) {
              max-width: 95%;
            }
            @media screen and (max-width: 960px) {
              align-self: stretch;
              width: auto;
            }
          `}
          id="Latest Vacation Props"
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
            id="Latest Props for Rent"
          >
            Latest Vacation Properties
          </h1>
          <h2
            className={css`
              margin: 0;
              align-self: stretch;
              position: relative;
              font-size: var(--body-large-400-size);
              line-height: 28px;
              font-weight: 400;
              font-family: inherit;
              color: var(--color-lightslategray);
            `}
            id="With emphasis on luxury and relaxation, find your home away from home with our latest vacation properties."
          >
            With emphasis on luxury and relaxation, find your home away from
            home with our latest vacation properties.
          </h2>
        </header>
        <VacationCards />
      </div>
      <Button
        className={css``}
        name="Load More"
        id="2"
        variant="primary"
        size="lg"
      >
        Load More
      </Button>
    </section>
  );
};

export default VacationPropSection;
