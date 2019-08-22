Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '29.557435',
    longitude: '106.553263',
    markers:[
      {
        id: 1,
        latitude: 29.588553,
        longitude: 106.544837,
        title: '公司'
      },
      {
        id: 1,
        latitude: 29.540948,
        longitude: 106.574557,
        title: '家'
      }
    ],
    polyline:[
      {
        points: [{ latitude: 29.588553, longitude: 106.544837 }],
        color:"#4ff10f",
        width:10
      },
      {
        points: [{ latitude: 29.540948, longitude: 106.574557 }],
        color: "#4ff10f",
        width: 10
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.map = wx.createMapContext('map');
    this.map.moveToLocation();
  },
  getCenterLocation:function(){
    this.map.getCenterLocation({
      success: function (res) {
        wx.showModal({
          title: '获取位置信息',
          content: "经度：" + res.longitude + ",纬度：" + res.latitude,
        })
      }
    })
  },
  moveToLocation:function(){
    this.map.moveToLocation();
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