// pages/test/text.js
var initText = '这是第一个文字\n这是第二个文字'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: initText
  },

  //初始化一个空的文字串
  extraLine: [],
  //添加按钮点击事件
  add: function(e) {
    //在文字串中添加文字，push
    this.extraLine.push('添加的其他文字')
    //设置数据
    this.setData({
      text: initText + '\n' + this.extraLine.join('\n')
    })
  },
  //减少按钮点击事件
  remove: function(e) {
    //判断文字串是否大于0，如果大于0，减少，反之，不操作
    if (this.extraLine.length > 0) {
      //在文字串中减少文字，pop
      this.extraLine.pop()
      //设置数据
      this.setData({
        text: initText + '\n' + this.extraLine.join('\n')
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})