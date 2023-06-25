import React, { useState, useEffect } from "react";
import AssetSelector from "./AssetSelector";
const ethers = require("ethers");

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setProvider(new ethers.providers.Web3Provider(window.ethereum));
      } catch (error) {
        console.error(error);
        alert("Connection to Metamask failed");
      }
    } else {
      alert("Please install Metamask");
    }
  };

  useEffect(() => {
    const button = document.querySelector(
      ".button.button-primary.button-block"
    );

    if (button) {
      button.addEventListener("click", connectWallet);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", connectWallet);
      }
    };
  }, []);

  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && <AssetSelector account={account} provider={provider} />}
    </div>
  );
}

export default App;
