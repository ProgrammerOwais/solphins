import Head from 'next/head'
import { useState, useEffect } from 'react';

import { Layout } from 'antd';
import React from 'react';

export const MintView = () => {
  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_whales, set_how_many_whales] = useState(1)

  const [whaleContract, setWhaleContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [whalePrice, setWhalePrice] = useState(0)
  
  async function callContractData(wallet) {
   console.log("Call contract")
  }
  
  async function mintWhale(how_many_whales) {
    if (whaleContract) {
      console.log("Do mint")     
    } else {
      console.log("Wallet not connected")
    }
  };

  return (
    <html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
    <body>
    <div id="page">
      <div id="author" class="bg-section">
        <div class="container">
          <div class="row top-line animate-box">
            <div class="col-md-12 text-center heading">
              <h2>Mint</h2><hr></hr>
            </div>
          </div>
          <div class="row top-line animate-box">
            <div class="col-md-12 text-center heading">
              <h3>COMING SOON</h3>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer" role="contentinfo">
        <div class="container">
          <div class="row copyright">
            <div class="col-md-12 text-center">
              <ul class="social-icons">
                <li><a href="#" target="_blank"><i class="icon-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-discord"></i></a></li>
              </ul>
              <br></br>
              <p>
                <small class="block">&copy; 2021 All Rights Reserved</small> 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div> 

    <div class="gototop js-top">
      <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
    </div>

    </body>
    </html>
  );
};
