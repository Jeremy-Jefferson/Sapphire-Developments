import Logo from "./Logo";
import Navigation1 from "./Navigation1";
import { css } from "@emotion/css";

const LPHeader = () => {
  return (
    <header
      className={css`
        align-self: stretch;
        background-color: var(--color-white);
        height: 98px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: var(--padding-3xl) var(--padding-61xl);
        box-sizing: border-box;
        position: sticky;
        width: 100%;
        top: 0;
        background: #ffffff;
        z-index: 2;
        @media screen and (max-width: 1200px) {
          padding-left: var(--padding-21xl);
          padding-right: var(--padding-21xl);
          box-sizing: border-box;
        }
        @media screen and (max-width: 960px) {
          padding-left: var(--padding-5xl);
          padding-right: var(--padding-5xl);
          box-sizing: border-box;
        }
      `}
      id="Top Header (Nav)"
    >
      <header
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `}
        id="HEADER"
      >
        <Logo />
        <header
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 420px) {
              display: flex;
            }
          `}
          id="NAV"
          NAV="1"
        >
          <Navigation1 />
        </header>
      </header>
    </header>
  );
};

export default LPHeader;
