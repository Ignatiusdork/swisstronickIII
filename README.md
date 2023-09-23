# Ethereum Storage Fetcher

This project uses the JSON RPC call using eth_getStorageAt() to get the first storage variable (slot #0) any deployed smart contract and returns the retrieved value.

It fetches the value stored at the first slot of a specific Ethereum smart contract's storage. The value returned is in hexadecimal format. If the storage variable is a string, the hexadecimal value is converted to a string for better interpretation.

As for the differences with other blockchains when using this RPC method, it depends on the specific blockchain. Ethereum-based blockchains that support the Ethereum JSON RPC API should behave the same way. However, blockchains that use a different architecture or storage model could potentially behave differently. It is recommended to check the specific blockchain's documentation for more details.

For example, the Ethereum JSON RPC API allows you to fetch data from the Ethereum blockchain using HTTP, WebSocket, or IPC protocols. However, other blockchains might only support a subset of these protocols or use entirely different protocols for data retrieval

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js
- You have installed `ethers.js` library

## Installation

To install the project, follow these steps:

1. Open your terminal.
2. Create a new directory for your project and navigate into it:

    ```
    bash mkdir ethers-project && cd ethers-project
    
    ```

3. Initialize a new Node.js project by running:

    ```
    bash npm init -y

    ```

4. Install the `ethers.js` library:

    ```
    bash npm install ethers

    ```

5. Create a new JavaScript file in your project directory, let's call it `index.js`:

    ```
    bash touch index.js
    
    ```


## Usage

To use the project, follow these steps:

1. Open the `index.js` file in your preferred text editor and paste the following code:

    ```
    javascript const ethers = require('ethers');
    
    ```


