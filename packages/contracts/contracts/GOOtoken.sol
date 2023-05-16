// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import "@openzeppelin/contracts/access/AccessControl.sol";

contract GOOtoken is ERC20, AccessControl {
    
    uint256 public startTime; 
    uint256 public endTime; 
    uint256 private claimAmount = 100000;
    uint256 public tokenPrice = 500000000 wei; 
    uint256 public airdropPool = 85818234000;
    uint256 public presalePool = 57212156000;
    address private owner;

    event AirdropStart(uint start, uint end, uint tokens);
    event AirdropEnded(uint end, uint tokensLeft);
    event PresaleStart(uint start, uint end, uint tokens);
    event PresaleEnded(uint end, uint tokensLeft);

    mapping(address => bool) private claimed;
    mapping(address => uint) public bought;
    mapping (address => bool) public blacklisted;

    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    modifier onlyOwner() {
        require(msg.sender == owner, "ONLYOWNER");
        _;
    }

    modifier endTimed() {
        require(startTime <= block.timestamp && block.timestamp <= endTime, "TIMEISOVER");
        _;
    }

    modifier notBanned() {
        require(!blacklisted[msg.sender], "BLOCKED");
        _;
    }

    modifier noPool(address to) {
        if(msg.sender != owner) {
            if(block.timestamp <= endTime){
                require(to.code.length <=0, "OWNERCAN");
            }
            _;
        }
    }

    constructor() ERC20("GOO", "GO") {
        owner = msg.sender;

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        _mint(address(this), 143030390000);
    }

    function claim(address referral) public notBanned endTimed returns (bool success){
        require(airdropPool >= claimAmount, "NOTOKENS");
        require(!claimed[msg.sender], 'CLAIMONCE');

        if(msg.sender != referral && balanceOf(referral) != 0 && referral != address(0)){
            _transfer(address(this), referral, claimAmount);

            airdropPool = airdropPool - claimAmount;
        } 
        _transfer(address(this), msg.sender, claimAmount);

        airdropPool = airdropPool - claimAmount;

        claimed[msg.sender] = true;
        return true;
        
      }
      
    function tokenSale(address referral) public payable notBanned endTimed returns (uint){
        require(bought[msg.sender] <= 1 ether, "MAXLIMIT");
        require(msg.value >= 0.005 ether, "MINPRICE");
        require(bought[msg.sender] + msg.value <= 1 ether, "UPPERBOUND");

        uint256 _eth = msg.value;
        uint256 tokens;
        uint256 tokensRef;

        tokens = _eth / tokenPrice;
        tokensRef = (_eth / tokenPrice) / 100 * 10;
        
        require(presalePool >= tokens + tokensRef, "NOTOKENS");
        
        if(msg.sender != referral && balanceOf(referral) != 0 && referral != address(0)){
            presalePool = presalePool - tokensRef;

            _transfer(address(this), referral, tokensRef);
        }

        presalePool = presalePool - tokens;
        _transfer(address(this), msg.sender, tokens);

        bought[msg.sender] += msg.value;

        return tokens;
    }

    function startAll(uint256 _startTime, uint256 _endTime) external onlyOwner {
        startTime = _startTime;
        endTime = _endTime;

        emit AirdropStart(startTime, endTime, airdropPool);
        emit PresaleStart(startTime, endTime, presalePool);
    }

    function checkBlockTimestamp() external view returns(uint) {
        return block.timestamp;
    }

    function viewAirdrop() public view returns(uint, uint, uint){
        return(startTime, endTime, airdropPool);
    }

    function viewSale() public view returns(uint, uint, uint){
        return(startTime, endTime, presalePool);
    }


    function blacklist(address _user, bool _banned) external onlyOwner{
        blacklisted[_user] = _banned;
    }



    function withdrawAll() external onlyOwner {
        require(endTime <= block.timestamp, "WAITEND");

        (bool success,) = msg.sender.call{value: address(this).balance}("");
        require(success, "CANTWITHDRAW");
    }

    function mint(uint256 _amount) external onlyOwner {
        _mint(msg.sender, _amount);
    }

    function burnAll() public {
        require(hasRole(BURNER_ROLE, msg.sender), "CANTBURN");

        _burn(address(this), balanceOf(address(this)));

        endTime = block.timestamp;
        
        emit AirdropEnded(block.timestamp, airdropPool);
        emit PresaleEnded(block.timestamp, presalePool);
    }   

    function setNewOwner(address _owner) external onlyOwner {
        owner = _owner;
    }

    function transfer(address to, uint256 _amount) public virtual override notBanned noPool(to) returns (bool) {
        require(balanceOf(msg.sender) >= _amount, "SMALLBALANCE");
        _transfer(msg.sender, to, _amount);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 _amount
    ) public virtual override noPool(to) returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, _amount);
        _transfer(from, to, _amount);
        return true;
    }

    receive() external payable{}
}   



