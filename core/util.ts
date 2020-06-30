import { ResponseData } from './../types/index.d';
import crypto from 'crypto';

function responseClient(res: any, httpCode = 500, type = 'SUCCESS', message = '服务端异常', data = {}) {
  let responseData:ResponseData = {
    message,
    type,
    data
  };
  res.status(httpCode).json(responseData);
}

function md5 (pwd: string) {
  let md5 = crypto.createHash('md5');
  return md5.update(pwd).digest('hex');
}

const MD5_SUFFIX = 'ktdeft*&^%$#';

export {
  responseClient,
  md5,
  MD5_SUFFIX
}