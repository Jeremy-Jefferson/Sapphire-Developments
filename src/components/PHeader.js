import Logo from "./Logo";
import Navigation2 from "./Navigation2";
import { css } from "@emotion/css";

const PHeader = () => {
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
        mix-blend-mode: normal;
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
      id="Header (Top Nav)2"
    >
      <header
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          mix-blend-mode: normal;
        `}
        id="HEADER"
      >
        <Logo />
        <div
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
          <Navigation2 />
        </div>
      </header>
    </header>
  );
};

export default PHeader;
