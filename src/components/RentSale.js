import { useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Dropdown, Menu, Button as AntButton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const RentSale = () => {
  const navigate = useNavigate();

  const onSearchCTAClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: var(--gap-mid);
        text-align: left;
        font-size: var(--heading-heading-5-size);
        color: var(--primary-700);
        font-family: var(--body-large-400);
      `}
      id="HeroMain"
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-3xs);
        `}
        id="Buttons"
      >
        <Button className={css``} name="Rent" variant="primary">
          Rent
        </Button>
        <Button className={css``} name="Sale" variant="light">
          Sale
        </Button>
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
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-5xs);
            background-color: var(--color-white);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-13xl) var(--padding-43xl);
            box-sizing: border-box;
            max-width: 1400px;
            @media screen and (max-width: 960px) {
              width: 300px;
              flex-direction: column;
              gap: var(--gap-xl);
              align-items: flex-start;
              justify-content: flex-start;
              margin-left: auto;
              margin-right: auto;
            }
          `}
          id="Form"
        >
          <div
            className={css`
              width: 137px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-base);
              text-align: center;
            `}
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 24px;
                text-transform: capitalize;
                font-weight: 600;
                font-family: inherit;
              `}
              id="Locations"
            >
              Locations
            </h1>
            <Dropdown
              className={css``}
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
              <AntButton className={css``} onClick={(e) => e.preventDefault()}>
                {`Select City `}
                <DownOutlined className={css``} />
              </AntButton>
            </Dropdown>
          </div>
          <div
            className={css`
              width: 177px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-base);
            `}
            id="properties"
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 24px;
                text-transform: capitalize;
                font-weight: 600;
                font-family: inherit;
                display: flex;
                align-items: flex-end;
                width: 150px;
              `}
              id="Property Type"
            >
              Property Type
            </h1>
            <Dropdown
              className={css`
                align-self: stretch;
              `}
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
              <AntButton className={css``} onClick={(e) => e.preventDefault()}>
                {`Select property type `}
                <DownOutlined className={css``} />
              </AntButton>
            </Dropdown>
          </div>
          <div
            className={css`
              width: 155px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-base);
            `}
            id="price"
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                line-height: 24px;
                text-transform: capitalize;
                font-weight: 600;
                font-family: inherit;
                display: flex;
                align-items: flex-end;
                width: 150px;
              `}
              id="Rent Range"
            >
              Price Range
            </h1>
            <Dropdown
              className={css`
                align-self: stretch;
              `}
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
              <AntButton className={css``} onClick={(e) => e.preventDefault()}>
                {`Select rent range `}
                <DownOutlined className={css``} />
              </AntButton>
            </Dropdown>
          </div>
          <Button
            className={css`
              width: 102px;
              cursor: pointer;
            `}
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
