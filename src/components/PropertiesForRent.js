import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { css } from "@emotion/css";
import RentalCards from "./RentalCards";

const PropertiesForRent = () => {
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
        text-align: left;
        font-size: 14.51px;
        color: var(--gray-700);
        font-family: var(--body-large-400);
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
          @media screen and (max-width: 960px) {
            padding-left: var(--padding-41xl);
            padding-right: var(--padding-41xl);
            box-sizing: border-box;
          }
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
          id="Latest Properties for Rent"
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
            Latest Properties for Rent
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
            id="Take a look at the latest rental properties below. Act fast, these unbelievable rates won't last long!"
          >
            Take a look at the latest rental properties below. Act fast, these
            unbelievable rates won't last long!
          </h2>
        </header>
        <RentalCards />
      </div>
      <Button
        className={css``}
        name="Load More"
        id="1"
        variant="primary"
        size="lg"
      >
        Load More
      </Button>
    </section>
  );
};

export default PropertiesForRent;
