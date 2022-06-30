import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import React from 'react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${reset} html, body, #__next {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        * {
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          text-size-adjust: none;
          line-height: 1;
        }
        a {
          text-decoration: none;
          outline: none;
        }
      `}
    />
  );
}

export default GlobalStyle;