import {MongoClient} from 'mongodb'


const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongodb-restaurant'

MongoClient.connect(url, {}, (error, client) => {
    if(error) {
        console.log("niepołączone")
    } else {
        if(client) {
            const db = client.db(dbname)
            db.collection('restaurant').insertOne({
                nazwa: "Pin/o",
                adres: "sss 87",
                telefon: "787847536",
                nip: "5604820",
                email: "ijuejfujeu@jffj.pl",
                www: "www.pino.pl"
            }, (error, result) => {
                if(error) {
                    console.log("dodawanie restauracji błąd", error)
                } else {
                    console.log(result)
                }
            })
        }

        console.log("połączone")
    }
})