//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    string public BASE_URI;
    uint256 public MAX_SUPPLY = 6;

    constructor(
        string memory baseURI,
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        BASE_URI = baseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return BASE_URI;
    }

    function mint(address addr)
        public
        returns (uint256)
    {
        uint256 supply = totalSupply();
        require(supply <= MAX_SUPPLY, "Would exceed max supply");
        uint256 tokenId = supply + 1;       
        _safeMint(addr, tokenId);
    
        return tokenId;
    }
}
