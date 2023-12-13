import Contact2 from "./Contact2";
import { css } from "@emotion/css";

const PGFooter = () => {
  return (
    <section
      className={css`
        width: 1920px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-31xl);
        box-sizing: border-box;
        @media screen and (max-width: 960px) {
          align-self: stretch;
          width: auto;
          flex-direction: row;
          gap: var(--gap-0);
        }
        @media screen and (max-width: 420px) {
          flex-direction: column;
        }
      `}
      id="Footer"
    >
      <footer
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          mix-blend-mode: normal;
          text-align: left;
          font-size: var(--header-heading-4-size);
          color: var(--gray-black);
          font-family: var(--header-heading-4);
          @media screen and (max-width: 960px) {
            flex-direction: column;
            gap: var(--gap-31xl);
          }
          @media screen and (max-width: 420px) {
            flex-direction: column;
            gap: var(--gap-31xl);
            flex: unset;
            align-self: stretch;
          }
        `}
      >
        <Contact2 />
        <div
          className={css`
            width: 173px;
            height: 248px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-13xl);
            mix-blend-mode: normal;
          `}
          id="Features"
        >
          <h3
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 32px;
              font-weight: 600;
              font-family: inherit;
            `}
            id="Features"
          >
            Features
          </h3>
          <article
            className={css`
              align-self: stretch;
              height: 184px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-base);
              text-align: left;
              font-size: var(--header-heading-4-size);
              color: var(--gray-500);
              font-family: var(--header-heading-4);
            `}
          >
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Home
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Become a Host
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Pricing
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Blog
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Contact
            </span>
          </article>
        </div>
        <div
          className={css`
            width: 173px;
            height: 248px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-13xl);
            mix-blend-mode: normal;
          `}
          id="Company"
        >
          <h3
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 32px;
              font-weight: 600;
              font-family: inherit;
              mix-blend-mode: normal;
            `}
          >
            Company
          </h3>
          <article
            className={css`
              align-self: stretch;
              height: 184px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-base);
              mix-blend-mode: normal;
              text-align: left;
              font-size: var(--header-heading-4-size);
              color: var(--gray-500);
              font-family: var(--header-heading-4);
            `}
          >
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              About Us
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Press
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Contact
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Careers
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Blog
            </span>
          </article>
        </div>
        <div
          className={css`
            width: 203px;
            height: 168px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-13xl);
            mix-blend-mode: normal;
          `}
          id="Terms and policies"
        >
          <h3
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 32px;
              font-weight: 600;
              font-family: inherit;
              mix-blend-mode: normal;
            `}
            id={`Team & Policies`}
          >
            Team and policies
          </h3>
          <article
            className={css`
              align-self: stretch;
              height: 104px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-base);
              mix-blend-mode: normal;
              text-align: left;
              font-size: var(--header-heading-4-size);
              color: var(--gray-500);
              font-family: var(--header-heading-4);
            `}
          >
            <span
              className={css`
                position: relative;
                line-height: 24px;
                mix-blend-mode: normal;
              `}
            >
              Terms of servies
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
                mix-blend-mode: normal;
              `}
            >
              Privacy Policy
            </span>
            <span
              className={css`
                position: relative;
                line-height: 24px;
                mix-blend-mode: normal;
              `}
            >
              Security
            </span>
          </article>
        </div>
      </footer>
    </section>
  );
};

export default PGFooter;
