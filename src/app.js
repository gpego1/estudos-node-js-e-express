import express from 'express';
import connectDb from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await connectDb();

conexao.on("error", (error) => {
    console.error("Erro de conexão: ", error);
});

conexao.once("open", () => console.log("Conectado com o banco!"))

const app = express();
routes(app);
app.use(express.json());



export default app;