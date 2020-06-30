/**
 * User model module.
 * @file 权限和用户数据模型
 * @module core/mongoose
 * @author  KTDefTnT <https://github.com/KTDefTnT>
 */

const mongoose = require('../../core/mongodb');

const adminSchema = new mongoose().Schema({

});

module.exports = mongoose.model('User', adminSchema);
