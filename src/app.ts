import express, { Request, Response } from 'express';
import { clientCalc } from './functions/clientCalculator';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/api/v1/parse', (req: Request, res: Response) => {
    try {
        res.send(clientCalc(req.body.data, 1));        
    } catch (error) {
        if (error == 'Error: Invalid input') {
            res.status(400).send({
                "error": "Invalid input"
            });
        }
    }
});

app.post('/api/v2/parse', (req: Request, res: Response) => {
    try {
        res.send(clientCalc(req.body.data, 2));        
    } catch (error) {
        if (error == 'Error: Invalid input') {
            res.status(400).send({
                "error": "Invalid input"
            });
        }
    }
});