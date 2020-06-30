const express = require('express');
import { mongoose } from './core/mongodb';
import route from './src/routes/index'; //将路由文件引入

const app = express();
// 连接数据库
mongoose.connect();

//初始化所有路由
route(app);

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export = app;

