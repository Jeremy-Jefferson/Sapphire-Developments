import LogoIcon from "./LogoIcon";
import { css } from "@emotion/css";

const Contact2 = () => {
  return (
    <div
      className={css`
        height: 307px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        mix-blend-mode: normal;
      `}
      id="Contact"
    >
      <LogoIcon imageDimensions="/logo1@2x.png" />
      <article
        className={css`
          width: 285px;
          height: 160px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          text-align: center;
          font-size: var(--header-heading-4-size);
          color: var(--gray-500);
          font-family: var(--header-heading-4);
        `}
      >
        <span
          className={css`
            position: relative;
            line-height: 32px;
            font-weight: 600;
            color: var(--gray-black);
          `}
        >
          Contact Us:
        </span>
        <span
          className={css`
            position: relative;
            text-align: left;
          `}
        >
          1-800-SAP-PHIRE
        </span>
        <span
          className={css`
            position: relative;
            text-align: left;
            mix-blend-mode: normal;
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >{`5874 Sapphire Dr. `}</p>
          <p
            className={css`
              margin: 0;
            `}
          >
            Houston, TX 75874
          </p>
        </span>
        <span
          className={css`
            position: relative;
            font-size: var(--font-size-3xl);
          `}
        >
          contact@sapphiredev.com
        </span>
      </article>
      <div
        className={css`
          width: 285px;
          height: 56px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-sm);
            background-color: var(--primary-50);
            border-radius: var(--br-9xs);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
          preload
        >
          <a
            className={css`
              text-decoration: none;
              position: relative;
              width: 20px;
              height: 20px;
            `}
            id="FB Icon"
            href="https://www.facebook.com/jeremyejefferson/"
            target="_blank"
          >
            <img
              className={css`
                position: absolute;
                height: 108.5%;
                width: 50%;
                top: -4%;
                right: 25%;
                bottom: -4.5%;
                left: 25%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/vector.svg"
            />
          </a>
        </button>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-sm);
            background-color: var(--primary-50);
            border-radius: var(--br-9xs);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
          id="LinedIn"
        >
          <a
            className={css`
              text-decoration: none;
              position: relative;
              width: 20px;
              height: 20px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            id="LinkedIn"
            href="https://www.linkedin.com/in/jeremyejefferson/"
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/vector1.svg"
            />
          </a>
        </button>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-sm);
            background-color: var(--primary-50);
            border-radius: var(--br-9xs);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
          id="IG"
        >
          <a
            className={css`
              text-decoration: none;
              position: relative;
              width: 20px;
              height: 20px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            href="https://www.instagram.com/jeremyejefferson/"
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/vector2.svg"
            />
          </a>
        </button>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-sm);
            background-color: var(--primary-50);
            border-radius: var(--br-9xs);
            width: 48px;
            height: 48px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
          `}
          id="GitHub"
        >
          <a
            className={css`
              text-decoration: none;
              position: relative;
              width: 30px;
              height: 30px;
            `}
            id="Github"
            href="https://github.com/jeremy-jefferson"
          >
            <img
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                object-fit: cover;
              `}
              alt=""
              src="/github@2x.png"
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact2;
