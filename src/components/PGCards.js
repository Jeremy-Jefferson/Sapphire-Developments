import { HeartOutlined, ShareAltOutlined, PlusOutlined, HeartFilled } from "@ant-design/icons";

const PGCards = ({ onFavorite, onShare, onAddToCompare, favorites = [] }) => {
  const propertyIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // IDs for 12 cards
  
  const handleFavorite = (id) => {
    if (onFavorite) onFavorite(id);
  };
  
  const handleShare = () => {
    if (onShare) onShare();
  };
  
  const handleAddToCompare = () => {
    if (onAddToCompare) onAddToCompare();
  };
  return (
    <div
      className="flex-1 shrink-0 flex flex-row flex-wrap items-start justify-center gap-[8px] text-left text-[14.51px] text-gray-700 font-body-large-400"
      id="Cards"
    >
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          id="Rental 2"
          alt=""
          src="/luxury-home-1.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            2166 Marlin Ct. Miami, FL 33134
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 2,660,840
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental card footer 2"
        >
          <div
            className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]"
            id="User"
          >
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              alt=""
              src="/png/ellipse-11@2x.png"
            />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h2>
          </div>
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]"
            id="buttons"
          >
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/sharenetwork.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          id="Rental 3"
          alt=""
          src="/luxury-home-2.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <h1 className="m-0 flex-1 relative text-inherit leading-[20.32px] font-medium font-inherit">
            3455 Marvel Dr. Houston, TX 77445
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 890,693
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]"
          id="Rental 3"
        >
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental card footer 3"
        >
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              alt=""
              src="/png/ellipse-11@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h1>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]">
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="share"
              onClick={handleShare}
            >
              <ShareAltOutlined style={{ fontSize: 14 }} />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="fave"
              onClick={() => handleFavorite(2)}
            >
              {favorites.includes(2) ? <HeartFilled style={{ fontSize: 14, color: '#ff4d4f' }} /> : <HeartOutlined style={{ fontSize: 14 }} />}
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="add"
              onClick={handleAddToCompare}
            >
              <PlusOutlined style={{ fontSize: 14 }} />
            </button>
          </div>
        </footer>
      </div>
      <div
        className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[355px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
        id="rental 4"
      >
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src="/luxury-home-7.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <h1
            className="m-0 flex-1 relative text-inherit leading-[20.32px] font-medium font-inherit"
            id="4456 Ozarka St. Las Vegas, NV 81566"
          >
            4456 Ozarka St. Las Vegas, NV 89134
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 725,903
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]"
          id="details"
        >
          <fieldset
            className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400"
            id="Parking"
          >
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental card footer 4"
        >
          <div
            className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]"
            id="User"
          >
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              alt=""
              src="/png/ellipse-11@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h1>
          </div>
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]"
            id="Buttons"
          >
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="share"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/sharenetwork.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[355px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
        id="Rental 1"
      >
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src="/luxury-home-3.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            713 Arturo Ln. Los Angeles, CA 90401
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 920,544
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              loading="lazy"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental 1 card footer"
        >
          <div
            className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]"
            id="User"
          >
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              loading="lazy"
              alt=""
              src="/png/ellipse-11@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h1>
          </div>
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]"
            id="Buttons"
          >
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="share"
            >
              <img
                className="relative w-[14.5px] h-[14.5px] object-cover"
                alt=""
                src="/png/share1@2x.png"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="Fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="Add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[355px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          id="Rental 2"
          alt=""
          src="/luxury-home-4.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            4560 Willow St. Miami, FL 33134
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 4,590,240
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental card footer 2"
        >
          <div
            className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]"
            id="User"
          >
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              alt=""
              src="/png/ellipse-11@2x.png"
            />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h2>
          </div>
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]"
            id="buttons"
          >
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/sharenetwork.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[355px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          id="Rental 3"
          alt=""
          src="/luxury-home-5.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <h1 className="m-0 flex-1 relative text-inherit leading-[20.32px] font-medium font-inherit">
            2634 Sycamore Ln. Los Angeles, CA 90210
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 1,590,693
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]"
          id="Rental 3"
        >
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental card footer 3"
        >
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              alt=""
              src="/png/ellipse-111@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h1>
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]">
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="share"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/sharenetwork.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[355px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
        id="rental 4"
      >
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src="/luxury-home-8.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <h1
            className="m-0 flex-1 relative text-inherit leading-[20.32px] font-medium font-inherit"
            id="4456 Ozarka St. Las Vegas, NV 81566"
          >
            234 Oakwood Dr. Las Vegas, NV 89101
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 3,525,903
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]"
          id="details"
        >
          <fieldset
            className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400"
            id="Parking"
          >
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental card footer 4"
        >
          <div
            className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]"
            id="User"
          >
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              alt=""
              src="/png/ellipse-111@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h1>
          </div>
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]"
            id="Buttons"
          >
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="share"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/sharenetwork.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      <div
        className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
        id="Rental 1"
      >
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src="/luxury-home-6.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            890 Birch Ave. Houston, TX 77021
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 12,720,180
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/car.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              alt=""
              src="/svg/bathtub.svg"
            />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img
              className="relative w-[17.4px] h-[17.4px]"
              loading="lazy"
              alt=""
              src="/svg/arrowsout.svg"
            />
            <small className="relative leading-[16.27px] font-medium">
              2,096.00 ft
            </small>
          </fieldset>
        </div>
        <footer
          className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400"
          id="Rental 1 card footer"
        >
          <div
            className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]"
            id="User"
          >
            <img
              className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
              loading="lazy"
              alt=""
              src="/png/ellipse-111@2x.png"
            />
            <h1 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">
              Jenny Wilson
            </h1>
          </div>
          <div
            className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]"
            id="Buttons"
          >
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="share"
            >
              <img
                className="relative w-[14.5px] h-[14.5px] object-cover"
                alt=""
                src="/png/share11@2x.png"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="Fave"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/heart.svg"
              />
            </button>
            <button
              className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start"
              id="Add"
            >
              <img
                className="relative w-[14.5px] h-[14.5px]"
                alt=""
                src="/svg/plus.svg"
              />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Additional Property Card 8 */}
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt="Luxury property"
          src="/luxury-home-13.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            890 Sunset Blvd. Los Angeles, CA 90028
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 4,850,000
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/car.svg" />
            <small className="relative leading-[16.27px] font-medium">5</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/bathtub.svg" />
            <small className="relative leading-[16.27px] font-medium">4</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/arrowsout.svg" />
            <small className="relative leading-[16.27px] font-medium">3,800 ft</small>
          </fieldset>
        </div>
        <footer className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover" alt="" src="/png/ellipse-1@2x.png" />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">Robert Chen</h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.81px]">
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/heart.svg" />
            </button>
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/plus.svg" />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Additional Property Card 9 */}
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt="Luxury property"
          src="/luxury-home-14.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            456 Ocean Dr. Miami Beach, FL 33139
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 6,750,000
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/car.svg" />
            <small className="relative leading-[16.27px] font-medium">6</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/bathtub.svg" />
            <small className="relative leading-[16.27px] font-medium">5</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/arrowsout.svg" />
            <small className="relative leading-[16.27px] font-medium">4,500 ft</small>
          </fieldset>
        </div>
        <footer className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover" alt="" src="/png/ellipse-12@2x.png" />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">Jennifer Adams</h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.81px]">
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/heart.svg" />
            </button>
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/plus.svg" />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Additional Property Card 10 */}
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt="Luxury property"
          src="/luxury-home-10.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            789 Mountain View Dr. Aspen, CO 81611
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 8,900,000
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/car.svg" />
            <small className="relative leading-[16.27px] font-medium">7</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/bathtub.svg" />
            <small className="relative leading-[16.27px] font-medium">6</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/arrowsout.svg" />
            <small className="relative leading-[16.27px] font-medium">5,200 ft</small>
          </fieldset>
        </div>
        <footer className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover" alt="" src="/png/ellipse-11@2x.png" />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">Michael Torres</h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.81px]">
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/heart.svg" />
            </button>
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/plus.svg" />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Additional Property Card 11 */}
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt="Luxury property"
          src="/luxury-home-11.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            321 Lake Shore Dr. Lake Tahoe, NV 89451
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 12,500,000
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/car.svg" />
            <small className="relative leading-[16.27px] font-medium">8</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/bathtub.svg" />
            <small className="relative leading-[16.27px] font-medium">7</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/arrowsout.svg" />
            <small className="relative leading-[16.27px] font-medium">6,800 ft</small>
          </fieldset>
        </div>
        <footer className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover" alt="" src="/png/ellipse-111@2x.png" />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">Sarah Williams</h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.81px]">
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/heart.svg" />
            </button>
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/plus.svg" />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Additional Property Card 12 */}
      <div className="rounded-3xs bg-white shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt="Luxury property"
          src="/luxury-home-12.jpg"
        />
        <div className="self-stretch flex flex-row items-start justify-start p-2.5">
          <div className="flex-1 relative leading-[20.32px] font-medium">
            567 Palm Beach Rd. West Palm Beach, FL 33401
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-darkslateblue">
          <div className="relative leading-[18.98px] font-semibold">
            $ 15,900,000
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/car.svg" />
            <small className="relative leading-[16.27px] font-medium">9</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/bathtub.svg" />
            <small className="relative leading-[16.27px] font-medium">8</small>
          </fieldset>
          <fieldset className="shrink-0 flex flex-row items-center justify-start gap-[4.35px] text-left text-[10.84px] text-gray-500 font-body-large-400">
            <img className="relative w-[17.4px] h-[17.4px]" alt="" src="/svg/arrowsout.svg" />
            <small className="relative leading-[16.27px] font-medium">7,500 ft</small>
          </fieldset>
        </div>
        <footer className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px] text-gray-700 font-body-large-400">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
            <img className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover" alt="" src="/png/ellipse-12@2x.png" />
            <h2 className="m-0 relative text-inherit leading-[17.42px] font-medium font-inherit">David Kim</h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[5.81px]">
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/heart.svg" />
            </button>
            <button className="cursor-pointer [border:none] p-[2.902620315551758px] bg-primary-50 rounded-[1.45px] shrink-0 flex flex-row items-start justify-start">
              <img className="relative w-[14.5px] h-[14.5px]" alt="" src="/svg/plus.svg" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PGCards;
