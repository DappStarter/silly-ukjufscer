require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture struggle remember prefer proud inflict brass frame genuine'; 
let testAccounts = [
"0xd28b52fefaecc6c9ca9c7880e7deec3632443b6f6ec2ab18babce2d06da2c5f8",
"0x0abb50320614eb37c23beb81f0a902976ff9c954be10963d51ca727965782465",
"0x0949461e3653ac7578e4ba8bce2907f97dcd7897380ca280363dbc67c47c3e39",
"0xde03b5b8fb4fa50172e7fd528fa2d39558145af1ee04a2fa64b2bc0e774d00e7",
"0xd5c77750ddb6421ca4e43cc26223a5dbd838f3fe2269c432d2aa9b2f785f27ca",
"0x0956ce24baa388c8e251760cbef4f475ac0248f78f65c13372b636bfb1b8c2c0",
"0xe64b5339d454a5cfabe9e9e2b23ac621f89bf3aef82a9211b78ebc2c594e4e1b",
"0xabdcbb729ee19790a124c23422c2bf3e78579e2f953c959747809dc4fcb5d359",
"0xeb67efa2ef9064faa1c207beab25c25be83bbd0d4729dfe8cc61e7b7ef9b8943",
"0xa01c284a5ed6110b585d01217386dcf5f7d8d2561ed9c607b7059dfc2cd0c326"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
