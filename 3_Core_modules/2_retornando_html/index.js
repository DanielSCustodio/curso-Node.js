const http = require ('http')

const port = 3000

const server = http.createServer((req, res)=>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(('<h2>CLASSIFICAÇÃO DAS CORES</h2>  <ul>    <li>      <h3>Cores Primárias</h3>      <ol>        <li>Vermelho</li>        <li>Azul</li>        <li>Amarelo</li>     </ol>    </li><li>       <h3>Cores Secundárias</h3>        <ol>          <li>Verde</li>          <li>Laranja</li>          <li>Roxo</li>        </ol>      </li><li>        <h3>Cores Terciárias</h3>        <ol>          <li>Laranja</li>          <li>Oliva</li>          <li>Turquesa</li>          <li>Celeste</li>          <li>Violeta</li>          <li>Rosa</li>        </ol>      </li></>  </ul>'))
})

server.listen(port,()=>{
  console.log(`Servidor executando na porta ${port}`);
})