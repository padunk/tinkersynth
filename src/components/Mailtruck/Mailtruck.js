import React from 'react';
import styled, { keyframes } from 'styled-components';

import Svg from '../Svg';

import wheelSrc from '../../images/wheel.svg';

const Mailtruck = ({ isDriving = true }) => {
  return (
    <Wrapper>
      <Svg width="159" height="79" viewBox="0 0 159 79" fill="none">
        <rect
          id="Wheel shadows"
          x="10.858"
          y="50.91"
          width="133"
          height="18"
          fill="#2B2B2B"
        />
        <path
          id="Truck body"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.8584 4.90967L2.8584 4.90967V6.90967L2.8584 64.0812C2.8584 64.6117 3.06911 65.1204 3.44419 65.4954L4.77261 66.8239C5.14768 67.199 5.3584 67.7077 5.3584 68.2381V69.4097C5.3584 70.5142 6.25383 71.4097 7.3584 71.4097H12.8584C13.963 71.4097 14.8584 70.5142 14.8584 69.4097V64.0518C14.8584 63.9572 14.8645 63.8661 14.8814 63.773C15.106 62.542 17.1335 53.4097 27.8584 53.4097C38.5833 53.4097 40.6108 62.542 40.8354 63.773C40.8523 63.8661 40.8584 63.9572 40.8584 64.0518V69.4097C40.8584 70.5142 41.7538 71.4097 42.8584 71.4097L108.897 71.4097C109.201 71.4097 109.5 71.3417 109.766 71.1967C110.479 70.8091 111.962 69.9335 112.858 68.9097C114.383 67.1693 115.245 63.4254 115.348 62.9579C115.355 62.9256 115.361 62.8986 115.37 62.8667C115.567 62.177 118.271 53.4097 128.358 53.4097C136.421 53.4097 139.472 60.4858 140.454 63.7705C140.734 64.7072 141.575 65.4097 142.553 65.4097H155.308C156.432 65.4097 157.335 64.4835 157.307 63.3597L156.883 46.4072C156.868 45.7791 156.558 45.1949 156.046 44.8297L139.66 33.1252C139.461 32.9827 139.289 32.8048 139.154 32.6003L121.451 5.80715C121.081 5.24679 120.454 4.90967 119.783 4.90967L4.8584 4.90967Z"
          fill="#E4E4E4"
        />

        <g id="Bumpers" fill="#5F5F5F">
          <path
            id="Vector 2"
            d="M153.679 64.4097H142.127C141.481 64.4097 141 65.0156 141.113 65.6525C141.236 66.3455 141.358 67.2077 141.358 67.9097C141.358 68.6117 141.236 69.4739 141.113 70.1668C141 70.8037 141.481 71.4097 142.127 71.4097H156.74C157.119 71.4097 157.465 71.1957 157.635 70.8569L158.253 69.6208C158.322 69.482 158.358 69.3288 158.358 69.1736V65.243C158.358 65.0266 158.288 64.8161 158.158 64.643L157.548 63.8287C157.183 63.343 156.475 63.301 155.962 63.6248C155.764 63.7492 155.555 63.8559 155.358 63.9097C154.941 64.0236 154.321 64.2422 154.026 64.3485C153.915 64.3887 153.798 64.4097 153.679 64.4097Z"
          />
          <path
            id="Vector 2_2"
            d="M3.46659 65.1395L5.2376 67.2647C5.31743 67.3605 5.37864 67.4704 5.41807 67.5887L6.31856 70.2902C6.34476 70.3688 6.38889 70.4402 6.44747 70.4987C6.78363 70.8349 6.54555 71.4097 6.07015 71.4097H2.52068C2.41319 71.4097 2.30641 71.3923 2.20445 71.3584L1.54217 71.1376C1.13383 71.0015 0.858398 70.6193 0.858398 70.1889L0.858398 66.4097C0.858398 66.0949 1.00659 65.7985 1.2584 65.6097L2.09837 64.9797C2.52428 64.6603 3.12577 64.7305 3.46659 65.1395Z"
          />
        </g>
        <g id="Windows">
          <g id="Vector">
            <path
              d="M135.31 34.5868L119.606 11.0311C118.783 9.79629 116.858 10.3797 116.858 11.8638V35.4097C116.858 36.2381 117.53 36.9097 118.358 36.9097H134.056C135.254 36.9097 135.974 35.5837 135.31 34.5868Z"
              fill="url(#mailtruck-windows1)"
            />
            <path
              d="M135.31 34.5868L119.606 11.0311C118.783 9.79629 116.858 10.3797 116.858 11.8638V35.4097C116.858 36.2381 117.53 36.9097 118.358 36.9097H134.056C135.254 36.9097 135.974 35.5837 135.31 34.5868Z"
              fill="#B6B6B6"
            />
          </g>
          <g id="Rectangle">
            <rect
              x="81.858"
              y="9.91"
              width="27"
              height="27"
              rx="6"
              fill="url(#mailtruck-windows2)"
            />
            <rect
              x="81.858"
              y="9.91"
              width="27"
              height="27"
              rx="6"
              fill="#B6B6B6"
            />
          </g>
        </g>
        <g id="Stripes" fillRule="evenodd" clipRule="evenodd">
          <path
            id="Subtract"
            d="M77.8584 45.9097L4.8584 45.9097L4.8584 48.9097L77.8584 48.9097V45.9097ZM85.8584 48.9097L110.858 48.9097V45.9097L85.8584 45.9097V48.9097ZM113.858 45.9097V48.9097H138.858C140.515 48.9097 141.858 47.5665 141.858 45.9097H113.858Z"
            fill="#3C22E6"
          />
          <path
            id="Subtract_2"
            d="M77.8584 41.9097L4.8584 41.9097V44.9097L77.8584 44.9097V41.9097ZM85.8584 44.9097L110.858 44.9097V41.9097L85.8584 41.9097V44.9097ZM113.858 41.9097V44.9097H141.858C141.858 43.2528 140.515 41.9097 138.858 41.9097H113.858Z"
            fill="#F218BC"
          />
        </g>
        <g id="Door">
          <rect
            id="Door handle"
            x="80.858"
            y="41.91"
            width="3"
            height="7"
            fill="#C4C4C4"
          />
          <path
            id="Door frame"
            d="M79.3584 10.4097V45.4097V66.4097C79.3584 68.0665 80.7015 69.4097 82.3584 69.4097H107.15C107.616 69.4097 108.075 69.3012 108.492 69.0929L109.875 68.4011C110.51 68.0838 111.012 67.5518 111.291 66.8996L112.116 64.9757C112.276 64.6022 112.358 64.2002 112.358 63.7939V10.4097C112.358 8.75281 111.015 7.40967 109.358 7.40967L82.3584 7.40967C80.7015 7.40967 79.3584 8.75281 79.3584 10.4097Z"
            stroke="#000"
            strokeOpacity="0.05"
          />
        </g>
        <path
          id="Roof"
          d="M2.8584 2.90967C2.8584 1.8051 3.75383 0.909668 4.8584 0.909668L117.858 0.909668C118.963 0.909668 119.858 1.8051 119.858 2.90967V4.90967L2.8584 4.90967L2.8584 2.90967Z"
          fill="#A0A0A0"
        />
        <g id="Logo">
          <g id="Envelope">
            <path
              id="Subtract_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.26 26.1571L43.4649 24.9306L51.2099 32.6756C50.7877 32.8271 50.3327 32.9097 49.8584 32.9097L29.8584 32.9097C29.5238 32.9097 29.1988 32.8686 28.8881 32.7912L36.762 24.9173L37.98 26.1571C39.1557 27.3538 41.0843 27.3538 42.26 26.1571ZM27.0717 31.7792C26.3234 31.0523 25.8584 30.0353 25.8584 28.9097V16.9097C25.8584 16.0406 26.1355 15.2363 26.6063 14.5803L35.3603 23.4906L27.0717 31.7792ZM28.146 13.2937L39.4066 24.7554C39.7986 25.1544 40.4414 25.1544 40.8333 24.7554L51.9136 13.4773C51.3129 13.1169 50.6099 12.9097 49.8584 12.9097L29.8584 12.9097C29.2457 12.9097 28.6651 13.0474 28.146 13.2937ZM53.3184 14.9012L44.8666 23.5039L52.8863 31.5235C53.492 30.8225 53.8584 29.9089 53.8584 28.9097V16.9097C53.8584 16.1776 53.6617 15.4915 53.3184 14.9012Z"
              fill="#000"
              fillOpacity="0.15"
            />
          </g>
          <g id="Speed lines" stroke="#000" strokeOpacity="0.2">
            <line id="Line" x1="22.858" y1="18.41" x2="15.858" y2="18.41" />
            <line id="Line 2" x1="22.858" y1="23.41" x2="10.858" y2="23.41" />
            <line id="Line 3" x1="22.858" y1="28.41" x2="13.858" y2="28.41" />
          </g>
        </g>

        <defs>
          <linearGradient
            id="mailtruck-windows1"
            x1="126.858"
            y1="6.91"
            x2="126.858"
            y2="36.91"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C3C3C3" />
            <stop offset="1" stopColor="#8D8D8D" />
          </linearGradient>
          <linearGradient
            id="mailtruck-windows2"
            x1="95.358"
            y1="9.91"
            x2="95.358"
            y2="36.91"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C3C3C3" />
            <stop offset="1" stopColor="#8D8D8D" />
          </linearGradient>
        </defs>
      </Svg>

      <Wheel src={wheelSrc} style={{ left: 16 }} />
      <Wheel src={wheelSrc} style={{ left: 116 }} />
    </Wrapper>
  );
};

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Wheel = styled.img`
  display: block;
  position: absolute;
  z-index: 2;
  top: 55px;
  animation: ${spinning} 1000ms linear infinite;
  transform-origin: 12px 12.5px;
`;

export default Mailtruck;