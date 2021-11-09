async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();
  
    data = data.map(user => user.username);
  
    console.log(data);
  }
  
fetchUsers('https://askubuntu.com/questions/334055/i-am-trying-to-install-package-fetch');