import express from "express"; 
//引用router模块
import authRoutes from "./routes/auth.route.js"
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
const app = express();
const PORT = ENV_VARS.PORT;

/**
 * main => rout => controller => model
 */

app.use(express.json);//把请求体转换成json格式

//权限编写
app.use("/api/v1/auth",authRoutes);

app.listen(PORT,()=>{
    //服务器启动
    console.log("server started at http://localhost:"+PORT);
    //连接数据库
    connectDB();
})