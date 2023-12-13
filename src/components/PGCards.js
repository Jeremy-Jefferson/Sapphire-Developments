import { css } from "@emotion/css";

const PGCards = () => {
  return (
    <div
      className={css`
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: var(--gap-5xs);
        text-align: left;
        font-size: 14.51px;
        color: var(--gray-700);
        font-family: var(--body-large-400);
      `}
      id="Cards"
    >
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 350px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          id="Rental 2"
          alt=""
          src="/Rental 2@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 20.32px;
              font-weight: 500;
            `}
          >
            2166 Marlin Ct. Miami, FL 33134
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 2,660,840
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental card footer 2"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
            id="User"
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              alt=""
              src="/ellipse-1@2x.png"
            />
            <h2
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h2>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
            id="buttons"
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/sharenetwork.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 350px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          id="Rental 3"
          alt=""
          src="/Rental 3@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 20.32px;
              font-weight: 500;
              font-family: inherit;
            `}
          >
            3455 Marvel Dr. Houston, TX 77445
          </h1>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 890,693
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
          id="Rental 3"
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental card footer 3"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              alt=""
              src="/ellipse-1@2x.png"
            />
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h1>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="share"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/sharenetwork.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 355px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          min-width: 355px;
          max-width: 400px;
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
        id="rental 4"
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          alt=""
          src="/property-image4@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 20.32px;
              font-weight: 500;
              font-family: inherit;
            `}
            id="4456 Ozarka St. Las Vegas, NV 81566"
          >
            4456 Ozarka St. Las Vegas, NV 89134
          </h1>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 725,903
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
          id="details"
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
            id="Parking"
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental card footer 4"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
            id="User"
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              alt=""
              src="/ellipse-1@2x.png"
            />
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h1>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
            id="Buttons"
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="share"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/sharenetwork.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 355px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          min-width: 355px;
          max-width: 400px;
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
        id="Rental 1"
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          alt=""
          src="/Rental 1@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 20.32px;
              font-weight: 500;
            `}
          >
            713 Arturo Ln. Los Angeles, CA 90401
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 920,544
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              loading="lazy"
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental 1 card footer"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
            id="User"
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              loading="lazy"
              alt=""
              src="/ellipse-1@2x.png"
            />
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h1>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
            id="Buttons"
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="share"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                  object-fit: cover;
                `}
                alt=""
                src="/share@2x.png"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="Fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="Add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 355px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          min-width: 355px;
          max-width: 400px;
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          id="Rental 2"
          alt=""
          src="/Rental 21@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 20.32px;
              font-weight: 500;
            `}
          >
            4560 Willow St. Miami, FL 33134
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 4,590,240
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental card footer 2"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
            id="User"
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              alt=""
              src="/ellipse-1@2x.png"
            />
            <h2
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h2>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
            id="buttons"
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/sharenetwork.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 355px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          min-width: 355px;
          max-width: 400px;
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          id="Rental 3"
          alt=""
          src="/Rental 31@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 20.32px;
              font-weight: 500;
              font-family: inherit;
            `}
          >
            2634 Sycamore Ln. Los Angeles, CA 90210
          </h1>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 1,590,693
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
          id="Rental 3"
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental card footer 3"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              alt=""
              src="/ellipse-11@2x.png"
            />
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h1>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="share"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/sharenetwork.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 355px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          min-width: 355px;
          max-width: 400px;
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
        id="rental 4"
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          alt=""
          src="/property-image41@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 20.32px;
              font-weight: 500;
              font-family: inherit;
            `}
            id="4456 Ozarka St. Las Vegas, NV 81566"
          >
            234 Oakwood Dr. Las Vegas, NV 89101
          </h1>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 3,525,903
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
          id="details"
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
            id="Parking"
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental card footer 4"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
            id="User"
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              alt=""
              src="/ellipse-11@2x.png"
            />
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h1>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
            id="Buttons"
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="share"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/sharenetwork.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className={css`
          border-radius: var(--br-3xs);
          background-color: var(--color-white);
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--color-whitesmoke-100);
          box-sizing: border-box;
          width: 350px;
          height: 467px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-mini) var(--padding-smi);
          gap: var(--gap-4xl);
          &:hover {
            background-color: var(--color-gainsboro);
            cursor: pointer;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
        id="Rental 1"
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: var(--br-3xs);
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          alt=""
          src="/Rental 11@2x.png"
        />
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 20.32px;
              font-weight: 500;
            `}
          >
            890 Birch Ave. Houston, TX 77021
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-3xs);
            font-size: 13.55px;
            color: var(--color-darkslateblue-100);
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 18.98px;
              font-weight: 600;
            `}
          >
            $ 12,720,180
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-3xs);
            gap: var(--gap-mid);
          `}
        >
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/car.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              alt=""
              src="/bathtub.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              4
            </small>
          </fieldset>
          <fieldset
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 4.35px;
              text-align: left;
              font-size: 10.84px;
              color: var(--gray-500);
              font-family: var(--body-large-400);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 17.4px;
                height: 17.4px;
              `}
              loading="lazy"
              alt=""
              src="/arrowsout.svg"
            />
            <small
              className={css`
                position: relative;
                line-height: 16.27px;
                font-weight: 500;
              `}
            >
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: center;
            font-size: 11.61px;
            color: var(--gray-700);
            font-family: var(--body-large-400);
          `}
          id="Rental 1 card footer"
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 5.81px;
            `}
            id="User"
          >
            <img
              className={css`
                position: relative;
                border-radius: 50%;
                width: 27.6px;
                height: 27.6px;
                object-fit: cover;
              `}
              loading="lazy"
              alt=""
              src="/ellipse-11@2x.png"
            />
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 17.42px;
                font-weight: 500;
                font-family: inherit;
              `}
            >
              Jenny Wilson
            </h1>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 8.71px;
            `}
            id="Buttons"
          >
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="share"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                  object-fit: cover;
                `}
                alt=""
                src="/share1@2x.png"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="Fave"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/heart.svg"
              />
            </button>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: 2.902620315551758px;
                background-color: var(--primary-50);
                border-radius: 1.45px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
              id="Add"
            >
              <img
                className={css`
                  position: relative;
                  width: 14.5px;
                  height: 14.5px;
                `}
                alt=""
                src="/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PGCards;
