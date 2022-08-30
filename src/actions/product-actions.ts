import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { Product } from '../db/DTO/product-model'

export class ProductActions {

    async saveProduct(req: Request, res: Response) {

        const name = req.body.name;
        const price = req.body.price;

        const newProduct = new Product({
            name: name,
            price: price
        });

        await newProduct.save();

        res.status(201).json(newProduct);
    }

    async getAllProducts(req: Request, res: Response) {

        const doc = Product.find({}, (err: any, doc: any) => {
            console.log(doc);
            res.status(200).json(doc);
        });
    }

    async getProduct(req: Request, res: Response) {

        const id = req.params.id;

        const product = await Product.findOne({ _id:id });

        res.status(200).json(product);
    }

    async updateProduct(req: Request, res: Response) {
        
        const id = req.params.id;
        const name = req.body.name;
        const price = req.body.price;

        const product = await Product.findOne({ _id: id});

        if(product) {
            product.name = name;
            product.price = price;
            await product.save();
            res.status(201).json(product)
        }
    }

    async deleteProduct(req: Request, res: Response) {

        const id = req.params.id;
        await Product.deleteOne({ _id : id });

        res.sendStatus(204);
    }

}

module.exports = new ProductActions();
