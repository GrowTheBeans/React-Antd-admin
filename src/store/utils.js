/**
 * 时间格式化
 */
export function TimestampToTime(time) {
  let dataTime = new Date();
  let Y = dataTime.getFullYear();  // 年
  let M = (dataTime.getMonth() + 1) < 10 ? '0' + dataTime.getMonth() : dataTime.getMonth();
  let D = (dataTime.getDate()) < 10 ? '0' + dataTime.getDate() : dataTime.getDate();
  let h = (dataTime.getHours()) < 10 ? '0' + dataTime.getHours() : dataTime.getHours();
  let m = (dataTime.getMinutes()) < 10 ? '0' + dataTime.getMinutes() : dataTime.getMinutes();
  let s = (dataTime.getSeconds()) < 10 ? '0' + dataTime.getSeconds() : dataTime.getSeconds();
  return `${Y}年-${M}月-${D}日 ${h}:${m}:${s}`;
}

/**
 * 手机验证
 */
export function MobliePhone(time) {
  let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
  return reg.test(time);
}

 /**
  * 邮箱验证
  */

export function MailBox(time) {
  let myreg = /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/;
  return myreg.test(time)
}