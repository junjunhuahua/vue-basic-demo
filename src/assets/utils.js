/* 工具函数封装,以vue插件的形式 */
export default {
  install (Vue) {
    Vue.prototype.utils = (function () {
      return {

        /* 获取指定名称的localStorage */
        getLocalStorage (name) {
          if (window.localStorage) {
            return JSON.parse(localStorage.getItem(name))
          }
        },

        /* 设置指定名称的localStorage */
        setLocalStorage (name, data) {
          if (window.localStorage) {
            localStorage.setItem(name, JSON.stringify(data))
          }
        },

        /* 删除指定名称的localStorage */
        deleteLocalStorage (name) {
          if (window.localStorage) {
            localStorage.removeItem(name)
          }
        },

        /* uuid random string */
        uuid () {
          let s = []
          let hexDigits = '0123456789abcdef'
          for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
          }
          s[14] = '4'  // bits 12-15 of the time_hi_and_version field to 0010
          s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)  // bits 6-7 of the clock_seq_hi_and_reserved to 01
          s[8] = s[13] = s[18] = s[23] = '-'

          return s.join('')
        }
      }
    })()
  }
}
