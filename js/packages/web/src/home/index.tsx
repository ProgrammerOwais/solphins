import Head from 'next/head'

import React from 'react';

export const HomeView = () => {
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
              <h2>Meet Solphins!</h2><hr></hr>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="author">
                <div class="author-inner animate-box"><a href="#"><img src="img/whales.gif" width="500px" alt=""></img></a></div>
                <div class="desc animate-box">
                  <h2><span>Solphins</span></h2>
                  <h3>Collection of 10,000 randomly generated dolphin NFTs on the Solana blockchain.</h3>
                  <br></br>
                  <p>Each Solphin has been uniquely generated based off a set of attributes that have a certain rarity associated with them.</p>
                  <br></br>
                  <p>The whales have been implemented using the Metaplex standard and will be available for viewing in Phantom, Sollet, Solflare, and all similar wallets directly after minting.</p>
                  <br></br>
                  <p>
                    <strong>LAUNCH DATE: 3 Sept 2021. 2pm EST.</strong>
                    <br></br>
                    <strong>TOTAL SUPPLY: 10,000 Solphins.</strong>
                    <br></br>
                    <strong>PRICE: 2 SOL each.</strong>
                  </p>
                  <br></br>
                  <p><a href="/#/mint-whales" class="btn btn-primary btn-outline">Go to minting page!</a></p>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

          <div class="row top-line animate-box">
            <div class="col-md-12 heading">
              <h2 class="text-center">Roadmap</h2><hr></hr>
            </div>
          </div>
          <div class="row">
            <section id="education" class="educationdiploma">
              <div class="container">
                <div class="row media">
                  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div class="education-overview">
                        <h3>Phase 1</h3>
                        <p><span class="glyphicon glyphicon-floppy-disk"></span>Mint</p>
                    </div>
                  </div>
                  <div class="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>The minting process is kicked off! Those ready to buy their unique Solphin can go ahead and do this through the minting page.</h3>
                  </div>
                </div>
                <div class="row media">
                  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div class="education-overview">
                        <h3>Phase 2</h3>
                        <p><span class="glyphicon glyphicon-floppy-disk"></span>Traits</p>
                    </div>
                  </div>
                  <div class="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>Every Solphin is unique and awesome in its own way. However, now you can view the rarity based off each Solphin's unique set of attributes</h3>
                  </div>
                </div>
                <div class="row media">
                  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div class="education-overview">
                        <h3>Phase 3</h3>
                        <p><span class="glyphicon glyphicon-floppy-disk"></span>Marketplace</p>
                    </div>
                  </div>
                  <div class="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>Those that missed out on minting their own Solphin can now buy them on a Metaplex compatible marketplace.</h3>
                  </div>
                </div>
                <div class="row media">
                  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div class="education-overview">
                        <h3>Phase 4</h3>
                        <p><span class="glyphicon glyphicon-floppy-disk"></span>Contests and Prizes.</p>
                    </div>
                  </div>
                  <div class="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>For your support in our launch, we want to return the favor by gifting the community with Solphins. Through various contests, people will be able to add to their awesome collection.</h3>
                  </div>
                </div>
              </div>
            </section>
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
