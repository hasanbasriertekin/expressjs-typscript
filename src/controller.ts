import { NextFunction, Request, Response } from "express";

/* export function helloWorld (req:Request,res:Response,next:NextFunction) {
res.send("Hello World")
};

export const testEndp= (req:Request,res:Response,next:NextFunction) => {
res.send("muco burda mı bak biii")
}; */



/* type ControllerMethod = (
    req:Request,
    res:Response,
    next:NextFunction
) => void;


type Controller = Record <string,ControllerMethod>;


export const TestController:Controller= {
   
    helloWorld (req,res,next) {
        res.send("Hello World")
        },

    testEndp (req, res, next) {
        res.send("muco burda mı bak biii");
    },
} */


export const TestController= {
   
    helloWorld ( req:Request, res:Response, next:NextFunction) {
        res.send("Hello World")
        },

    testEndp ( req:Request,res:Response,next:NextFunction) {
        res.send("muco burda mı bak biii");
    },
}