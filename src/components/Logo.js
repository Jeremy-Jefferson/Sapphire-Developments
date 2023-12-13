import { css } from "@emotion/react";

const Logo = () => {
  return (
    <div
      className={css`
        position: relative;
        width: 199px;
        height: 56px;
      `}
      id="LOGO"
    >
      <img
        className={css`
          position: absolute;
          height: 100%;
          width: 97.19%;
          top: 0%;
          right: 2.81%;
          bottom: 0%;
          left: 0%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/logo@2x.png"
      />
      <img
        className={css`
          position: absolute;
          height: 20.89%;
          width: 5.98%;
          top: 0%;
          right: 0%;
          bottom: 79.11%;
          left: 94.02%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/copyright@2x.png"
      />
    </div>
  );
};

export default Logo;
