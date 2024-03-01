//adicionar um evento on clique na pergunta
// clicar na pergunta
//remove a tag display none do css
// mostrar a resposta

var pa = document.querySelector("#a")
var pb = document.querySelector("#b")
var pc = document.querySelector("#c")
var pd = document.querySelector("#d")
var a = document.querySelector(".conteudoa")
var b = document.querySelector(".conteudob")
var c = document.querySelector(".conteudoc")
var d = document.querySelector(".conteudod")

const mostrar = () => {
    a.classList.toggle("showAnswer")
    console.log(a)
}

const mostrarb = () => {
    b.classList.toggle("showAnswer")
    console.log(a)
}
const mostrarc = () => {
    c.classList.toggle("showAnswer")
    console.log(a)
}
const mostrard = () => {
    d.classList.toggle("showAnswer")
    console.log(a)
}

pa.addEventListener("click", mostrar)
pb.addEventListener("click", mostrarb)
pc.addEventListener("click", mostrarc)
pd.addEventListener("click", mostrard)
