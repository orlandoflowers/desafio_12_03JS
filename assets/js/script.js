//capturar elemento
const ele = document.getElementById("ele1");

//funcion que define el elemento y color por defecto
function pintar(ele, color ='green') {
  ele.style.backgroundColor = color;
}

//invocacion de la funcion para que se ejecute con color default
pintar(ele);

//evento que cambia el color a amarillo
ele.addEventListener("click", () => pintar(ele, "yellow"));
