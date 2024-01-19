import http from "http";
import express, { Express } from "express";
import * as homeController from "./controllers/home-controller";
import * as countryController from "./controllers/country-controller";

const app: Express = express();
const router: Express = express();

app.use(express.json());

router.use("",homeController.default, countryController.default);

app.use(router); 

const httpServer = http.createServer(app);

httpServer.listen(6060, () => {
  console.log("Server is running at port 6060");
});
