// valore diferentes

a = 1;
b = "Lorem Ipsum";
c = [a, b, (soma) => a + b, 17];
d = (a * 1) / 100 + a;

console.log(a, b, c);

// contagem de impressões
console.count(`O resulta da soma entre a e d é: ${a + d} - Contagem:`);
console.count(`O resulta da soma entre a e d é: ${a + d} - Contagem:`);
console.count(`O resulta da soma entre a e d é: ${a + d} - Contagem:`);

// variavel entre string

console.log('O nome dele é %s, ele é programador.', b);

// limpar o console

setTimeout(()=>{console.clear()},2000)