import React, { useMemo } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Dropdown, Menu } from 'antd';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { useMeta } from '../../contexts';

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Link to="/#about">
        <Button className="app-btn">About</Button>
      </Link>
      <Link to="/mint-whales">
        <Button className="app-btn">Mint</Button>
      </Link>
      <Link to="/whale-traits">
        <Button className="app-btn">Traits</Button>
      </Link>
      <Link to="/my-whales">
        <Button className="app-btn">My Whales</Button>
      </Link>
      <Link to="/#roadmap">
        <Button className="app-btn">Roadmap</Button>
      </Link>
      <Link to="/#faq">
        <Button className="app-btn">FAQ</Button>
      </Link>
      <Link>
          <Button><a class="btn btn-large" href="_target"><i class="fa fa-twitter"></i></a></Button>
      </Link>
      <Link>
          <Button><a class="btn btn-large" href="_target"><i class="fab fa-discord"></i></a></Button>
      </Link>
    </div>
  );
};

export const AppBar = () => {
  const { connected } = useWallet();

  return (
    <>
      <div className="app-left app-bar-box">
        <DefaultActions />
      </div>
      {connected ? (
        <div className="app-right app-bar-box">
          <CurrentUserBadge
            showBalance={false}
            showAddress={false}
            iconSize={24}
          />
        </div>
      ) : (
        <ConnectButton type="primary" allowWalletChange />
      )}
    </>
  );
};
