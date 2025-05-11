import express, { Express } from "express";
import { expressConfig } from "../../Config/Express";
import linkRoutes from "../../Route/linkRoute";

class Server {
    private app: Express = express();

    start() {
        this.initServer();
    }

    private initServer() {
        this.app.use(express.json()); // <- Middleware para JSON
        this.app.use("/encurta-link", linkRoutes); // <- Suas rotas
        this.app.listen(expressConfig.port, () => {
            console.log(`Server is running... [PORT ${expressConfig.port}]`);
        });
    }
}

export default Server;
