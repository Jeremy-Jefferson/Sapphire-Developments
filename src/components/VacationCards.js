import CardLink from "./CardLink";
import { css } from "@emotion/css";

const VacationCards = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: var(--gap-21xl);
        opacity: 0.75;
      `}
    >
      <CardLink location1="Houston, TX" />
      <CardLink
        location1="New York, NY"
        propBackgroundImage="url('/card-21@3x.png')"
      />
      <CardLink
        location1="Los Angeles, CA"
        propBackgroundImage="url('/card-31@3x.png')"
      />
      <CardLink
        location1="Miami, FL"
        propBackgroundImage="url('/card-41@3x.png')"
      />
    </div>
  );
};

export default VacationCards;
