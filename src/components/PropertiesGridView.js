import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import PHeader from "./PHeader";
import PGCards from "./PGCards";
import PGFooter from "./PGFooter";

const PropertiesGridView = () => {
  return (
    <main
      className="bg-white w-[1920px] flex flex-col items-start justify-start"
      id="Properties Grid View"
    >
      <PHeader />
      <section
        className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/public/png/category@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-white font-header-heading-4"
        id="Properties (Hero)"
      >
        <div
          className="flex flex-col items-center justify-start gap-[12px]"
          id="Properties"
        >
          <h1
            className="m-0 relative text-inherit leading-[72px] font-semibold font-inherit"
            id="Properties"
          >
            Properties
          </h1>
          <h1 className="m-0 relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-white">Properties</span>
          </h1>
        </div>
      </section>
      <section
        className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border"
        id="Properties"
      >
        <div className="w-[272px] flex flex-row items-center justify-start">
          <article className="shrink-0 flex flex-row items-end justify-start gap-[16px] text-left text-base text-gray-black font-body-large-400">
            <div className="shrink-0 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/svg/BulletList.svg"
              />
              <img
                className="relative w-6 h-6"
                alt=""
                src="/svg/GridView.svg"
              />
            </div>
            <span className="relative leading-[24px]">Sort by:</span>
            <Dropdown
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
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </article>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
          <PGCards />
        </div>
        <div
          className="flex flex-row items-end justify-center gap-[8px]"
          id="Pagination"
        >
          <Button size="middle" type="default" icon={<ArrowLeftOutlined />} />
          <Button size="middle" type="primary">
            1
          </Button>
          <Button size="middle" type="default">
            2
          </Button>
          <Button size="middle" type="default">
            3
          </Button>
          <Button size="middle" type="default">
            ...
          </Button>
          <Button size="middle" type="default">
            54
          </Button>
          <Button size="middle" type="primary" icon={<ArrowRightOutlined />} />
        </div>
      </section>
      <PGFooter />
    </main>
  );
};

export default PropertiesGridView;
