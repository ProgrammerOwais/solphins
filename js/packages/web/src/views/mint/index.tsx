import Head from 'next/head'
import 'tailwindcss/tailwind.css'
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
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const bananaContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setBananaContract(bananaContract)

    const salebool = await bananaContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await bananaContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const bananaPrice = await bananaContract.methods.bananaPrice().call() 
    setBananaPrice(bananaPrice)
   
  }
  
  async function mintWhale(how_many_whales) {
    if (whaleContract) {
 
      const price = Number(whalePrice)  * how_many_whales 

      const gasAmount = await whaleContract.methods.mintBoringBanana(how_many_whales).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      whaleContract.methods
            .mintBoringBanana(how_many_whales)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="md:w-2/3 w-4/5">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-col items-center">
              <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">TOTAL WHALES MINTED:  <span className="text-blau text-6xl"> {<>{totalSupply}</> } / 500</span></span>
              
          </div> 
        </div>
      </div>  
    </div>  
    );
};
