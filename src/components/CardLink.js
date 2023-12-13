import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const CardLink = ({ location1, propBackgroundImage }) => {
  return (
    <Link
      className={css`
        cursor: pointer;
        text-decoration: none;
        flex: 1;
        border-radius: var(--br-7xs);
        height: 426px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding: var(--padding-5xl);
        box-sizing: border-box;
        background-image: url("/card-11@3x.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        min-width: 355px;
        max-width: 370px;
        background-image: ${propBackgroundImage};
      `}
      to="/"
    >
      <footer
        className={css`
          align-self: stretch;
          height: 24px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          gap: var(--gap-13xl);
        `}
      >
        <fieldset
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            gap: var(--gap-5xs);
            text-align: left;
            font-size: var(--heading-heading-5-size);
            color: var(--color-white);
            font-family: var(--body-large-400);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/pin(icon).svg"
          />
          <small
            className={css`
              position: relative;
              line-height: 24px;
              font-weight: 500;
            `}
          >
            {location1}
          </small>
        </fieldset>
        <fieldset
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            gap: var(--gap-5xs);
            text-align: left;
            font-size: var(--heading-heading-5-size);
            color: var(--color-white);
            font-family: var(--body-large-400);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/arrowsout1.svg"
          />
          <small
            className={css`
              position: relative;
              line-height: 24px;
              font-weight: 500;
            `}
          >
            12000
          </small>
        </fieldset>
      </footer>
    </Link>
  );
};

export default CardLink;
