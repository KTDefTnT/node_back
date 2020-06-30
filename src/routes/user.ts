import { responseClient, md5, MD5_SUFFIX } from '../../core/util';
// import MsgType from '../../core/config';
const User = require('../models/user');

const register = (req: any, res: any) => {
  console.log(req.query);
  // const { username, password } = req.body;
  // User.findOne({ username }).then((data: any) => {
  //   console.log('data', data);
  // })
  //保存到数据库
  // let user = new User({
  //   email: '1395110441@qq.com',
  //   username: 'sadad',
  //   password: md5('123456' + MD5_SUFFIX),
  //   phone: 554555454,
  //   type: 2,
  //   introduce: '21312313',
  // });
  // user.save().then((data: any) => {
  //   console.log('ddd',);
  //   responseClient(res, 200, 'SUCCESS', '注册成功', data);
  // });
  // console.log('user', user);
  responseClient(res, 200, 'SUCCESS', '注册成功！', {
    name: '名字啦',
    password: '1212'
  });
}

export = {
  register
};