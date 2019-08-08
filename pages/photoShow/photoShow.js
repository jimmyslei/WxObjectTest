Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    uindex: null,
    grids: [
      {
        name: '江景', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8299.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '美女', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8335.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '美食', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8351.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '蜡烛', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8390.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '思念', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8409.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '床', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8425.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '美女', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8458.png", isunread: false,
        unreadNum: 1
      },
      {
        name: '咩女', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8462.png", isunread: true,
        unreadNum: 1
      },
      {
        name: '房间', path: "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef", icon: "257A8496.png", isunread: true,
        unreadNum: 1
      }],
    onPullDownRefresh() {
      wx.showNavigationBarLoading() //在标题栏中显示加载
      wx.startPullDownRefresh({
        success: function (data) {
          
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    });
  },
  
  /**
   * 图片点击查看大图
   */
  clickShow:function(event){
    
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = ['cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8299.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8335.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8351.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8390.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8409.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8425.png' ,'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8458.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8462.png', 'cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8496.png' ];//获取data-list
   
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
      
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