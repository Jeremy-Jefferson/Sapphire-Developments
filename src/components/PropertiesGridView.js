import { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button, message } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HeartOutlined,
  ShareAltOutlined,
  PlusOutlined,
  HeartFilled,
} from "@ant-design/icons";
import PHeader from "./PHeader";
import PGCards from "./PGCards";
import PGFooter from "./PGFooter";
import { useSearchParams } from "react-router-dom";

const PropertiesGridView = () => {
  const [searchParams] = useSearchParams();
  const [favorites, setFavorites] = useState([]);
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  // Handle favorite toggle
  const handleFavorite = (propertyId) => {
    setFavorites((prev) => {
      if (prev.includes(propertyId)) {
        message.success("Removed from favorites");
        return prev.filter((id) => id !== propertyId);
      } else {
        message.success("Added to favorites");
        return [...prev, propertyId];
      }
    });
  };

  // Handle share
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      message.success("Link copied to clipboard!");
    }).catch(() => {
      message.error("Failed to copy link");
    });
  };

  // Handle add to compare
  const handleAddToCompare = () => {
    message.info("Added to comparison list");
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className="bg-white w-full min-h-screen flex flex-col items-start justify-start"
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
                <Menu onClick={({ key }) => setSortBy(key)}>
                  <Menu.Item key="default">Default Order</Menu.Item>
                  <Menu.Item key="popular">Popular properties</Menu.Item>
                  <Menu.Item key="newest">Latest properties</Menu.Item>
                  <Menu.Item key="price-asc">Price: Low to High</Menu.Item>
                  <Menu.Item key="price-desc">Price: High to Low</Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <a className="cursor-pointer">
                {sortBy === "default" ? "Default Order" : 
                 sortBy === "popular" ? "Popular properties" :
                 sortBy === "newest" ? "Latest properties" :
                 sortBy === "price-asc" ? "Price: Low to High" : 
                 sortBy === "price-desc" ? "Price: High to Low" : "Default Order"}
                <DownOutlined />
              </a>
            </Dropdown>
          </article>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-5">
          <PGCards 
            onFavorite={handleFavorite} 
            onShare={handleShare}
            onAddToCompare={handleAddToCompare}
            favorites={favorites}
          />
        </div>
        <div
          className="flex flex-row items-end justify-center gap-[8px]"
          id="Pagination"
        >
          <Button 
            size="middle" 
            type="default" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          />
          <Button size="middle" type={currentPage === 1 ? "primary" : "default"} onClick={() => handlePageChange(1)}>
            1
          </Button>
          <Button size="middle" type={currentPage === 2 ? "primary" : "default"} onClick={() => handlePageChange(2)}>
            2
          </Button>
          <Button size="middle" type={currentPage === 3 ? "primary" : "default"} onClick={() => handlePageChange(3)}>
            3
          </Button>
          <Button size="middle" type="default" disabled>
            ...
          </Button>
          <Button size="middle" type="default" disabled>
            54
          </Button>
          <Button 
            size="middle" 
            type="primary" 
            icon={<ArrowRightOutlined />} 
            onClick={() => handlePageChange(Math.min(54, currentPage + 1))}
            disabled={currentPage === 54}
          />
        </div>
      </section>
      <PGFooter />
    </main>
  );
};

export default PropertiesGridView;
