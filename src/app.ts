import express from 'express'
import organizationRoutes from './routes/organizationRoutes'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/org', organizationRoutes )

app.listen(3000,()=>{
    console.log("server is running");
})


