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

const fields = document.querySelectorAll("[required]")

// console.log(fields);

function validateField(field) {
    // logica para verificar erros
    function verifyErrors() {
        let foundError = false;

        for (const error in field.validity) {
            // se nao for custom error
            //entao verifica se tem error
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError;
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error");

        if (message) {
            spanError.classList.add("active");
            spanError.innerHTML = message;
            field.style.border = "1px solid red"
        }
        if (message == "") {
            spanError.style.display = "none";
            spanError.innerHTML = "";
        }
    }
    return function () {
        if (verifyErrors()) {
            setCustomMessage("campo obrigatorio");
        } else {
            setCustomMessage("")
        }

    };
}

function customValidation(event) {
    const field = event.target

    // essa var recebe ua funcao como retorno 
    const validation = validateField(field);

    //executando a funcao
    validation();
}

for (const field of fields) {
    field.addEventListener("invalid", (event) => {
        //eliminar o bubble que aparece
        event.preventDefault();
        customValidation(event)
    });
    field.addEventListener("click", () => field.style.border = "1px solid purple");
    field.addEventListener("blur", () => {
        customValidation
        field.style.border = "1px solid silver"
    });
}



function getInputValue(event, campo) {

    campo.innerText = event.target.value
}

inputName.addEventListener("input", (event) => getInputValue(event, cardName));

inputMes.addEventListener("input", (event) => getInputValue(event, mesDate));

inputAno.addEventListener("input", (event) => getInputValue(event, anoDate))

inputNumber.addEventListener("input", (event) => getInputValue(event, numberCard))

inputCvc.addEventListener("input", (event) => getInputValue(event, cvcCard))

formCard.addEventListener("submit", (e) => {
    e.preventDefault();
    formCard.style.display = "none"
    successCard.style.display = "flex"
    console.log(inputAno.value)
})