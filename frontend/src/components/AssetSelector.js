import React, { useEffect, useState } from 'react';
const ethers = require("ethers");

function AssetSelector({ account, provider }) {
  const [assets, setAssets] = useState([]);

  // Fetch the assets once the provider and account are set
  useEffect(() => {
    if (provider && account) {
      const fetchAssets = async () => {
        // Fetch ETH balance
        const ethBalance = await provider.getBalance(account);
        setAssets([{name: 'ETH', balance: ethers.utils.formatEther(ethBalance)}]);

        // TODO: Fetch ERC20 and other token balances here
      };

      fetchAssets();
    }
  }, [provider, account]);

  // Handle the selection of assets
  const handleAssetSelection = (event) => {
    const { name, checked } = event.target;
    setAssets(assets.map(asset =>
      asset.name === name ? { ...asset, selected: checked } : asset
    ));
  };

  return (
    <div>
      <h1>Select Assets to Include in the Will</h1>
      {assets.map(asset => (
        <div key={asset.name}>
          <label>
            <input
              type="checkbox"
              name={asset.name}
              checked={asset.selected || false}
              onChange={handleAssetSelection}
            />
            {asset.name} ({asset.balance})
          </label>
        </div>
      ))}
    </div>
  );
}

export default AssetSelector;
