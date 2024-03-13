let getprice = async () => {
  // let apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr';
  let apiUrl ="https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=inr";

  let response = await fetch(apiUrl);
  let data = await response.json();

  console.log(data.INR);

  document.getElementById("price").innerText = data.INR;
};

getprice();
