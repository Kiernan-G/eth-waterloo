"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var protocol_kit_1 = require("@safe-global/protocol-kit");
var provider = new ethers_1.ethers.JsonRpcProvider('https://quick-light-cloud.ethereum-goerli.discover.quiknode.pro/ba0ead75f79e33ab36f2ea193e3f6756eb2cccea/'); //1
var signerWallet = new ethers_1.ethers.Wallet('<owner private key>', provider); //2
var ethAdapter = new protocol_kit_1.EthersAdapter({ ethers: ethers_1.ethers, signerOrProvider: signerWallet }); //3
var safeFactory = await protocol_kit_1.SafeFactory.create({ ethAdapter: ethAdapter }); //4
var safeSdk = await safeFactory.deploySafe({ safeAccountConfig: { threshold: 2, owners: [
            '0xd40320E3DBfA18f83f775b475EA88a2f6C680A8E',
            '0x2814176b721c5234CFdc5079063a4Cdb620F9899',
            '0x3B17715E70D86b7c33b25ec0663c84c451F5a51d'
        ] } }); //5
