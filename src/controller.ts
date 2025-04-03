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


type Controller = Record <"Hello World" | "Hello Test!",ControllerMethod>;  

//Yukarıka bulunan kısımda string  yazabilirdik fakat öneri olarak index.ts dosyamızda çıkmazdı fakat bu şekilde belirttiğimizde indexçts dosyamızda öneri olarak alabiliriz.


export const TestController:Controller= {
   
    helloWorld (req,res,next) {
        res.send("Hello World")
        },

    testEndp (req, res, next) {
        res.send("Hello Test!");
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