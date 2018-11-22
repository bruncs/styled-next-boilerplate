import React from 'react';
import Head from 'next/head';

import withAnalytics from '../../components/hocs/withAnalytics';
import { Hero } from './styles';

const Contact = () => (
  <div>
    <Head>
      <title>Contact</title>
    </Head>
    <Hero>
      <h1>Contact</h1>
    </Hero>
  </div>
);

export default withAnalytics()(Contact);
