import express from 'express'
import {Request, Response} from 'express'

export class Restaurant {

    public routes(app): void {
        app.route('/restaurant')
    }
}