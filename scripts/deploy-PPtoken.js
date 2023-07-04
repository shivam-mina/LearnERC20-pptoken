const { getNamedAccounts, deployments, network } = require("hardhat")
const {
  intialSupply,
  developmentChains,
} = require("../helper-hardhat-config.js")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const tokenContract = await deploy("PPtoken", {
    from: deployer,
    args: [intialSupply],
    log: true,
  })

  console.log(`PPtoken deployed to ${tokenContract.address}`)
}
