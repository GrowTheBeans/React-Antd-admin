/**
 * 定义格式化时间
 */

function FormateDate(data) {
  if (!data) {
    return null;
  }
  let DataTime = new Date(data);
  let get_fullYear = DataTime.getFullYear(); // 年
  let get_month = DataTime.getMonth() + 1;  // 月
  let get_date = DataTime.getDate();  // 日
  let get_hour = DataTime.getHours();  // 时
  let minute = DataTime.getMinutes();  // 分
  let second = DataTime.getSeconds();  // 秒
  return `${get_fullYear}-${get_month}-${get_date} ${get_hour}:${minute}:${second}`;
}
export {
  FormateDate
};

