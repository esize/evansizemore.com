import { Global } from '@emotion/react';

const Font = () => {
  <Global
    styles={`
        /* spectral-500 - latin */
        @font-face {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 500;
        src: local(''),
            url('../fonts/spectral-v7-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/spectral-v7-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        /* spectral-500italic - latin */
        @font-face {
        font-family: 'Spectral';
        font-style: italic;
        font-weight: 500;
        src: local(''),
            url('../fonts/spectral-v7-latin-500italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/spectral-v7-latin-500italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        /* spectral-700 - latin */
        @font-face {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        src: local(''),
            url('../fonts/spectral-v7-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/spectral-v7-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        /* spectral-700italic - latin */
        @font-face {
        font-family: 'Spectral';
        font-style: italic;
        font-weight: 700;
        src: local(''),
            url('../fonts/spectral-v7-latin-700italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('../fonts/spectral-v7-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }

    `}
  />;
};
