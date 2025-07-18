import { Request, Response } from 'express';
import { AppDataSource } from '../configs/data-source';

export const getHome = (req : Request, res: Response) => {
    res.status(200).json({ message: 'hello world' });
}; 


export const testDbConnection = async (req : Request, res: Response) => {

    const result = await AppDataSource.query(`select * from issues limit 5`);

    res.status(200).json({ message: result });
}; 