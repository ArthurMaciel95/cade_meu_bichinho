import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const app = express();

export class App {
  private express: express.Application;
  private PORT = process.env.PORT || 3377;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.database();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }
  private routes(): void {
    this.express.use(routes);
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
  }
  private listen(): void {
    this.express.listen(this.PORT, () => {
      console.log('server running on PORT ' + this.PORT);
    });
  }
  private async database(): Promise<void> {
    try {
      await mongoose.connect('mongodb://localhost:27017/cade_meu_bichinho', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// import router from './routes/routes';
// app.use(router);
// export default app;
