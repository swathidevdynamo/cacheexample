import express, { Request, Response } from 'express';
import Cache from './cache'

const app = express();

app.use(express.json());

const PORT = 5002;

const cache = new Cache();

app.post('/save', (req: Request, res: Response) => {
    const { key, value } = req.body;
    cache.set(key, value);
    res.status(201).send('Saved data in cache');
})

app.get('/fetch/:key', (req: Request, res: Response) => {
    const { key } = req.params;
    const value = cache.get(key);
    if(value){
        res.json({ message: `successfully retrieved the data ${value}` })
    }else{
        res.json({message : `Error fetching details from cache`})
    }
})


app.listen(PORT, () => {
    console.log("service started on ", PORT)
})