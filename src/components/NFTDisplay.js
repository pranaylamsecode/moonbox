import React from 'react';
import './NFTDisplay.css';

function NFTDisplay() {
  return (
    <div className="nft-display">
      <div className="nft-info">
        <h2>Buy MoonBoxes and expand your NFT collection</h2>
        <p>Buying MoonBoxes is a unique way to acquire NFTs and build your collection...</p>
        <button className="buy-button">Buy A MoonBox</button>
      </div>
      <div className="nft-image-container">
        <img src="path_to_your_nft_image.png" alt="NFT Art" className="nft-image" />
      </div>
    </div>
  );
}

export default NFTDisplay;
