import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { css } from "@emotion/css";

const CatagoryCards = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: var(--gap-67xl);
      `}
    >
      <div
        className={css`
          position: relative;
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 25px 50px rgba(59, 77, 129, 0.25);
          width: 312px;
          height: 322px;
          min-width: 300px;
          max-width: 340px;
        `}
        id="Residential"
      >
        <article
          className={css`
            position: absolute;
            top: calc(50% - 127px);
            left: calc(50% - 134px);
            height: 255px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 78px;
              height: 78px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/Res House Icon.svg"
          />
          <article
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xl);
              text-align: center;
              font-size: var(--header-heading-4-size);
              color: var(--gray-700);
              font-family: var(--body-large-400);
            `}
            id="Residential Property Desc."
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 32px;
                font-weight: 600;
                font-family: inherit;
              `}
              id="Residential Homes"
            >
              Residential Homes
            </h1>
            <p
              className={css`
                margin: 0;
                position: relative;
                font-size: var(--heading-heading-5-size);
                line-height: 24px;
                color: var(--color-lightslategray);
                display: flex;
                align-items: flex-end;
                justify-content: center;
                width: 268px;
              `}
              id="Residential paragraph"
            >{`View residential homes for purchase. Discover wonderful family homes. `}</p>
            <Button
              className={css`
                position: relative;
              `}
              name="Read More"
              id="1"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
      <div
        className={css`
          position: relative;
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 25px 50px rgba(59, 77, 129, 0.25);
          width: 312px;
          height: 322px;
          min-width: 300px;
          max-width: 340px;
        `}
        id="Rental"
      >
        <article
          className={css`
            position: absolute;
            top: calc(50% - 127px);
            left: calc(50% - 134px);
            height: 255px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          `}
          id="Rental Props"
        >
          <img
            className={css`
              position: relative;
              width: 78px;
              height: 78px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/Rent Icon.svg"
          />
          <article
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xl);
              text-align: center;
              font-size: var(--header-heading-4-size);
              color: var(--gray-700);
              font-family: var(--body-large-400);
            `}
            id="Rental Property Desc."
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 32px;
                font-weight: 600;
                font-family: inherit;
              `}
              id="Rental Properties"
            >
              Rental Properties
            </h1>
            <p
              className={css`
                margin: 0;
                position: relative;
                font-size: var(--heading-heading-5-size);
                line-height: 24px;
                color: var(--color-lightslategray);
                display: flex;
                align-items: flex-end;
                justify-content: center;
                width: 268px;
              `}
              id="View rental poperties"
            >
              View rental properties. Great places to live temporarily, or rent
              to own.
            </p>
            <Button
              className={css`
                position: relative;
              `}
              name="Read More"
              id="2"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
      <div
        className={css`
          position: relative;
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 25px 50px rgba(59, 77, 129, 0.25);
          width: 312px;
          height: 322px;
          min-width: 300px;
          max-width: 340px;
        `}
        id="Vacation"
      >
        <article
          className={css`
            position: absolute;
            top: calc(50% - 136px);
            left: calc(50% - 134px);
            height: 272px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          `}
          id="Vacation"
        >
          <img
            className={css`
              position: relative;
              width: 78px;
              height: 78px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/Vacation.svg"
          />
          <article
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xl);
              text-align: center;
              font-size: var(--header-heading-4-size);
              color: var(--gray-700);
              font-family: var(--body-large-400);
            `}
            id="Vacation Property Desc."
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 32px;
                font-weight: 600;
                font-family: inherit;
              `}
              id="Vacation Homes"
            >
              Vacation Homes
            </h1>
            <p
              className={css`
                margin: 0;
                position: relative;
                font-size: var(--heading-heading-5-size);
                line-height: 24px;
                color: var(--color-lightslategray);
                display: flex;
                align-items: flex-end;
                justify-content: center;
                width: 268px;
              `}
              id="View Vacation Properties"
            >
              View vacation properties. Gorgeous getaways to feel at home away
              from home
            </p>
            <Button
              className={css`
                position: relative;
              `}
              name="Read More"
              id="3"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
      <div
        className={css`
          position: relative;
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 25px 50px rgba(59, 77, 129, 0.25);
          width: 312px;
          height: 322px;
          min-width: 300px;
          max-width: 340px;
        `}
        id="Luxury"
      >
        <article
          className={css`
            position: absolute;
            top: calc(50% - 127px);
            left: calc(50% - 134px);
            height: 255px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          `}
          id="Luxury"
        >
          <img
            className={css`
              max-width: 100%;
              overflow: hidden;
              height: 79px;
              flex-shrink: 0;
            `}
            alt=""
            src="/Luxury.svg"
          />
          <article
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: var(--gap-5xl);
              text-align: center;
              font-size: var(--header-heading-4-size);
              color: var(--gray-700);
              font-family: var(--body-large-400);
            `}
            id="Luxury Property Desc."
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 32px;
                font-weight: 600;
                font-family: inherit;
              `}
              id="Luxury Properties"
            >
              Luxury Properties
            </h1>
            <p
              className={css`
                margin: 0;
                position: relative;
                font-size: var(--heading-heading-5-size);
                line-height: 24px;
                color: var(--color-lightslategray);
                display: flex;
                align-items: flex-end;
                justify-content: center;
                width: 268px;
              `}
              id="View Luxury Properties"
            >
              View luxury properties. Lavish mansions and estates.
            </p>
            <Button
              className={css`
                position: relative;
              `}
              name="Read More"
              id="4"
              variant="outline-primary"
              size="sm"
            >
              Read More
            </Button>
          </article>
        </article>
      </div>
    </div>
  );
};

export default CatagoryCards;
