document.getElementById("login-btn").addEventListener("click",
    function(event){
        event.preventDefault()
        accountNum=document.getElementById("acount-num").value;
const pinNum=document.getElementById("pin").value;
const convertedPin=parseInt(pinNum)

// login 
if (accountNum.length===11 && convertedPin===1234) {
    console.log("ok")
  window.location.href="./bank.html"
}
else{
    alert("Id pass vul")
}
    }
)

