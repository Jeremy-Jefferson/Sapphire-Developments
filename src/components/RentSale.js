import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Dropdown, Menu, Button as AntButton, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";

const RentSale = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "rent");
  
  // State for dropdown selections
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedPropertyType, setSelectedPropertyType] = useState("Select property type");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Select price range");

  const handlePropertyTypeChange = useCallback((type) => {
    setPropertyType(type);
  }, []);

  // City options
  const cities = [
    { value: "Houston" },
    { value: "Las Vegas" },
    { value: "Los Angeles" },
    { value: "Miami" },
    { value: "New York" },
  ];

  // Property type options
  const propertyTypes = [
    { value: "Luxury" },
    { value: "Rental" },
    { value: "Residential" },
    { value: "Vacation" },
  ];

  // Price range options based on property type
  const getPriceRanges = () => {
    if (propertyType === "rent") {
      return [
        { value: "$500-$2,000", min: 500, max: 2000 },
        { value: "$2,000-$5,000", min: 2000, max: 5000 },
        { value: "$5,000-$10,000", min: 5000, max: 10000 },
        { value: "$10,000+", min: 10000, max: Infinity },
      ];
    } else {
      return [
        { value: "$100K-$300K", min: 100000, max: 300000 },
        { value: "$300K-$500K", min: 300000, max: 500000 },
        { value: "$500K-$1M", min: 500000, max: 1000000 },
        { value: "$1M+", min: 1000000, max: Infinity },
      ];
    }
  };

  const onSearchCTAClick = useCallback(() => {
    // Build query params
    const params = new URLSearchParams();
    params.set("type", propertyType);
    if (selectedCity !== "Select City") {
      params.set("city", selectedCity);
    }
    if (selectedPropertyType !== "Select property type") {
      params.set("propertyType", selectedPropertyType);
    }
    if (selectedPriceRange !== "Select price range") {
      const range = getPriceRanges().find(r => r.value === selectedPriceRange);
      if (range) {
        params.set("minPrice", range.min);
        params.set("maxPrice", range.max);
      }
    }
    message.loading({ content: 'Searching properties...', key: 'search' });
    setTimeout(() => {
      navigate(`/properties-grid-view?${params.toString()}`);
    }, 1000);
  }, [navigate, propertyType, selectedCity, selectedPropertyType, selectedPriceRange]);

  // Create menus with click handlers
  const cityMenu = (
    <Menu>
      {cities.map((option, index) => (
        <Menu.Item 
          key={index}
          onClick={() => setSelectedCity(option.value)}
        >
          {option.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  const propertyTypeMenu = (
    <Menu>
      {propertyTypes.map((option, index) => (
        <Menu.Item 
          key={index}
          onClick={() => setSelectedPropertyType(option.value)}
        >
          {option.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  const priceMenu = (
    <Menu>
      {getPriceRanges().map((option, index) => (
        <Menu.Item 
          key={index}
          onClick={() => setSelectedPriceRange(option.value)}
        >
          {option.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <main
      className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-slate-700 font-body-large-400"
      id="HeroMain"
    >
      <div
        className="flex flex-row items-start justify-start gap-[10px]"
        id="Buttons"
        role="tablist"
        aria-label="Property type selection"
      >
        <Button 
          name="Rent" 
          variant={propertyType === "rent" ? "primary" : "light"}
          onClick={() => handlePropertyTypeChange("rent")}
          aria-selected={propertyType === "rent"}
          role="tab"
        >
          Rent
        </Button>
        <Button 
          name="Sale" 
          variant={propertyType === "sale" ? "primary" : "light"}
          onClick={() => handlePropertyTypeChange("sale")}
          aria-selected={propertyType === "sale"}
          role="tab"
        >
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
              overlay={cityMenu}
              trigger={["click"]}
            >
              <AntButton className="w-full">
                {selectedCity} <DownOutlined />
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
              overlay={propertyTypeMenu}
              trigger={["click"]}
            >
              <AntButton className="w-full">
                {selectedPropertyType} <DownOutlined />
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
              overlay={priceMenu}
              trigger={["click"]}
            >
              <AntButton className="w-full">
                {selectedPriceRange} <DownOutlined />
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
