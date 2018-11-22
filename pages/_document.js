import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import GlobalStyle from '../styles/global';

export default class MyCustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags }; // return styles collected
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <GlobalStyle />
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
