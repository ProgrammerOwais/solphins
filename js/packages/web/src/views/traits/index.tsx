import Head from 'next/head'

import { Layout } from 'antd';
import React from 'react';

export const TraitsView = () => {
  return (
    <html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
    <body>
    <div id="page">
      <div id="author" className="bg-section">
        <div className="container">
          <div className="row top-line animate-box">
            <div className="col-md-12 text-center heading">
              <h2>Traits</h2><hr></hr>
            </div>
          </div>
          <div className="row top-line animate-box">
            <div className="col-md-12 text-center heading">
              <h3>COMING SOON</h3>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <ul className="social-icons">
                <li><a href="https://twitter.com/SolphinsNFT" target="_blank"><i className="icon-twitter"></i></a></li>
                <li><a href="https://discord.gg/6ue4YcBTpC" target="_blank"><i className="fab fa-discord"></i></a></li>
              </ul>
              <br></br>
              <p>
                <small className="block">&copy; 2021 All Rights Reserved</small> 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div> 

    <div className="gototop js-top">
      <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
    </div>

    </body>
    </html>
  );
};
