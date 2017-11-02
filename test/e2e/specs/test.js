// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      // 查看有否搜索框，并且赋值
      .assert.elementPresent('input')
      .setValue('input', 'j')
      // 查看有否搜索按钮，并且点击
      .assert.elementPresent('.contact-list-wrap:nth-child(1) button')
      .pause(1000)
      .click('.contact-list-wrap:nth-child(1) button')
      .pause(1000)
      // 查看搜索后的第一项
      .assert.elementPresent('.el-table')
      .click('.el-table .el-table__row:nth-child(1)')
      .pause(3000)
      // 3秒后关闭弹窗
      .click('.el-dialog__close')
      .pause(3000)
      // 3秒后点击删除
      .click('.el-table .el-table__row:nth-child(1) .el-button--default')
      .pause(1000)
      // 1秒后取消删除
      .click('.el-message-box__btns .el-button--default')
      .pause(3000)
      // 3秒后点击删除
      .click('.el-table .el-table__row:nth-child(1) .el-button--default')
      .pause(1000)
      // 1秒后确认删除
      .click('.el-message-box__btns .el-button--primary')
      .pause(5000)
      .end()
  }
}
