import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import { Layout } from 'antd';
import React from 'react';

export const HomeView = () => {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Wonky Whales</title>
        <link rel="icon" href="/favicon-32x32.jpg" />

        <meta property="og:title" content="Wonky Whales" key="ogtitle" />
        <meta property="og:description" content="Collection of 500 randomy generated whale NFTs built on the Solana blockchain" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://www.wonkywhales.com" key="ogurl"/>
        <meta property="og:image" content="https://www.wonkywhales.com/img/whales.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://www.wonkywhales.com" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
        <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
        <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
        <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
        <meta name="twitter:image" content="https://boringbananas.co/img/whales.gif" key="twimage" />
      </Head>

      <div id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl Poppitandfinchsans text-white "><span className="text-blau">Wonky Whales</span></h1>
              <p className="text-2xl text-white my-6  montserrat">Collection of <strong>500</strong> randomly generated whale NFTs on the Solana blockchain.</p>
              <p className="text-2xl text-white my-6  montserrat">Each whale has been uniquely generated based off a set of attributes that have a certain rarity associated with them.</p>
              <p className="text-2xl text-white my-6  montserrat">The whales have been implemented using the Metaplex standard and will be available for viewing in Phantom, Sollet, Solflare, and all similar wallets directly after minting.</p>
              <p className="text-2xl text-white my-6  montserrat">
              <strong>LAUNCH DATE:</strong> 3 Sept 2021. 2pm EST. <br />‍
              <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 500</strong> Whales.<br/><strong>PRICE: 2 SOL </strong>each.</span></p>
            </div>
            <img className="lg:w-1/2 w-3/4" src="img/whales.gif" width="500px" />
          </div>
          <div className="flex flex-col items-center">
          <a href="/#/mint-whales" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
          </div> 
        </div>
      </div>    
                
      <div id="gallery" className="border-b-2">
          <h2 className="text-blau Poppitandfinchsans text-7xl text-center">GALLERY</h2>
        <div className="flex flex-wrap  items-center mx-6   py-6 ">
          <div className="md:w-1/2">
            <div className=" border-blue-300 p-2"><img src="img/gallery1.jpeg" alt="" width="600px" className="feature-image"/></div>
          </div>
          <div className="md:w-1/2 flex flex-wrap">
            <div className=" p-2 w-1/2"><img src="img/gallery2.jpeg" alt="" width="400px" className="feature-image"/></div>
            <div className=" p-2 w-1/2"><img src="img/gallery3.jpeg" alt="" width="400px" className="feature-image"/></div>
            <div className=" p-2 w-1/2"><img src="img/gallery4.jpeg" alt="" width="400px" className="feature-image"/></div>
            <div className=" p-2 w-1/2"><img src="img/gallery5.jpeg" alt="" width="400px" className="feature-image"/></div>
          </div>
        </div>
      </div>

      <div id="roadmap">
        <img src="/img/Roadmap.png"/>   
        <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
        <ul className="">
          <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 4 x 10 ETH donations: </span> The first of these will be made to <a target="_blank" href="https://girlswhocode.com/" className="underline text-black font-bold">Girls Who Code</a>, working to empower young women and <span className="font-bold"> close the gender gap </span> in technology. We know women are unrepresented in the NFT space - lets help to fix this! The remaining donations will be made via community vote using <a target="_blank" href="https://thegivingblock.com/" className="underline text-black font-bold">the Giving Block</a>.</li>
          <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 20 ETH to Community Wallet: </span> Directed towards supporting creators that want to make a positive contribution to the NFT space.</li>
          <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Secondary sales: 5% royalty </span> (2.5% donation, 2.5% to the team). Secondary sales are directed towards charities voted on by the community monthly.</li>

        </ul>
        <p className="text-xl text-white my-6  montserrat"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the NFT community </span> through our <span className="font-bold underline"> PROJECT IN PROGRESS </span> series, to help budding creators to along their journey. 
        </p>
        <p className="text-xl text-white my-6  montserrat"> All fully annotated source code for image generation and the smart contract will be made available after launch as a community resource. 
        </p>
      </div>
              
      <div id="faq" className="mx-12 my-16 ">
        <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">FAQ</h2>
        <div className="flex justify-around flex-wrap">

        </div>
      </div>   
    </div>  
  );
};
