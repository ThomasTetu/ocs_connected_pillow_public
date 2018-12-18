import * as express from "express";

export class TutuController {
    public tutu(request: express.Request, response: express.Response): void {
        response.send("tutu");
    }
}