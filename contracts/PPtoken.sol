// SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PPtoken is ERC20 {
    constructor(uint256 supply) ERC20("PPtoken", "PP") {
        uint256 initSupply = supply * 10 ** 18;
        _mint(msg.sender, initSupply);
    }
}
