const adviceN01 = document.getElementById("adviceN01")
const advice = document.getElementById("adviceE1")
const adviceBtn = document.getElementById("adviceBtn")


function adviceFetcher(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => { 
        adviceN01.textContent = `Advice # ${data.slip.id}`
        advice.textContent = `"${data.slip.advice}"`})
    .catch(err => {
        adviceNumEl.textContent = `Advice # 999`
        advice.textContent = `Unfortunately something went wrong we do not have any advice for you`
    } )
}

adviceBtn.addEventListener("click", function(){
    adviceFetcher()
    console.log("button pressed")
} )