import React, { useState } from 'react';
import NFTTile from '../../NFTTile';
import MarketplaceJSON from '../../Marketplace.json'
import axios from "axios";


const Home = () => {

  

  const sampleData = [
   
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/b7/b6/5d/b7b65d8c3ed8b5f45486e0ca3eb3bd1f.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/b7/b6/5d/b7b65d8c3ed8b5f45486e0ca3eb3bd1f.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    }
  ];
  
  const [data, updateData] = useState(sampleData);
  const [dataFetched, updateFetched] = useState(false);

  async function getAllNFTs() {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance

    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );
    //create an NFT Token
    let transaction = await contract.getAllNFTs();

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        let meta = await axios.get(tokenURI);
        meta = meta.data;

        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        };
        return item;
      })
    );
    updateFetched(true);
    updateData(items);
  }

  if (!dataFetched) getAllNFTs();

  return (
      <section id='Home'>        
        <div className='homepage'>
        <div className='content'>            
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })}          
        </div>         
      </div>
      </section>
  )
}

export default Home