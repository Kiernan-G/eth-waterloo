import { ethers } from 'ethers'
import Safe, { EthersAdapter, SafeFactory } from '@safe-global/protocol-kit'

const provider = new ethers.JsonRpcProvider('https://quick-light-cloud.ethereum-goerli.discover.quiknode.pro/ba0ead75f79e33ab36f2ea193e3f6756eb2cccea/'); //1
const signerWallet = new ethers.Wallet('<owner private key>', provider); //2
const ethAdapter = new EthersAdapter({ethers, signerOrProvider: signerWallet}); //3

const safeFactory = await SafeFactory.create({ ethAdapter }); //4
const safeSdk: Safe = await safeFactory.deploySafe({ safeAccountConfig: { threshold: 2, owners: [
    '0xd40320E3DBfA18f83f775b475EA88a2f6C680A8E', 
    '0x2814176b721c5234CFdc5079063a4Cdb620F9899', 
    '0x3B17715E70D86b7c33b25ec0663c84c451F5a51d'] }}); //5