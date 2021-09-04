import { Link } from 'react-router-dom';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';

export const AppBar = () => {
  const { connected } = useWallet();

  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <nav className="nav" role="navigation">
      <div className="container">
        <div className="top-logo">
          <div id="logo"><Link to="/about">Solphins</Link></div>
        </div>
        <div className="top-menu menu-1 text-center">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/mint-solphins">Mint</Link></li>
            <li><Link to="/solphin-traits">Traits</Link></li>
            <li><Link to="/my-solphins">My Solphins</Link></li>
          </ul>
        </div>
        <div className="top-social menu-1 text-right">
          <ul className="social">
            <li><a href="#" target="_blank"><i className="icon-twitter"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-discord"></i></a></li>
            {connected ? (
              <li>
                <CurrentUserBadge
                  showBalance={false}
                  showAddress={false}
                  iconSize={24}
                />
              </li>
            ) : (
              <ConnectButton type="primary" allowWalletChange />
            )}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};