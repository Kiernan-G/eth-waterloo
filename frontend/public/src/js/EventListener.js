let web3;

window.addEventListener('load', function() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('Non-Ethereum browser detected. Consider installing MetaMask!');
  }

  let button = document.getElementById('connect-button');
  button.addEventListener('click', async function() {
    if (web3 && window.ethereum) {
      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        console.log('Connected account: ', accounts[0]);
      } catch (error) {
        console.log('User denied account access');
      }
    } else {
      console.log('web3 is not initialized.');
    }
  });
});
