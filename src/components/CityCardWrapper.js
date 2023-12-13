import CityCardsRow1 from "./CityCardsRow1";
import CityCardRow2 from "./CityCardRow2";
import { css } from "@emotion/css";

const CityCardWrapper = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: var(--gap-5xl);
        max-width: 1300px;
      `}
      id="Cards"
    >
      <CityCardsRow1 />
      <CityCardRow2 />
    </div>
  );
};

export default CityCardWrapper;
