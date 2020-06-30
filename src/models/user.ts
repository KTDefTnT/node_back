/**
 * User model module.
 * @file 权限和用户数据模型
 * @module core/mongoose
 * @author  KTDefTnT <https://github.com/KTDefTnT>
 */

import crypto from 'crypto';
import { mongoose } from '../../core/mongodb'
const autoIncrement = require('mongoose-auto-increment');

const adminSchema = new mongoose.Schema({
  //第三方授权登录的 github 的用户 id
  github_id: { type: String, default: '' },

  // 用户名称
  username: { type: String, required: true, default: '' },

  // 密码
  password: {
    type: String,
    required: true,
    default: crypto
      .createHash('md5')
      .update('root')
      .digest('hex')
  },

  //用户类型 0：博主，1：其他用户 ，2：github， 3：weixin， 4：qq ( 0，1 是注册的用户； 2，3，4 都是第三方授权登录的用户)
  type: { type: Number, default: 1 },

  // 邮箱
  email: { type: String, default: '' },

  // 手机
  phone: { type: String, default: '' },

  // 个人介绍
  introduce: { type: String, default: '' },

  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now },
  // 头像
  avatar: { type: String, default: 'user' },

  // 地址
  location: { type: String, default: 'user' },

  //封面
  img_url: { type: String, default: '' }
});

// 自增 ID 插件配置 为当前的表创建一个唯一索引 id，初始化为1 以后都增1
adminSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

export const User = mongoose.model('User', adminSchema);
