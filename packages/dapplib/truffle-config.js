require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad include process bubble sunset'; 
let testAccounts = [
"0x0a0623d200d48f02169dab3db2ec097bf02d21644632ae6df216ebc0fe4d3274",
"0x893b59322cc93f94d58b2d172dd1ed6fb1f075750b809fcf5f90d60299ac33cc",
"0x60259d92e641fdedfc079405c21c61de6bd5df77e6668182ba5bb79c8a048112",
"0xf9d472b1811828bd7ac4955b97a98fbc18376ade4d27c7c77ff92035f3a38449",
"0x17d585b8e126a6d374d3fa976af736c04493f91db9409e267e1f74932c265f55",
"0x9ade7da8d7e824ad7e1edab731b44fb5e1456147b142a3258c79cc5e6d939dce",
"0x3645fe5ceeda5adcaf728de769080f8f10d29bddeddfad192d40313fe0a56dd2",
"0x408cdce1656455c50c8d8fb966bbe90f266b60cd1844727526d6f266dc98ed3b",
"0x8a7d14c292048b39b130f4e7b264cc7952da58ce1f9a24afc8891f7b64f782ca",
"0x286c386cda7105744679c8553a8840f8b9bbaabd65cbdc5e9473306b0873f1fe"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
