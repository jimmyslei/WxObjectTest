// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData: '',
    wxParseData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '2CXUAupFOGoIYFvlV6eSt6mvxGNDLmkA'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date +         '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });

    var city="重庆";
    wx.request({
      url: 'https://127.0.0.1:5001/api/AI/getWerther?city='+city,
      method: 'POST',
      responseType: 'text',
      data: { city: '重庆' },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      success: function (result) {
        var text = '温馨提示：'+ result.data.result.summary+'\n'
          + '标题：' + result.data.result.title + '\n 今日天气：' + result.data.result.texts[0];
        
        that.setData({ wxParseData: WxParse.wxParse('databinding', 'html', text, that, 5) });
      },
      fail: function (error) {
      }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})