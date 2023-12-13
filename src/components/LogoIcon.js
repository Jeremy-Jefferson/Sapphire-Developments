import { css } from "@emotion/css";

const LogoIcon = ({ imageDimensions }) => {
  return (
    <img
      className={css`
        position: relative;
        width: 284px;
        height: 81px;
        object-fit: cover;
      `}
      alt=""
      src={imageDimensions}
    />
  );
};

export default LogoIcon;
