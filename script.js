//declarar
const display = document.querySelector(".display");
display.value = "0";

const buttons = document.querySelectorAll("button");

const operadores = ["+", "-", "*", "/", "."];

//para que recurra los botones
buttons.forEach(button => {

    //añadir evento
    button.addEventListener("click", () => {
        const valor = button.dataset.value;

        if (display.value === "Error") {
            display.value = "";
        }

        if (valor === "AC") {
            display.value = "";
            return;
        }

        if (valor === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
            return;
        }

        //bloque el doble operador
        const ultimo = display.value.slice(-1);
        //evita iniciar con un operador
        if (display.value === "" && operadores.includes(valor)) {
            return;
        }
        //evita el doble operador
        if (operadores.includes(valor) && operadores.includes(ultimo)) {
            return;
        }

        display.value += valor;
    });
});


