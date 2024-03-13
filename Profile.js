function sellonMetaMask(){
    const sellButton = document.getElementById("sellbtn");
    const popupContainer = document.getElementById("popup-container");
    function showPopup() {
        popupContainer.style.display = "flex";
    }
    sellButton.addEventListener("click", showPopup);
    function closePopup() {
        popupContainer.style.display = "none";
    }
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", closePopup);

}

async function getTotalAmount() {
    // let apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr';
    let apiUrl =
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=inr";
  
    let response = await fetch(apiUrl);
    let data = await response.json();
  
    const numberoftokens = document.getElementById("num-tokens").value;
  
    document.getElementById("total-amount-rupees").innerText = numberoftokens*10000;
    document.getElementById("total-amount-ethereum").innerText = (numberoftokens*10000/data.INR).toFixed(1);
  }
  
  getTotalAmount();

document.getElementById("sellonmetamask").addEventListener("click", async ()=>{
    const senderwalletaddress = document.getElementById("senderWaddressinput").value;
    const receiverwalletaddress = document.getElementById("receiverWaddressinput").value;
    const ethereumvalue = document.getElementById("total-amount-ethereum").innerText;


    if(window.ethereum){

        try {

            // Request account access
            if (window.ethereum.request) {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
            } else {
                await window.ethereum.enable();
            }
            const provider = window.ethereum;


            // Create a new instance of Web3 with the provider
            const web3 = new Web3(provider);

            const transactionParameters = {
                from: senderwalletaddress,
                to: receiverwalletaddress,
                value: web3.utils.toWei(ethereumvalue, 'ether') // Example value, change as needed
            };


            //Send the transaction

            await web3.eth.sendTransaction(transactionParameters);
        } catch (error) {
            console.log(error);
            alert("Transaction failed!, due some error");
        }

    }else{
        alert('MetaMask is not installed!');
    }


});