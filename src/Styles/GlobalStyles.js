import { createGlobalStyle } from 'styled-components';

import InterTightRegular from '../fonts/InterTight-Regular.ttf';
import InterTightMedium from '../fonts/InterTight-Medium.ttf';
import InterTightBold from '../fonts/InterTight-Bold.ttf';
import InterTightBoldItalic from '../fonts/InterTight-BoldItalic.ttf';

import InterSemiBold from '../fonts/Inter-SemiBold.ttf';
import InterSemiBoldItalic from '../fonts/Inter-SemiBold-Italic.ttf';

import PoppinsRegular from '../fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../fonts/Poppins-Medium.ttf';


export const globalRegex = {
  priorityList: ["low", "medium", "high"],
  categoryList: ["to-do", "in-progress", "done"],
  timeRegex: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
  dateRegex: /^20[0-2][0-9]-((0[1-9])|(1[0-2]))-(0[1-9]|[1-2][0-9]|3[0-1])$/,

  emailRegexp: /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/,
  phoneRegexp: /^\+\d{1,13}$/,
  birthdayRegexp: /^\d{2}\/\d{2}\/\d{4}$/,
  passwordRegexp: /^(?=.*\d)[A-Za-z\d]{6,}$/,

  customFieldRegexp: /^[A-Za-z0-9]{3,30}$/,
  SkypeRegexp: /^[a-z][a-z0-9\\.,\-_]{5,31}$/i,
}

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'InterTightRegular';
        src: local('InterTightRegular'),
        url(${InterTightRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterTightMedium';
        src: local('InterTightMedium'),
        url(${InterTightMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBoldItalic';
        src: local('InterSemiBoldItalic'),
        url(${InterSemiBoldItalic}) format('truetype');
        font-weight: 600;
        font-style: italic;
    }

    @font-face {
        font-family: 'InterTightBold';
        src: local('InterTightBold'),
        url(${InterTightBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterTightBoldItalic';
        src: local('InterTightBoldItalic'),
        url(${InterTightBoldItalic}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'),
        url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsMedium';
        src: local('PoppinsMedium'),
        url(${PoppinsMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }


  html, body {
    font-family: 'InterTightRegular', sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    background-color: ${({ theme }) => theme.mainBGColor};
    color: ${({ theme }) => theme.mainTextColor};
  }
 

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  `;
