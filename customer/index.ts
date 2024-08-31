import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT || 3000;

// This route need for generate excel and take link and id table on DataBase
app.post("/create-excel",  async (req, res) => {
   const data = await fetch(`http://localhost:3001/create-excel`, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(req.body)
    })
   const result = await data.json()
   return res.json(result)
});

// This route need for take data on database by id
app.get("/return-excel/:id", async (req, res) => {
    const data =  await fetch(`http://localhost:3001/return-excel/:id`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': `attachment; filename= 1.xlsx`
        },
      })
    const result = await data.json()
    return res.json(result)
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});