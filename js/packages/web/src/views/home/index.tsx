
import React from 'react';

export const HomeView = () => {
  return (
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
    <body>
    <div id="page">
      <div id="author" className="bg-section">
        <div className="container">
          <div className="row top-line animate-box">
            <div className="col-md-12 text-center heading">
              <h2>Meet Solphins!</h2><hr></hr>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="author">
                <div className="author-inner animate-box"><a href="#"><img src="img/solphin.gif" width="450px" alt=""></img></a></div>
                <div className="desc animate-box">
                  <h2><span>Solphins</span></h2>
                  <h3>Collection of 10,000 randomly generated dolphin NFTs on the Solana blockchain.</h3>
                  <br></br>
                  <p>Each Solphin has been uniquely generated based off a set of attributes that have a certain rarity associated with them.</p>
                  <br></br>
                  <p>The Solphins have been implemented using the Metaplex standard and will be available for viewing in Phantom, Sollet, Solflare, and all similar wallets directly after minting.</p>
                  <br></br>
                  <p>
                    <strong>LAUNCH DATE: 7 Sept 2021. 2pm EST.</strong>
                    <br></br>
                    <strong>TOTAL SUPPLY: 10,000 Solphins.</strong>
                    <br></br>
                    <strong>PRICE: 3 SOL each.</strong>
                  </p>
                  <br></br>
                  <p><a href="/#/mint-solphins" className="btn btn-primary btn-outline">Go to minting page!</a></p>
                </div>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="row top-line animate-box">
            <div className="col-md-12 heading">
              <h2 className="text-center">Roadmap</h2><hr></hr>
            </div>
          </div>
          <div className="row">
            <section id="education" className="educationdiploma">
              <div className="container">
                <div className="row media">
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="education-overview">
                        <h3>Phase 1</h3>
                        <p><span className="glyphicon glyphicon-floppy-disk"></span>Mint</p>
                    </div>
                  </div>
                  <div className="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>The minting process is kicked off! Those ready to buy their unique Solphin can go ahead and do this through the minting page.</h3>
                  </div>
                </div>
                <div className="row media">
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="education-overview">
                        <h3>Phase 2</h3>
                        <p><span className="glyphicon glyphicon-floppy-disk"></span>Traits</p>
                    </div>
                  </div>
                  <div className="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>Every Solphin is unique and awesome in its own way. However, now you can view the rarity based off each Solphin's unique set of attributes</h3>
                  </div>
                </div>
                <div className="row media">
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="education-overview">
                        <h3>Phase 3</h3>
                        <p><span className="glyphicon glyphicon-floppy-disk"></span>Marketplace</p>
                    </div>
                  </div>
                  <div className="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>Those that missed out on minting their own Solphin can now buy them on a Metaplex compatible marketplace.</h3>
                  </div>
                </div>
                <div className="row media">
                  <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="education-overview">
                        <h3>Phase 4</h3>
                        <p><span className="glyphicon glyphicon-floppy-disk"></span>Contests and Prizes.</p>
                    </div>
                  </div>
                  <div className="education-description col-xs-12 col-sm-9 col-md-9 col-lg-9">
                    <h3>For your support in our launch, we want to return the favor by gifting the community with Solphins. Through various contests, people will be able to add to their awesome collection.</h3>
                  </div>
                </div>
              </div>
            </section>
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
