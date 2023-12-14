import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Dropdown, Menu, Button as AntButton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const RentSale = () => {
  const navigate = useNavigate();

  const onSearchCTAClick = useCallback(() => {
    navigate("/properties-grid-view");
  }, [navigate]);

  return (
    <main
      className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-large-400"
      id="HeroMain"
    >
      <div
        className="flex flex-row items-start justify-start gap-[10px]"
        id="Buttons"
      >
        <Button name="Rent" variant="primary">
          Rent
        </Button>
        <Button name="Sale" variant="light">
          Sale
        </Button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
        <div
          className="flex-1 rounded-lg bg-white shrink-0 flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]"
          id="Form"
        >
          <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
            <h1
              className="m-0 relative text-inherit leading-[24px] capitalize font-semibold font-inherit"
              id="Locations"
            >
              Locations
            </h1>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Houston" },
                    { value: "Las Vegas" },
                    { value: "Los Angeles" },
                    { value: "Miami" },
                    { value: "New York" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <AntButton onClick={(e) => e.preventDefault()}>
                {`Select City `}
                <DownOutlined />
              </AntButton>
            </Dropdown>
          </div>
          <div
            className="w-[177px] flex flex-col items-start justify-start gap-[16px]"
            id="properties"
          >
            <h1
              className="m-0 relative text-inherit leading-[24px] capitalize font-semibold font-inherit flex items-end w-[150px]"
              id="Property Type"
            >
              Property Type
            </h1>
            <Dropdown
              className="self-stretch"
              overlay={
                <Menu>
                  {[
                    { value: "Luxury" },
                    { value: "Rental" },
                    { value: "Residential" },
                    { value: "Vacation" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <AntButton onClick={(e) => e.preventDefault()}>
                {`Select property type `}
                <DownOutlined />
              </AntButton>
            </Dropdown>
          </div>
          <div
            className="w-[155px] flex flex-col items-start justify-start gap-[16px]"
            id="price"
          >
            <h1
              className="m-0 relative text-inherit leading-[24px] capitalize font-semibold font-inherit flex items-end w-[150px]"
              id="Rent Range"
            >
              Price Range
            </h1>
            <Dropdown
              className="self-stretch"
              overlay={
                <Menu>
                  {[
                    { value: "$500-$2000" },
                    { value: "$2500-$10000" },
                    { value: "$10000+" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <AntButton onClick={(e) => e.preventDefault()}>
                {`Select rent range `}
                <DownOutlined />
              </AntButton>
            </Dropdown>
          </div>
          <Button
            className="w-[102px] cursor-pointer"
            name="Search"
            variant="primary"
            size="lg"
            onClick={onSearchCTAClick}
          >
            Search
          </Button>
        </div>
      </div>
    </main>
  );
};

export default RentSale;
