import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import PHeader from "./PHeader";
import { css } from "@emotion/css";
import PGCards from "./PGCards";
import PGFooter from "./PGFooter";

const PropertiesGridView = () => {
  return (
    <main
      className={css`
        background-color: var(--color-white);
        width: 1920px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      `}
      id="Properties Grid View"
    >
      <PHeader />
      <section
        className={css`
          align-self: stretch;
          height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: url("/category@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
          text-align: center;
          font-size: var(--display-size);
          color: var(--color-white);
          font-family: var(--header-heading-4);
        `}
        id="Properties (Hero)"
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
          `}
          id="Properties"
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 72px;
              font-weight: 600;
              font-family: inherit;
            `}
            id="Properties"
          >
            Properties
          </h1>
          <h1
            className={css`
              margin: 0;
              position: relative;
              font-size: var(--heading-heading-5-size);
              line-height: 24px;
              color: #e7e9eb;
              font-family: var(--body-large-400);
            `}
          >
            <span className={css``}>{`Home / `}</span>
            <span
              className={css`
                font-weight: 500;
                color: var(--color-white);
              `}
            >
              Properties
            </span>
          </h1>
        </div>
      </section>
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 64px 0px 8px;
          gap: 95px;
          @media screen and (max-width: 1200px) {
            padding-left: var(--padding-101xl);
            padding-right: var(--padding-101xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 960px) {
            padding-left: var(--padding-41xl);
            padding-right: var(--padding-41xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 420px) {
            padding-left: var(--padding-xl);
            padding-right: var(--padding-xl);
            box-sizing: border-box;
          }
        `}
        id="Properties"
      >
        <div
          className={css`
            width: 272px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <article
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-base);
              text-align: left;
              font-size: var(--heading-heading-5-size);
              color: var(--gray-black);
              font-family: var(--body-large-400);
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-5xs);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                `}
                alt=""
                src="/BulletList.svg"
              />
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                `}
                alt=""
                src="/GridView.svg"
              />
            </div>
            <span
              className={css`
                position: relative;
                line-height: 24px;
              `}
            >
              Sort by:
            </span>
            <Dropdown
              className={css``}
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              arrow={undefined}
              trigger={["hover"]}
            >
              <a className={css``} onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined className={css``} />
              </a>
            </Dropdown>
          </article>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
          `}
        >
          <PGCards />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: center;
            gap: var(--gap-5xs);
          `}
          id="Pagination"
        >
          <Button
            className={css``}
            size="middle"
            type="default"
            icon={<ArrowLeftOutlined />}
          />
          <Button className={css``} size="middle" type="primary">
            1
          </Button>
          <Button className={css``} size="middle" type="default">
            2
          </Button>
          <Button className={css``} size="middle" type="default">
            3
          </Button>
          <Button className={css``} size="middle" type="default">
            ...
          </Button>
          <Button className={css``} size="middle" type="default">
            54
          </Button>
          <Button
            className={css``}
            size="middle"
            type="primary"
            icon={<ArrowRightOutlined />}
          />
        </div>
      </section>
      <PGFooter />
    </main>
  );
};

export default PropertiesGridView;
