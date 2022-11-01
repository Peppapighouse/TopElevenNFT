<<<<<<< HEAD
# TopElevenNFT
=======
# TOKEN ERC20 SIMPLE

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.
>>>>>>> a028390... Docs

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
##### build
npm install

##### compile
npx hardhat compile

<<<<<<< HEAD
##### deploy testnet
npx hardhat run scripts/deploy.js --network testnet

##### deploy bsc
npx hardhat run scripts/deploy.js --network bsc
=======
##### deploy
npx hardhat run scripts/deploy.js --network testnet

##### verify
npx hardhat verify 0xd80677250a05b80Ae47F2518907BFa85103b456C --network testnet --contract contracts/SimpleToken.sol:SimpleToken "SimpleToken" "STK" "1000000000000000000000000000"
>>>>>>> a028390... Docs
