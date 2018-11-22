import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Header = styled.div`
  color: #fff;
`;

const Home = () => (
  <div>
    <Head>
      <title>Bruno Correia - Software Engineer</title>
    </Head>
    <Header>
      <h1>Hello World</h1>
    </Header>
  </div>
);

export default Home;
