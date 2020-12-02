// LICENSE
pragma solidity 0.7.3;

import "hardhat/console.sol";

contract YourContract {

  event SetPurpose(address sender, string purpose);

  string public purpose = "Programming Unstoppable Money";

  constructor () public {
    // what should we do on deploy?
  }

  function setPurpose(string memory newPurpose) public {
    purpose = newPurpose;
    console.log(msg.sender, "set purpose to", purpose);
    emit SetPurpose(msg.sender, purpose);
  }

}