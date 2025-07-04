import type { ChainMetadata } from "@avail-project/nexus";

export const SUPPORTED_TOKENS = ["ETH", "USDC", "USDT"] as const;
export type SupportedToken = (typeof SUPPORTED_TOKENS)[number];

export const SUPPORTED_CHAINS: ChainMetadata[] = [
  {
    id: 11155420,
    name: "Optimism Sepolia",
    shortName: "OP_SEPOLIA",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    logo: "",
    rpcUrls: [],
    blockExplorerUrls: [],
  },
  {
    id: 80002,
    name: "Polygon Amoy",
    shortName: "POLYGON_AMOY",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    logo: "",
    rpcUrls: [],
    blockExplorerUrls: [],
  },
  {
    id: 421614,
    name: "Arbitrum Sepolia",
    shortName: "ARB_SEPOLIA",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    logo: "",
    rpcUrls: [],
    blockExplorerUrls: [],
  },
  {
    id: 84532,
    name: "Base Sepolia",
    shortName: "BASE_SEPOLIA",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    logo: "",
    rpcUrls: [],
    blockExplorerUrls: [],
  },
];

export const DEFAULT_TRANSFER_TOKEN = "ETH";
export const DEFAULT_TRANSFER_CHAIN_ID = 11155420; // Optimism Sepolia

// Aave v3 Pool Contract Addresses (Base Sepolia only for testnet)
export const AAVE_V3_POOL_ADDRESSES = {
  84532: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5", // Base Sepolia (Note: This might need to be updated to actual testnet address)
} as const;

// Aave v3 Pool ABI (supply and depositETH functions)
export const AAVE_V3_POOL_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

// USDC Token Addresses for each testnet chain
export const USDC_TOKEN_ADDRESSES = {
  11155420: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7", // Optimism Sepolia
  80002: "0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582", // Polygon Amoy
  421614: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d", // Arbitrum Sepolia
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // Base Sepolia
} as const;

// Default values for bridge and execute
export const DEFAULT_BRIDGE_TOKEN = "USDC";
export const DEFAULT_BRIDGE_CHAIN_ID = 11155420; // Optimism Sepolia
