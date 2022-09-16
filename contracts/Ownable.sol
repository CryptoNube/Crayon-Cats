// SPDX-License-Identifier: MIT
pragma solidity  >=0.4.22 <0.9.0;

contract Ownable {

    address public owner = msg.sender;
 
    modifier onlyOwner() {
        require (msg.sender == owner, "You are not the owner");
        _;
    }
}