// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const SimpleToken = await hre.ethers.getContractFactory("SimpleToken");

  const simpleToken = await SimpleToken.deploy("TopEleven", "TOPE", "1000000000000000000000000000");
  await simpleToken.deployed();

  console.log(
    `Smart contract deployed to ${simpleToken.address}`
  );

  //npx hardhat verify 0xd80677250a05b80Ae47F2518907BFa85103b456C --network testnet --contract contracts/SimpleToken.sol:SimpleToken "SimpleToken" "STK" "1000000000000000000000000000"
  // await hre.run("verify:verify", {
  //   address: simpleToken.address,
  //   constructorArguments: [
  //     "TopEleven", "TOPE",
  //     "1000000000000000000000000000"
  //   ],
  //   contract: "contracts/SimpleToken.sol:SimpleToken"
  // })


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


