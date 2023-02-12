const hre = require("hardhat");

const CONTRACT_ADDR = "0x1E289A6c32D593BCF7fdECc7474A83BFF378E668";

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);
  await contract.changeX(42);

  console.log(`integer changed`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
