import express from 'express';

export class Restaurant {
    name: string;
    adress: string;
    phoneNum: number;
    nipNum: number;
    email: string;
    websiteUrl: string;

    constructor (name: string, adress: string, phoneNum: number, nipNum: number, email: string, websiteUrl: string) {
        this.name = name;
        this.adress = adress;
        this.phoneNum = phoneNum;
        this.nipNum = nipNum;
        this.email = email;
        this.websiteUrl = websiteUrl
    }

}