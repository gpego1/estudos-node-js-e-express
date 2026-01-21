import http from "http";

const PORT = 3000;

const rotas = {
    "/":"Curso de Express API",
    "/livros":"Rota de livros",
    "/autores":"Gabriel Pego"
};

const server = http.createServer((rec, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[rec.url]);
});

server.listen(PORT, () => {
    console.log("Server listening!");
});