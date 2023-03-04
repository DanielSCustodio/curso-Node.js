function a(){
  console.log('Executa a()');
}

function b() {
  console.log("Executa b()");
}

function c() {
  a()
  b()
  console.log("Executa c()");
}

c()