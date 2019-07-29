function parseTime(timestamp, fmt) {
  let d = new Date(timestamp),
      f = fmt || 'yyyy-MM-dd hh:mm:ss',
      o = {
          'M+': d.getMonth() + 1, //月份
          'd+': d.getDate(), //日
          'h+': d.getHours(), //小时
          'm+': d.getMinutes(), //分
          's+': d.getSeconds(), //秒
          'q+': Math.floor((d.getMonth() + 3) / 3), //季度
          'S': d.getMilliseconds() //毫秒
      };
  if (/(y+)/.test(f)) {
      f = f.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
      if (new RegExp('(' + k + ')').test(f)) {
          f = f.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
  }
  return f;
}

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
const debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function () {
        let args = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};

/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
const throttle = (fn, t) => {
    let last;
    let timer;
    let interval = t || 500;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
};

const getQueryString = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};

export default {
  getQueryString,
  parseTime,
  throttle,
  debounce
}
