import express from 'express'
import cors from 'cors'
import db from "./config/database.js";
import route from './route/userRoute.js'
const app = express()
const port = 5000
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cors())
app.use(express.json())
app.use('/api/v1',route)
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))