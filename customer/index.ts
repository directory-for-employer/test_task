import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.post("/create-excel", async (req, res) => {
    let table_data = {
      title: "первое название",
      content: "какое-то содержание поста"
    }

    let data = await fetch(`http://localhost:3001/create-excel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(table_data)
    })
});

app.get("/return-excel/:id", async (req, res) => {
    let data = await fetch(`http://localhost:3001/return-excel/${req.params.id}`,
      {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
      }
    )
    console.log(data)
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});