const ethers = require('ethers');

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