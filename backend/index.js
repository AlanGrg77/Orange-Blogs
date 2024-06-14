import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"


const app = express()
const corsOptions = {
    origin: "*",
    credentials: true, 
    optionSuccessStatus: 200,
  };

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  console.log(file.filename)
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.listen(8800,()=>{
    console.log('Connected')
})