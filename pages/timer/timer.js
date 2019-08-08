var scrol = require('../timer/scroll.js');
// myPluginInterface = requirePlugin('myPlugin')
//var wulAiSDK = require('../timer/WulAiSDK.js');
let plugin = requirePlugin("myPlugin")
let routeInfo = {
  startLat: 29.90469,    //起点纬度 选填
  startLng: 106.40717,    //起点经度 选填
  startName: "我的位置",   // 起点名称 选填
  endLat: 29.52265,    // 终点纬度必传
  endLng: 106.32561,  //终点经度 必传
  endName: "沙坪坝",  //终点名称 必传
  mode: 'car'  //算路方式 选填
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routeInfo: routeInfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  //  const pubkey = 'wx2186515485add2';
  //  const userinfo = {
  //    "avatar":
//'https://wx.qlogo.cn/mmopen/vi_32/Ccdlzibsv0ukZtpeibtzzEpxwdJltbff8C1OicQoUxrKCicGK6sXWHSm4eLwDQsrABsGAmbEJ3BRGDmQibKGmjR8kDw/132',                           /* 微信头像链接地址 */
  //    "nickname": '幺幺',                       /* 微信昵称 */
  //    "username": 'test',                       /* 用户微信username 等价于 openid */
     // "preset_attribute": preset_attribute,       /* （非必填）给用户添加系统属性值 详情见 附录一 */
     // "temp_attribute": temp_attribute,           /* （非必填）给用户添加临时属性值 详情见 附录一 */
  //  }
  //  myPluginInterface.init(wulAiSDK, wx, pubkey, userinfo);

   // if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
   //   scrol.scrol = new scrollReveal({
   //     reset: true
   //   });
   // };
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