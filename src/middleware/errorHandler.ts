import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error | any, req: Request, res: Response, next: NextFunction) => {
    console.error("\n---- Error Occurred ----");
    console.error("Error: "+err?.message);
    console.error("Stack: "+err?.stack);


    res.status(err?.status || 500).json({
        success: false,
        message: err?.message || 'Internal Server Error',
    });
};

export default errorHandler;
