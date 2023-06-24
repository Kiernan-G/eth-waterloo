import React, { useState } from 'react';
import AssetSelector from './components/AssetSelector';
const ethers = require("ethers");

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
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

  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && <AssetSelector account={account} provider={provider} />}
    </div>
  );
}

export default App;
