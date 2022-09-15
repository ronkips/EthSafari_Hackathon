import React from "react";
import "./createnft.css";
//import marketplaceJSON from "../Marketplace.json"
//import axios from "axios";
//import { useState } from "react";

const CreateNft = () => {
  return (
    <section id="createnft">
      <div className="createnftpage">
        <div className="createnftpage_content">
          <div className="name">Name</div>
          <input
            type="text"
            className="inputname"
            placeholder="Nft Name"
          ></input>
          <div className="description">Description</div>
          <textarea
            className="textarea"
            placeholder="Nft description"
          ></textarea>
          <div className="price">Price</div>
          <input
            type="text"
            placeholder="min 0.01 ETH"
            className="inputprice"
          ></input>
          {/* <label className="filetx">Upload image</label> */}
          <button className="uploadbtn">upload</button>
        </div>
      </div>
    </section>
  );
};

export default CreateNft;
//0x3513d67bB829e1E05BE9A45F547BDd8c68458aC7
