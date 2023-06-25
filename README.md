# eth-waterloo

### Willfully

An ERC-4337 Social Recovery wallet that doubles as a will to safely disperse your assets upon death.

### Description

This project is focused on allowing a user to create a "Will" that helps pre-plan and allocate their digital assets. In our case, they can create recipients that will have some set of tokens allocated to them via tokenbound NFTs. By using ERC-6551/Tokenbound, it makes it easier to bundle and allocate assets to the Beneficiary.

In this design, an NFT is used to represent a vault of assets that will eventually be sent to the designated Beneficiaries. These can be used on any chain that an ERC-6551 Registry.sol contract deployed to it. The Testator (owner of the will) should be able to freely transact and move assets around as each of these vaults function as smart contract wallets.

The social recovery is used to confirm death. Guardians must be selected off-chain in a way that minimizes the risk of colluding against the Testator. We have incorporated a social recovery module (an extension to Safe{Core}) which deals with logic for inactivity, delayed recovery, account overtake, etc.

### Deployment Address

``` Polygon mainnet: 0x96D90D184B1E2f50d223E311Bd918f4490ADEA61 ```

### Demo Link

``` https://www.figma.com/proto/mbfxnIacdt7NyrqGe6IKkZ/waterloo?node-id=29-1473&starting-point-node-id=29%3A1473&mode=design ```

### How it's made

Safe{Core} Account Abstraction SDK: We used Safe to deploy Smart Contract Wallets, which allow for extensible smart contract logic and seamless gas-free transactions.

ERC-6551: We used the Tokenbound standard to simplify the workflow of bundling and dispersing assets to Beneficiaries.

Polygon: We took advantage of low fees and quick transactions to support Account Abstractions Wallets with Gasless transactions on Safe

QuickNode: We used the Quicknode RPC in our deployment scripts to interface with Ethereum Goerli testnet.

We used React as our main frontend component for our landing page. With additional uses of ethers.js for associating a metamask wallet connection (but didn't finish so we made a slide show on Figma for the demo).
