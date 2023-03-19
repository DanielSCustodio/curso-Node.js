const os = require("os")

console.log(`Qunatidade de núcleos: ${os.cpus().length}`);

console.log(`Memória livre: ${os.freemem() / (1024*1024)}`);

console.log(`Memória Total: ${os.totalmem() / (1024 * 1024)}`);

console.log(`Diretório principal: ${os.homedir()}`);

console.log(`Sistema operacional: ${os.type()}`);

console.log(`Processador: ${os.hostname()}`);

console.log(`Arquitetura: ${os.machine}`);

console.log(`Versão OS: ${os.version}`);


