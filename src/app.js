import express from 'express';
import connectDb from './config/dbConnect.js';
import livro from './models/Livro.js';

const conexao = await connectDb();

conexao.on("error", (error) => {
    console.error("Erro de conexão: ", error);
});

conexao.once("open", () => console.log("Conectado com o banco!"))

const app = express();
app.use(express.json());



function buscarPorId(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js");

});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscarPorId(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros",(req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrando com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscarPorId(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarPorId(req.params.id);
    livros.splice(index, 1);
    res.status(204);
});

export default app;