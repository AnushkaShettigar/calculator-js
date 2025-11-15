const URL = "https://dogapi.dog/api/v2/facts?limit=1";
factPara = document.querySelector("#fact");

const getFacts = async() => {
    let response = await fetch(URL);
    console.log(response);
    let info = await response.json();
    factPara.innerText = info.data[0].attributes.body;
}

// getFacts();