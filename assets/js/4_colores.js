//crear variables seleccionando elementos del DOM
const blueDiv = document.getElementById("a");
const redDiv = document.getElementById("b");
const greenDiv = document.getElementById("c");
const yellowDiv = document.getElementById("d");

// forma 1 de resolver la parte 1:

// const changeBackgroundColor = (elemento) => {
//   return (elemento.target.style.backgroundColor = "black");
// };

// blueDiv.addEventListener("click", changeBackgroundColor);
// redDiv.addEventListener("click", changeBackgroundColor);
// greenDiv.addEventListener("click", changeBackgroundColor);
// yellowDiv.addEventListener("click", changeBackgroundColor);

// forma 2 de resolver la parte 1:

// blueDiv.addEventListener("click", () => {
//   blueDiv.style.backgroundColor = "black";
// })

// redDiv.addEventListener("click", function () {
//   redDiv.style.backgroundColor = "black";
// })

// greenDiv.addEventListener("click", function () {
//   greenDiv.style.backgroundColor = "black";
// })

// yellowDiv.addEventListener("click", function () {
//   yellowDiv.style.backgroundColor = "black";
// })

// forma 3 de resolver la parte 1:
// seccion escogida como mejor practica

function changeColorOnClick(div) {
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
}

changeColorOnClick(blueDiv);
changeColorOnClick(redDiv);
changeColorOnClick(greenDiv);
changeColorOnClick(yellowDiv);

// Segunda parte, cambio color div:

const keyDiv = document.getElementById("key");
const firstMessage = document.getElementById("firstColorChange");

let keyColor = document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    const assignedColor = (keyDiv.style.backgroundColor = "pink");
    firstMessage.textContent = `el cuadrado es rosado, porque se presionó la tecla ${event.key}`;
  } else if (event.key === "s" || event.key === "S") {
    const assignedColor = (keyDiv.style.backgroundColor = "orange");
    firstMessage.textContent = `el cuadrado es naranjo, porque se presionó la tecla ${event.key}`;
  } else if (event.key === "d" || event.key === "D") {
    const assignedColor = (keyDiv.style.backgroundColor = "lightblue");
    firstMessage.textContent = `el cuadrado es celeste, porque se presionó la tecla ${event.key}`;
  }
});

//Tercera parte, div nuevo
const message = document.getElementById("message");

let keyNewDiv = document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    const newDiv = document.createElement("div");
    newDiv.id = "key1";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.display = "inline-block";
    const newDivColor = (newDiv.style.backgroundColor = "yellow");
    const addedBoxes = document.querySelector(".addedBoxes");
    addedBoxes.appendChild(newDiv);
    message.textContent = `Al presionar q, w, e, se agregará un cuadrado: amarillo, porque se presionó la tecla ${event.key}`;
  } else if (event.key === "w" || event.key === "W") {
    const newDiv = document.createElement("div");
    newDiv.id = "key1";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.display = "inline-block";
    const newDivColor = (newDiv.style.backgroundColor = "blue");
    const addedBoxes = document.querySelector(".addedBoxes");
    addedBoxes.appendChild(newDiv);
    message.textContent = `Al presionar q, w, e, se agregará un cuadrado: azul, porque se presionó la tecla ${event.key}`;
  } else if (event.key === "e" || event.key === "E") {
    const newDiv = document.createElement("div");
    newDiv.id = "key1";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.display = "inline-block";
    const newDivColor = (newDiv.style.backgroundColor = "brown");
    const addedBoxes = document.querySelector(".addedBoxes");
    addedBoxes.appendChild(newDiv);
    message.textContent = `Al presionar q, w, e, se agregará un cuadrado:café, porque se presionó la tecla ${event.key}`;
  }
});
