import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { css } from "@emotion/css";

const Form = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        border-radius: var(--br-xs);
        background-color: var(--color-white);
        box-shadow: 0px 25px 25px rgba(59, 77, 129, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: var(--padding-9xl) var(--padding-11xl);
        gap: var(--gap-mid);
      `}
    >
      <textarea
        className={css`
          border: none;
          background-color: transparent;
          display: flex;
          font-family: var(--font-poppins);
          font-size: var(--header-heading-4-size);
          align-self: stretch;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        `}
        placeholder="Inquiry Form"
        defaultValue="Are you looking for details about a certain property? Ask us a question using the form below."
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-3xs);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            gap: var(--gap-3xs);
            @media screen and (max-width: 960px) {
              flex-direction: column;
              gap: var(--gap-3xs);
              align-items: flex-start;
              justify-content: center;
            }
          `}
        >
          <input
            className={css`
              border: 1px solid var(--color-gray-100);
              font-family: var(--font-roboto);
              font-size: var(--heading-heading-5-size);
              background-color: transparent;
              align-self: stretch;
              flex: 1;
              border-radius: var(--br-9xs);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-base) var(--padding-xs);
              @media screen and (max-width: 960px) {
                flex: unset;
                align-self: stretch;
              }
            `}
            name="First Name"
            value="First name"
            placeholder="First name"
            type="text"
            autoComplete="on"
          />
          <input
            className={css`
              border: 1px solid var(--color-gray-100);
              font-family: var(--font-roboto);
              font-size: var(--heading-heading-5-size);
              background-color: transparent;
              align-self: stretch;
              flex: 1;
              border-radius: var(--br-9xs);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              padding: var(--padding-base) var(--padding-xs);
              @media screen and (max-width: 960px) {
                flex: unset;
                align-self: stretch;
              }
            `}
            name="Last Name"
            placeholder="Last name"
            type="text"
            autoComplete="on"
          />
        </div>
        <input
          className={css`
            border: 1px solid var(--color-gray-100);
            font-family: var(--font-roboto);
            font-size: var(--heading-heading-5-size);
            background-color: transparent;
            align-self: stretch;
            border-radius: var(--br-9xs);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-base) var(--padding-xs);
          `}
          name="Email"
          placeholder="Email id"
          type="text"
          autoComplete="on"
        />
        <input
          className={css`
            border: 1px solid var(--color-gray-100);
            font-family: var(--font-roboto);
            font-size: var(--heading-heading-5-size);
            background-color: transparent;
            align-self: stretch;
            border-radius: var(--br-9xs);
            box-sizing: border-box;
            height: 105px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-xs);
          `}
          name="Comments or questions..."
          placeholder="Comments or questions"
          type="text"
        />
        <Button
          className={css`
            width: 222px;
          `}
          name="Submit"
          variant="primary"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
