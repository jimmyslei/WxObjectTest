Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.animation = wx.createAnimation();
  },
  rotate: function() {
    this.animation.rotate(Math.random() * 360 - 180).step();
    this.setData({
      animation: this.animation.export()
    });
  },
  scale: function() {
    this.animation.scale(Math.random() * 3).step();
    this.setData({
      animation: this.animation.export()
    });
  },
  translate: function() {
    this.animation.translate(Math.random() * 100, Math.random() * 100).step();
    this.setData({
      animation: this.animation.export()
    });
  },
  skew: function() {
    this.animation.skew(Math.random() * 360 - 180, Math.random() * 360 - 180).step();
    this.setData({
      animation: this.animation.export()
    });
  },
  allOper:function(){
    this.animation.rotate3d(Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 360 - 180).step();
    this.animation.scale3d(Math.random() * 100, Math.random() * 100, Math.random() * 100)
    .skew(Math.random() * 360 - 180, Math.random() * 360 - 180)
      .translate3d(Math.random() * 100, Math.random() * 100, Math.random() * 100)
      .rotate(Math.random() * 360 - 180).step();
      this.setData({animation:this.animation.export()});
  },
  reset:function(){
    this.animation.scale(1).rotate(0).translate(0, 0).skew(0, 0).rotate3d(0, 0, 0, 0).scale3d(1, 1, 1).translate3d(0,0,0).step();
    this.setData({animation:this.animation.export()});
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