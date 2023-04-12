// exemplo de funções

const divElement = document.getElementById("div-box")
divElement.addEventListener("click", ()=>{
    console.log(divElement);
})

divElement.addEventListener("click", mostraElemento);
function mostraElemento() {
    console.log(divElement)
}

function soma() {
    let n1 = 3
    let n2 = 7
    console.log(n1+n2)
}