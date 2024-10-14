import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './config/DB.js';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app=express();
app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use("/api",router);

const PORT=8000||process.env.PORT

ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connected to db")
        console.log(`server running at PORT ${PORT}`)
    })

})