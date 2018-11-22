import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Content = styled.div`
  background: #069;
  color: #fff;
`;

const Home = () => (
  <div>
    <Head>
      <title>Bruno Correia - Software Engineer</title>
    </Head>
    <Content>
      <h1>Hello World</h1>
    </Content>
  </div>
);

export default Home;
