import React, { useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
import { providerOptions } from "./providerOptions";
import "./nav.css"; 

const web3Modal = new Web3Modal({
    cacheProvider: true,
  providerOptions // required
});
const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(''); 
   
    
    const [account, setAccount] = useState();
    const [network, setNetwork] = useState();
    
    const connectWallet = async () => {
        try {
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts(); 
           
            
            setAccount(String(accounts[0]).substring(0, 4) + "..." + String(accounts[0]).substring(38));
            setNetwork(network);

            if (accounts && network !== 5) { 
                await library.provider.request({
                 method: "wallet_switchEthereumChain",
                     params: [{ chainId: toHex(5) }]
                 });
            }           

        } catch (error) {
            console.log("connection failed!?", error)
        }
    }
    useEffect(() => {
        if (web3Modal.cachedProvider) {
            connectWallet();
        }
    });
    
  return (
      <nav>
          <div className='coinbaselogo'>CoinBase NFT MarketPlace</div>
          <input type="text" placeholder="search Nfts from collection" className="searchbar"></input>
         

         <button className='collectionBtn'><a href='/Home' onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}>Collections</a></button>
         <button className='createNftsBtn'><a href='/Home#createnft' onClick={() => setActiveNav('#createnft')} className={activeNav === '#createnft' ? 'active' : ''}>Create Your NFTs</a></button>

          {account? (<button className='connectWalletBtn'>connected:{ account}</button>):(<button className='connectWalletBtn' onClick={connectWallet}>connect wallet</button>)}
      </nav>
  )
}

export default Navbar


