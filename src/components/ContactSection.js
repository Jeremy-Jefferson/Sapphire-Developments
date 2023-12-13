import { css } from "@emotion/css";
import Form from "Form";

const ContactSection = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        background-color: var(--primary-50);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        padding: var(--padding-67xl) var(--padding-8xs);
        text-align: center;
        font-size: var(--heading-heading-1-size);
        color: var(--primary-800);
        font-family: var(--body-large-400);
      `}
      id="Contact"
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 0px var(--padding-3xs);
          box-sizing: border-box;
          gap: var(--gap-21xl);
          max-width: 900px;
        `}
      >
        <div
          className={css`
            width: 688px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-5xl);
            max-width: 95%px;
            @media screen and (max-width: 1200px) {
              max-width: 95%;
            }
            @media screen and (max-width: 960px) {
              align-self: stretch;
              width: auto;
            }
          `}
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
            id="Contact Us"
          >
            Contact Us
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
            id="Sapphire Developments is committed to assisting you in finding your perfect property, contact us for a personalized real estate experience."
          >
            Sapphire Developments is committed to assisting you in finding your
            perfect property, contact us for a personalized real estate
            experience.
          </h2>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
