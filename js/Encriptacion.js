const texto = document.getElementById("lineas");
const solucion = document.getElementById("resultado");
let encriptar = document.getElementById("encriptador");
let desencriptar = document.getElementById("desencriptador");
let copiar = document.getElementById("copiador");


encriptar.addEventListener("click", clickEncriptar);
desencriptar.addEventListener("click", clickDesencriptar);
copiar.addEventListener("click", copiado);

function clickEncriptar()
{
  const mensaje = encriptado(texto.value);
  solucion.value = mensaje
  solucion.style.backgroundImage="none"
  texto.value = ""
}

function encriptado(codigo)
{
  let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  codigo = codigo.toLowerCase();
  for (let x = 0; x < matrizCodigo.length; x++)
  {
    if (codigo.includes(matrizCodigo[x][0]))
    {
      codigo = codigo.replaceAll(matrizCodigo[x][0],matrizCodigo[x][1])
    }
  }
  return codigo
 
}
function clickDesencriptar()
{
  const mensaje = desencriptado(texto.value);
  solucion.value = mensaje
  solucion.style.backgroundImage="none"
  texto.value = ""
}
function desencriptado(codigo)
{
  let matrizCodigo =[["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
  codigo = codigo.toLowerCase();
  for (let x = 0; x < matrizCodigo.length; x++)
  {
    if (codigo.includes(matrizCodigo[x][0]))
    {
      codigo = codigo.replaceAll(matrizCodigo[x][0],matrizCodigo[x][1])
    }
  }
  return codigo
}
function copiado()
{  
  solucion.select();
  document.execCommand('copy');
  alert("Copiado!");
}
