import React from 'react';
import Head from 'next/head';

import withAnalytics from '../../components/hocs/withAnalytics';
import { Hero, Logo } from './styles';

const Hello = () => (
  <div>
    <Head>
      <title>Hello</title>
    </Head>
    <Hero>
      <Logo alt="" src="/static/images/globe-americas.svg" width="40" />
      <h1>Hello World</h1>
    </Hero>
  </div>
);

export default withAnalytics()(Hello);
