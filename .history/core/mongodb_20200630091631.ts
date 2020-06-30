/**
 * Mongoose module.
 * @file 数据库模块
 * @module core/mongoose
 * @author  KTDefTnT <https://github.com/KTDefTnT>
 */

const consola = require('consola')
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// remove DeprecationWarning
mongoose.set('useFindAndModify', false)

// mongoose Promise
mongoose.Promise = global.Promise

// mongoose
exports.mongoose = mongoose