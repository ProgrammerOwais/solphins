import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import { Layout } from 'antd';
import React from 'react';

export const MintView = () => {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
        <div id="about">
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
              <div className="lg:w-1/2 w-3/4">
                <h1 className="text-7xl Poppitandfinchsans text-white ">EVERYONE, meet <br/><span className="text-blau">boring bananas</span></h1>
                <p className="text-2xl text-white my-6  montserrat">Here at <span className="text-5xl Poppitandfinch ">boring</span> <span className="text-blau text-5xl Poppitandfinchsans">Bananas</span> <span className="text-5xl Poppitandfinch">company</span>, we specialize in the world's <span className="text-span-2 font-bold">finest digital bananas</span>.<br />‍<br />We&#x27;ve put together a team spanning 3 continents, to bring you some of the most <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">NUTRITIOUS </span><span className="text-5xl Poppitandfinch ">and</span><span className="text-blau text-5xl Poppitandfinchsans"> DELICIOUS</span> <br/>bananas out there.
                </p>
                <p className="text-2xl text-white my-6  montserrat">
                <strong>LAUNCH DATE:</strong> 29 June 2021. 2pm EST. <br />‍
                <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 8888</strong> Bananas.<br/><strong>PRICE: 0.025 ETH </strong>each.</span></p>
              </div>
              <img className="lg:w-1/2 w-3/4" src="img/whales.gif" width="500px" />
            </div>
          </div>
        </div>    
      </div>
    );
};
