/**
 * User model module.
 * @file 权限和用户数据模型
 * @module core/mongoose
 * @author  KTDefTnT <https://github.com/KTDefTnT>
 */

import { mongoose } from '../../core/mongodb'

const adminSchema = new mongoose().Schema({

});

export const User = mongoose.model('User', adminSchema);
