import { keyframes } from "@emotion/react";

export const lightTheme = {
  gray: '#3a3a3a',
  gray800: 'rgba(58, 58, 58, 0.8)',
  gray700: 'rgba(58, 58, 58, 0.7)',
  white: '#FFFFFF',
}

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;