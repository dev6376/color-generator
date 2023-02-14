const getcolor = ()=>{
    const randomNumber = Math.floor(Math.random()*16777215)
    const hexNumber = "#" + randomNumber.toString(16)
    console.log(hexNumber);
    document.body.style.background = hexNumber;
    document.getElementById("clr-code").innerText = hexNumber;
    navigator.clipboard.writeText(hexNumber);
    alert("Copied the text: " + hexNumber);
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor()
