function friendlyDate(datsStr) {
  let dataObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
  let time = dataObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''

  switch (true) {
    case space < 6000:
      str = '刚刚'
      break
    case space < 1000*3600:
      str = Math.floor(space/60000) + '分钟前'
      break
    case space < 1000*3600*24:
      str = Math.floor(space/(1000*3600)) + '小时前'
      break
    case space < 1000*3600*24*365:
      str = Math.floor(space/(1000*3600*24)) + '天前'
      break
    default:
      str = Math.floor(space/(1000*3600*24*365)) + '年前'
  }
  return str
}

function splitDate(dataStr) {
  let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
  return {
    date: dateObj.getDate(),
    month: dateObj.getMonth() + 1,
    year: dateObj.getFullYear()
  }
}

export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
    Vue.prototype.splitDate = splitDate
  }
}