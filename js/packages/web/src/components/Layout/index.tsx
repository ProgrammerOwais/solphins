import React from 'react';
import { Layout } from 'antd';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';

const { Header, Content } = Layout;

export const AppLayout = React.memo((props: any) => {

  return (
    <>
      <Layout>
        <Header className="nav" role="navigation">
          <AppBar />
        </Header>
        <Content>
          {props.children}
        </Content>
      </Layout>
    </>
  );
});
