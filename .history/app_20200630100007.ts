const express = require('express');
import { mongoose } from './core/mongodb';
import route from './src/routes/index'; //将路由文件引入

const app = express();
// 连接数据库
mongoose.connect();

route(app)

