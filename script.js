const butn = document.querySelector("button")
const quo = document.getElementById("quo")
const au = document.getElementById("auth")

butn.addEventListener("click", getQuote);

function getQuote(){
    quo.textContent="loading..."
    au.textContent=""


    fetch("https://dummyjson.com/quotes/random")
    .then(function(response){
        if(!response.ok){
            throw new error("Network response was not ok");
        }
        return response.json()
    })
    .then(function(data){
        quo.innerText=`"${data.quote}"`
        au.innerHTML = `"~${data.author}"`
    })
    .catch(function(error){
        quo.innerText="Failed to fetch quote"
        au.innerText=""
        console.log(error)
    })
}


