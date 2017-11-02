
module.exports = {
  'e2e tests add': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/contact/edit'

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      // 查看有否搜索框，并且赋值
      .assert.elementPresent('.contact-edit')
      .pause(1000)
      // 输入姓名
      .setValue('.contact-edit .el-form-item:nth-child(1) input', 'Jay')
      .pause(1000)
      // 展开性别框
      .click('.contact-edit .el-form-item:nth-child(2) .el-select')
      .pause(1000)
      // 选择性别
      .click('.el-select-dropdown:last-child .el-select-dropdown__item:nth-child(1)')
      .pause(1000)
      // 输入手机号
      .setValue('.contact-edit .el-form-item:nth-child(4) input', '18918991888')
      .pause(1000)
      // 点击新建
      .click('.contact-edit .el-form-item:last-child .el-button--primary')
      .pause(3000)
      .end()
  }
}
