function add(){
    var resultado = Number(document.getElementById("input1").value) + Number(document.getElementById("input2").value);
    console.log(resultado);
    document.getElementById("texto").innerHTML = resultado;
  }
  function del(){
    var resultado = Number(document.getElementById("input1").value) - Number(document.getElementById("input2").value);
    console.log(resultado);
    document.getElementById("texto").innerHTML = resultado;
  }
  function mul(){
    var resultado = Number(document.getElementById("input1").value) * Number(document.getElementById("input2").value);
    console.log(resultado);
    document.getElementById("texto").innerHTML = resultado;
  }
  function div(){
    var resultado = Number(document.getElementById("input1").value) / Number(document.getElementById("input2").value);
    console.log(resultado);
    document.getElementById("texto").innerHTML = resultado;
  }
  function raiz(){
    var resultado = Math.sqrt (Number(document.getElementById("input1").value));
    console.log(resultado);
    document.getElementById("texto").innerHTML = resultado;
  }