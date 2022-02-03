const hre = require("hardhat");
const BASE_URI = "ipfs://CID_HERE";
const TOKEN_NAME = "Pinnies";
const TOKEN_SYMBOL = "PIN";

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("NFT");
    const contract = await Contract.deploy(BASE_URI, TOKEN_NAME, TOKEN_SYMBOL);
  
    await contract.deployed();
  
    console.log(`contract deployed at ${contract.address}`); 
  } catch (error) {
    console.log(error);
  }  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });