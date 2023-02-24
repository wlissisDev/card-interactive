const cardName = document.querySelector(".name");
const inputName = document.querySelector(".name.input input");

const mesDate = document.querySelector(".mes")
const inputMes = document.querySelector(".exp.info input");

const anoDate = document.querySelector(".ano");
const inputAno = document.querySelector(".date.info input");

const numberCard = document.querySelector(".number-card");
const inputNumber = document.querySelector(".number.input input");

const cvcCard = document.querySelector(".value-cvc")
const inputCvc = document.querySelector(".cvc.info input");

const formCard = document.querySelector("form");
const successCard = document.querySelector(".success");

console.log(formCard)

inputName.addEventListener("input",(e)=>{
    cardName.innerText = e.target.value
});

inputMes.addEventListener("input",(e)=>{
    mesDate.innerText = e.target.value
});

inputAno.addEventListener("input",(e)=>{
    anoDate.innerText = e.target.value
});

inputNumber.addEventListener("input",(e)=>{
    numberCard.innerText = e.target.value
});

inputCvc.addEventListener("input",(e)=>{
    cvcCard.innerText = e.target.value
});

formCard.addEventListener("submit",(e)=>{
    e.preventDefault();
    formCard.style.display="none"
    successCard.style.display="flex"
    console.log(inputAno.value)
})