/**
 * 定义格式化时间
 */

// function FormateDate(data) {
//   if (!data) {
//     return null;
//   }
//   let DataTime = new Date(data);
//   let get_fullYear = DataTime.getFullYear(); // 年
//   let get_month = (DataTime.getMonth() + 1) < 10 ? '0' + DataTime.getMonth() + 1 : DataTime.getMonth() + 1;  // 月
//   let get_date = (DataTime.getDate()) < 10 ? '0' + DataTime.getDate() : DataTime.getDate();  // 日
//   let get_hour = (DataTime.getHours()) < 10 ? '0' + DataTime.getHours() : DataTime.getHours();  // 时
//   let minute = (DataTime.getMinutes()) < 10 ? '0' + DataTime.getMinutes() : DataTime.getMinutes();  // 分
//   let second = (DataTime.getSeconds()) < 10 ? '0' + DataTime.getSeconds() : DataTime.getSeconds();  // 秒
//   return `${get_fullYear}-${get_month}-${get_date} ${get_hour}:${minute}:${second}`;
// }
// 重构日期格式化
function FormateDate(data) {
  if (!data) {
    return null;
  }
  let DataTime = new Date();
  let get_fullYear = DataTime.getFullYear();
  let get_month = DataTime.getMonth() + 1;
  let get_date = DataTime.getDate();
  let get_hour = DataTime.getHours();
  let minute = DataTime.getMinutes();
  let second = DataTime.getSeconds();
  let M = get_month < 10 ? "0" + get_month : get_month;
  let R = get_date < 10 ? "0" + get_date : get_date;
  let H = get_hour < 10 ? "0" + get_hour : get_hour;
  let I = minute < 10 ? "0" + minute : minute;
  let S = second < 10 ? "0" + second : second;
  return `${get_fullYear}-${M}-${R} ${H}:${I}:${S}`;
}

export {
  FormateDate
};

