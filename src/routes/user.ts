import { responseClient, md5, MD5_SUFFIX } from '../../core/util';
import { MsgType } from '../../core/config';
const User = require('../models/user');

const register = (req: any, res: any) => {
  const { username, password, phone, email, introduce, type } = req.body;
  User.findOne({ email }).then((data: any) => {
    if (data) {
      responseClient(res, 200, MsgType.ERROR, '用户邮箱已存在！');
      return;
    }
    //保存到数据库
    let user = new User({
      email,
      username,
      password: md5(password + MD5_SUFFIX),
      phone,
      type,
      introduce
    });
    user.save().then((data: any) => {
      console.log('ddd',);
      responseClient(res, 200, MsgType.SUCCESS, '注册成功', data);
    });
  }).catch(() => {
    responseClient(res);
    return;
  });
}

export = {
  register
};