// Terms & Conditions

function showPopupTerms() {
  const popupContainerTerms = document.getElementById("popup-container-terms");
  popupContainerTerms.style.display = "flex";
}

function closePopupTerms() {
  const popupContainerTerms = document.getElementById("popup-container-terms");
  popupContainerTerms.style.display = "none";
}

function showPopupTerms() {
  const popupContainerTerms = document.getElementById("popup-container-terms");
  popupContainerTerms.style.display = "flex";
}

// Get the "Invest" button element
const investButton = document.querySelector(".invest-button");

// Get the pop-up container element
const popupContainer = document.getElementById("popup-container");

// Function to show the pop-up
function showPopup() {
  popupContainer.style.display = "flex";
}

// Event listener for the "Invest" button click
investButton.addEventListener("click", showPopup);

// Function to close the pop-up
function closePopup() {
  popupContainer.style.display = "none";
}

// Get the close button element
const closeButton = document.querySelector(".close-button");

// Event listener for the close button click
closeButton.addEventListener("click", closePopup);

// Boeing 777

// Get the "Invest" button element
const investButton2 = document.querySelector(".invest-button2");

// Get the pop-up container element
const popupContainer2 = document.getElementById("popup-container2");

// Function to show the pop-up
function showPopup2() {
  popupContainer2.style.display = "flex";
}

// Event listener for the "Invest" button click
// investButton2.addEventListener("click", showPopup2);

// Function to close the pop-up
function closePopup2() {
  popupContainer2.style.display = "none";
}

// Get the close button element
const closeButton2 = document.querySelector(".close-button2");

// Event listener for the close button click
closeButton.addEventListener("click", closePopup2);

async function getTotalAmount() {
  // let apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr';
  let apiUrl =
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=inr";

  let response = await fetch(apiUrl);
  let data = await response.json();

  const equivalentprice1 = 10000 / data.INR;

  document.getElementById("ethereum-price").innerText =
    equivalentprice1.toFixed(6);

  const numberoftokens = document.getElementById("num-tokens").value;

  document.getElementById("total-amount-rupees").innerText = numberoftokens*10000;
  document.getElementById("total-amount-ethereum").innerText = (numberoftokens*10000/data.INR).toFixed(6);
}

getTotalAmount();


// Here we are trying to open the metamask on the button click event i.e Buy 

let numberoftokens = document.getElementById("num-tokens").value;

if(numberoftokens < 195000){
  function openMetaMask(){
    console.log(ethereum);
    if(window.ethereum){
        window.ethereum.request({
            method:'eth_requestAccounts'
        }).then(result=>{
            console.log(result[0]);
        });
  
    }else{
        alert("Please install MetaMask");
    }
  }
}

// function openMetaMask(){
//   console.log(ethereum);
//   if(window.ethereum){
//       window.ethereum.request({
//           method:'eth_requestAccounts'
//       }).then(result=>{
//           console.log(result[0]);
//       });

//   }else{
//       alert("Please install MetaMask");
//   }
// }

function openAlert(){
  alert("Coming soon");
}



// Connect to MetaMask or local Ganache instance
// const web3 = new Web3(window.ethereum);

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contractAddress = '0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B';
const contract = new web3.eth.Contract(contractABI, contractAddress);