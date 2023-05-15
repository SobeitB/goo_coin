// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract GTEsttoken is ERC20 {
    uint256 public startTime; 
    uint256 public endTime; 
    uint256 public amount = 100000; 
    uint256 public tokenPrice = 500000000 wei; 
    uint256 public airdropPool = 85818234000;
    uint256 public presalePool = 57212156000;
    address private owner1;
    // uint256 private allTokens = 143030390000;


    event AirdropStart(uint start, uint end, uint tokens);
    event AirdropEnded(uint end, uint tokensLeft);
    event PresaleStart(uint start, uint end, uint tokens);
    event PresaleEnded(uint end, uint tokensLeft);

    mapping(address => bool) private claimed;
    mapping(address => uint) public bought;
    mapping (address => bool) public blacklisted;

    modifier onlyOwner() {
        require(msg.sender == owner1, "ONLYOWNER");
        _;
    }

    modifier onlyOwnerCreatePool(address to) {
        if(msg.sender != owner1) {
            require(to.code.length <= 0, "ONLYOWNERCREATEPOOL");
        }
        _;
    }

    constructor() ERC20("GOO", "GO") {
        owner1 = msg.sender;
        
        _mint(address(this), 143030390000);

        startTime = block.timestamp;
        endTime = block.timestamp + 1 days;

        emit AirdropStart(startTime, endTime, airdropPool);
        emit PresaleStart(startTime, endTime, presalePool);
    }

    function claim(address referral) public returns (bool success){
        require(airdropPool >= amount, "NOTOKENS");
        require(startTime <= block.timestamp && block.timestamp <= endTime, "TIMEISOVER");
        require(!claimed[msg.sender], 'CLAIMONCE');

        if(msg.sender != referral && balanceOf(referral) != 0 && referral != address(0)){
            _transfer(address(this), referral, amount);

            airdropPool = airdropPool - amount;
        } 
        _transfer(address(this), msg.sender, amount);

        airdropPool = airdropPool - amount;

        claimed[msg.sender] = true;
        return true;
        
      }
      
    function tokenSale(address referral) public payable returns (uint){
        require(bought[msg.sender] <= 1 ether, "MAXLIMIT");
        require(msg.value >= 0.005 ether, "MINPRICE");
        require(startTime <= block.timestamp && block.timestamp <= endTime, "TIMEISOVER");
        require(bought[msg.sender] + msg.value <= 1 ether, "UPPERBOUND");

        uint256 _eth = msg.value;
        uint256 tokens;
        uint256 tokensRef;

        tokens = _eth / tokenPrice;
        tokensRef = (_eth / tokenPrice) / 100 * 10;
        
        require(presalePool >= tokens + tokensRef);
        
        if(msg.sender != referral && balanceOf(referral) != 0 && referral != address(0)){
            presalePool = presalePool - tokensRef;

            _transfer(address(this), referral, tokensRef);
        }

        presalePool = presalePool - tokens;
        _transfer(address(this), msg.sender, tokens);

        bought[msg.sender] += msg.value;

        return tokens;
    }

    function viewAirdrop() public view returns(uint, uint, uint){
        return(startTime, endTime, airdropPool);
    }

    function viewSale() public view returns(uint, uint, uint){
        return(startTime, endTime, presalePool);
    }
    
    function burnAll(bytes memory _sign) public {
        address signer = recoverSigner(_sign);
        require(signer == owner1, "INVALSIG");

        uint256 balance = balanceOf(address(this));

        _burn(address(this), balance);

        emit AirdropEnded(block.timestamp, airdropPool);
        emit PresaleEnded(block.timestamp, presalePool);
    }

    function recoverSigner(bytes memory _sign) public pure returns (address) {
        bytes32 messageHash = keccak256(bytes("burnAll"));
        bytes32 prefixedHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash));

        (bytes32 r, bytes32 s, uint8 v) = abi.decode(_sign, (bytes32, bytes32, uint8));

        return ecrecover(prefixedHash, v, r, s);
    }

    function blacklist(address _user, bool _banned) external onlyOwner{
        blacklisted[_user] = _banned;
    }

    function transfer(address to, uint256 amount) public virtual override onlyOwnerCreatePool(to) returns (bool) {
        require(!blacklisted[msg.sender], "UABL");

        _transfer(msg.sender, to, amount);
        return true;
    }

    function withdrawAll() external onlyOwner {
        require(endTime <= block.timestamp);

        (bool success,) = msg.sender.call{value: address(this).balance}("");
    }

    function mint(uint256 amount)external onlyOwner {
        _mint(msg.sender, amount);
    }

}


// import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';
// import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';
// import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';
// import '@uniswap/v2-periphery/contracts/interfaces/IWETH.sol';
// import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

// contract GOOPair {
//     address public tokenAddress;
//     address public usdtAddress;
//     address public uniswapRouter;
//     address public uniswapFactory;
//     address public wethAddress;
//     uint256 public deadline;
    
//     constructor(address _tokenAddress, address _usdtAddress, address _uniswapRouter, uint256 _deadline) {
//         tokenAddress = _tokenAddress;
//         usdtAddress = _usdtAddress;
//         uniswapRouter = _uniswapRouter;
//         deadline = _deadline;
//         uniswapFactory = IUniswapV2Router02(uniswapRouter).factory();
//         wethAddress = IUniswapV2Router02(uniswapRouter).WETH();
//     }

//     function addLiquidity(uint256 amountTokenDesired, uint256 amountUSDTDesired, uint256 amountTokenMin, uint256 amountUSDTMin) external {
//         require(IERC20(tokenAddress).approve(uniswapRouter, amountTokenDesired), 'approve failed');
//         require(IERC20(usdtAddress).approve(uniswapRouter, amountUSDTDesired), 'approve failed');
//         (uint256 amountToken, uint256 amountUSDT, uint256 liquidity) = IUniswapV2Router02(uniswapRouter).addLiquidity(
//             tokenAddress,
//             usdtAddress,
//             amountTokenDesired,
//             amountUSDTDesired,
//             amountTokenMin,
//             amountUSDTMin,
//             address(this),
//             deadline
//         );
//         require(IERC20(tokenAddress).transferFrom(msg.sender, address(this), amountToken), 'transferFrom failed');
//         require(IERC20(usdtAddress).transferFrom(msg.sender, address(this), amountUSDT), 'transferFrom failed');
//         IUniswapV2Pair pair = IUniswapV2Pair(IUniswapV2Factory(uniswapFactory).getPair(tokenAddress, usdtAddress));
//         require(IERC20(tokenAddress).transfer(address(pair), amountToken), 'transfer failed');
//         require(IERC20(usdtAddress).transfer(address(pair), amountUSDT), 'transfer failed');
//         pair.mint(address(this));
//     }
//     function swapTokenForUSDT(uint256 amountIn, uint256 amountOutMin) external {
//         address[] memory path = new address[](2);
//         path[0] = tokenAddress;
//         path[1] = usdtAddress;
//         require(IERC20(tokenAddress).approve(uniswapRouter, amountIn), 'approve failed');
//         IUniswapV2Router02(uniswapRouter).swapExactTokensForTokens(
//             amountIn,
//             amountOutMin,
//             path,
//             msg.sender,
//             deadline
//         );
//     }

//     function swapUSDTForToken(uint256 amountIn, uint256 amountOutMin) external {
//         address[] memory path = new address[](2);
//         path[0] = usdtAddress;
//         path[1] = tokenAddress;
//         require(IERC20(usdtAddress).approve(uniswapRouter, amountIn), 'approve failed');
//         IUniswapV2Router02(uniswapRouter).swapExactTokensForTokens(
//             amountIn,
//             amountOutMin,
//             path,
//             msg.sender,
//             deadline
//         );
//     }
// }

// import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
// import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
// import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
// import "@uniswap/v2-periphery/contracts/interfaces/IWETH.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// contract UniswapV2PairCreator {
//     IUniswapV2Factory public uniswapV2Factory;
//     IUniswapV2Router02 public uniswapV2Router;
//     constructor(address _uniswapV2Factory, address _uniswapV2Router) public {
//         uniswapV2Factory = IUniswapV2Factory(_uniswapV2Factory);
//         uniswapV2Router = IUniswapV2Router02(_uniswapV2Router);

//     }
//     function createPair(address token1, address token2) external {
//         // Step 1: Create the Uniswap V2 pair
//         address pair = uniswapV2Factory.createPair(token1, token2);
//         // Step 2: Add liquidity to the pair
//         uint256 amountToken1 = 10000; // 1 token1
//         uint256 amountToken2 = 10000; // 1 token2
//         IERC20(token1).approve(address(uniswapV2Router), amountToken1);
//         IERC20(token2).approve(address(uniswapV2Router), amountToken2);
//         (uint256 amountA, uint256 amountB, uint256 liquidity) = uniswapV2Router.addLiquidity(
//             token1,
//             token2,
//             amountToken1,
//             amountToken2,
//             0,
//             0,
//             address(this),
//             block.timestamp
//         );
//         // Step 3: Transfer the LP tokens to the sender
//         IUniswapV2Pair(pair).transfer(msg.sender, liquidity);
//     }
// }