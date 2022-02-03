const hre = require("hardhat");

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("AvalancheNFTDrop");
    const contract = await Contract.attach(
      "CONTRACT ADDRESS" // The deployed contract address
    );
  
    const tokenId = await contract.mint("ADDRESS TO MINT TO");
  
    console.log("Minted: ", tokenId);
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