import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const database = process.env.DB
const usuario = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST





const db = new Sequelize(`${database}`, `${usuario}`, `${password}`, {
    host: host,
    port: 3306,
    dialect: "mysql",
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    //operatorAliases: false
})


export default db