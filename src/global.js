import { Global, css } from '@emotion/react';

const globalStyles = css`
  /* fonts */
  --header-heading-4: "Public Sans";
  --body-large-400: Inter;
  --font-roboto: Roboto;
  --font-poppins: Poppins;

  /* font sizes */
  --header-heading-4-size: 24px;
  --font-size-3xl: 22px;
  --font-size-xs-6: 11.6px;
  --font-size-2xs-8: 10.8px;
  --font-size-sm-6: 13.6px;
  --font-size-mini-5: 14.5px;
  --heading-heading-5-size: 16px;
  --display-size: 52px;
  --body-large-400-size: 20px;
  --heading-heading-1-size: 40px;
  --font-size-26xl: 45px;
  --font-size-lg: 18px;
  --font-size-13xl: 32px;
  --font-size-45xl: 64px;

  /* Colors */
  --color-white: #fff;
  --gray-500: #6d737a;
  --primary-800: #1e2640;
  --gray-black: #1b1d1f;
  --primary-900: #0f1320;
  --color-gray-100: rgba(0, 0, 0, 0.5);
  --primary-50: #edeff6;
  --color-whitesmoke-100: #eaeaea;
  --color-gainsboro: rgba(226, 226, 226, 0.1);
  --gray-700: #363a3d;
  --color-darkslateblue-100: #4a60a1;
  --primary-700: #2c3a61;
  --color-lightslategray: #889099;

  /* Gaps */
  --gap-0: 0px;
  --gap-31xl: 50px;
  --gap-13xl: 32px;
  --gap-base: 16px;
  --gap-5xs: 8px;
  --gap-4xl: 23px;
  --gap-4xs-7: 8.7px;
  --gap-7xs-8: 5.8px;
  --gap-mid: 17px;
  --gap-8xs-4: 4.4px;
  --gap-11xl: 30px;
  --gap-21xl: 40px;
  --gap-3xs: 10px;
  --gap-5xl: 24px;
  --gap-20xl: 39px;
  --gap-35xl: 54px;
  --gap-67xl: 86px;
  --gap-26xl: 45px;
  --gap-7xl: 26px;
  --gap-43xl: 62px;
  --gap-xl: 20px;

  /* Paddings */
  --padding-31xl: 50px;
  --padding-sm: 14px;
  --padding-101xl: 120px;
  --padding-41xl: 60px;
  --padding-xl: 20px;
  --padding-mini: 15px;
  --padding-smi: 13px;
  --padding-10xs-9: 2.9px;
  --padding-3xs: 10px;
  --padding-3xl: 22px;
  --padding-61xl: 80px;
  --padding-21xl: 40px;
  --padding-5xl: 24px;
  --padding-67xl: 86px;
  --padding-8xs: 5px;
  --padding-9xl: 28px;
  --padding-11xl: 30px;
  --padding-xs: 12px;
  --padding-base: 16px;
  --padding-51xl: 70px;
  --padding-56xl: 75px;
  --padding-34xl: 53px;
  --padding-13xl: 32px;
  --padding-43xl: 62px;

  /* Border radiuses */
  --br-9xs: 4px;
  --br-3xs: 10px;
  --br-11xs-5: 1.5px;
  --br-xs: 12px;
  --br-7xs: 6px;
  --br-5xs: 8px;
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
