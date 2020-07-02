import { responseClient, md5, MD5_SUFFIX } from '../../core/util';
import { MsgType } from '../../core/config';
const User = require('../models/user');

/**
 * 用户注册
 * @param
 */
const register = (req: any, res: any) => {
  const { username, password, phone, email, introduce, type } = req.body;
  User.findOne({ email }).then((data: any) => {
    if (data) {
      responseClient(res, 200, MsgType.ERROR, true, '用户邮箱已存在！');
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
      responseClient(res, 200, MsgType.SUCCESS, true, '注册成功', data);
    });
  }).catch(() => {
    responseClient(res);
    return;
  });
}

const login = (req: any, res: any) => {
  const { email, password } = req.body;
  if (!email) {
    responseClient(res, 400, MsgType.Error, true, '用户邮箱不可为空');
    return;
  }
  if (!password) {
    responseClient(res, 400,  MsgType.Error, true, '密码不可为空');
    return;
  }
  User.findOne({ email, password: md5(password + MD5_SUFFIX)}).then((userInfo: any) => {
    if (userInfo) {
      //登录成功后设置session
      req.session.userInfo = userInfo;
      responseClient(res, 200, MsgType.SUCCESS, true, '登录成功', userInfo);
    } else {
      responseClient(res, 200, MsgType.ERROR, true, '用户名或密码不存在');
    }
  });
}

/**
 * 
 * @param req 
 * @param res 
 * 注销登录
 */
const logout = (req: any, res: any) => {
  if (req.session.userInfo) {
    req.session.userInfo = null; // 删除session
    responseClient(res, 200, MsgType.SUCCESS, true, '注销登录成功！');
  } else {
    responseClient(res, 200, MsgType.TOLOGIN, false, '您还没登录！');
  }
}

const userList = (req: any, res: any) => {
  // let { pageNo = 1, pageSize = 10 } = req.body;
  // .skip((pageNo - 1) * pageSize).limit(pageSize)
  if (req.session.userInfo) {
    User.find().then((data: any) => {
      console.log('data', data);
      responseClient(res, 200, MsgType.SUCCESS, false, '查询成功', data);
    });
  } else {
    responseClient(res, 200, MsgType.TOLOGIN, false, '您还没登录！');
  }
}

const deleteUser = (req: any, res: any) => {
  let { id } = req.body;
  if (!id) {
    responseClient(res, 200, MsgType.ERROR, true, 'id为必传字段！');
    return;
  }
  if (req.session.userInfo) {
    User.deleteOne({ id }).then(() => {
      responseClient(res, 200, MsgType.SUCCESS, true, '删除成功！');
    });
  } else {
    responseClient(res, 200, MsgType.TOLOGIN, false, '您还没登录！');
  }
}

export = {
  register,
  login,
  logout,
  userList,
  deleteUser
};