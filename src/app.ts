const express = require('express');
const path = require('path');
import { connect } from '../core/mongodb';
import route from './routes/index'; //将路由文件引入

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
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

