/**
 * User model module.
 * @file 权限和用户数据模型
 * @module core/mongoose
 * @author  KTDefTnT <https://github.com/KTDefTnT>
 */

import crypto from 'crypto';
import { mongoose } from '../../core/mongodb'

const adminSchema = new mongoose().Schema({
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
  }

});

export const User = mongoose.model('User', adminSchema);
