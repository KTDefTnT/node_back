const express = require('express');
const path = require('path');
import { connect } from '../core/mongodb';
import route from './routes/index'; //将路由文件引入
import bodyParser from 'body-parser';
import session from 'express-session';

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'node_back',
    name: 'session_id', //# 在浏览器中生成cookie的名称key，默认是connect.sid
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60* 1000 *30,
      httpOnly: true
    }
  })
);

// 连接数据库
connect();

//初始化所有路由
route(app);

// error handler
app.use(function(err: any, req: any, res: any, next: Function) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export = app;

