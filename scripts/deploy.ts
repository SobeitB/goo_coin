import { ethers } from "hardhat"
import hre from "hardhat"

async function main() {
    const initialAmount = ethers.utils.parseEther("0.001")

    const Coin = await ethers.getContractFactory("CoinFlip")
    const coinflip = await Coin.deploy({value: initialAmount})

    await coinflip.deployed()
    console.log(`Coinflip deployed at address: ${coinflip.address}`)

    await hre.run("verify:verify", {
        address: coinflip.address,
        constructorArguments: []
    })
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1
})