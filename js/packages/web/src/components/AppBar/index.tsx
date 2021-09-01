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
