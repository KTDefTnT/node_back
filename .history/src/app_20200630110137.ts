const express = require('express');
import { connect } from '../core/mongodb';
import user from './routes/user';
// import route from './routes/index'; //将路由文件引入

const app = express();
// 连接数据库
connect();
console.log('route', user);
//初始化所有路由
// route(app);
app.get('/resgiter', user.register)
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

