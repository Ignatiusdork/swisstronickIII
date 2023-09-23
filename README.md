# Ethereum Storage Fetcher

This project uses the JSON RPC call using eth_getStorageAt() to get the first storage variable (slot #0) in any deployed smart contract and returns the retrieved value.

Here it fetches the value stored at the first slot of a swisstronick deployed smart contract. The value returned is in hexadecimal format. If the storage variable is a string, the hexadecimal value is converted to a string for better interpretation.

As for the differences with other blockchains when using this RPC method, it depends on the specific blockchain. Ethereum-based blockchains that support the Ethereum JSON RPC API should behave the same way. However, blockchains that use a different architecture or storage model could potentially behave differently. 

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

    // Initialize the provider
    let provider = new ethers.providers.JsonRpcProvider('https://json-rpc.testnet.swisstronik.com/');

    // Set the contract address and position
    let contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";
    let position = 0;
    
    // Hex to string conversion function
    function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
    }

    // Retrieve the storage at the given position
    provider.getStorageAt(contractAddress, position).then(result => {
        console.log('Hexadecimal result: ', result);

        // Convert the hexadecimal result to a string
        let str = hex2a(result.slice(2)); // Remove '0x' from the start
        console.log('String result: ', str);
    }).catch(error => {
        console.log('Error: ', error);
    });

    ```


2. Save the `index.js` file and close the text editor.

3. Back in the terminal, run the script using Node.js:
    `bash node index.js` or `bash node method2.js`


## Contributing

Contributions are welcome. If you're interested in contributing to this project, please fork the repository and make your changes, and then submit a pull request.

## Contact

If you want to contact me, you can reach me at `littignatius@gmail.com`.

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT).
