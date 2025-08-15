const http = require('http');
const porta = 3000

const server = http.createServer((req, res)=>
{
    
    //Mostra a rota solicitada
    url = req.url
    console.log('url: ',url);

    //Aqui vão as Rotas
    //res.end('inicio do projeto'); //sera excluido no prox. passo
    if (url === '/') {
        res.end('<h1>Mercadinho da Juju</h1>');
    } 
    else if(url === '/bebidas'){
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end(`<h1>Bebidas</h1><ul><li>Suco de Laranja</li><li>Água</li></ul>`);
    }
     else if (url === '/verduras') {
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end(`<h1>Verduras</h1><ul><li>Alface</li><li>Couve</li></ul> `);
    }
    else if (url === '/frutas') {
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end(`<h1>laranja</h1><ul><li>maçã</li><li>banana</li></ul> `);
    }
    else if (url === '/carne') {
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end(`<h1>frango</h1><ul><li>carne bovina</li><li>peixe</li></ul> `);
    }  else {
        res.writeHead(404,'Pagina não encontrada',{ 'Content-Type': 'text/html; charset=utf-8' }) //rota nao cadastrada
        res.end('Pagina não encontrada');
        }
});    

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});
