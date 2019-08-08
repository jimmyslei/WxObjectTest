var imageUtil = require('../show/util.js');
/*
Component({
  methods: {
    loginSuccess(e) {
      debugger
      console.log(e.detail.code) // wx.login 的 code
      console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
    }
  }
})
 */

function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [
      "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8496.png",
      "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8462.png",
      "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8458.png",
      "cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/257A8425.png"
    ],
    musicUrl:"",
    imagewidth:0,
    imageheight:0,
    autoplay:true,
    interval: 3000,
    duration: 500,
    circular: true,
    vertical:false,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    array:['昨天','今天','明天'],
    index:0,
    date:'2019-05-01',
    time:'14:00',
    src:'',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  bindPickerChange: function(e){
    this.setData({
      index: e.detail.value,
      
    })
  },
  bindPickerdateChange:function(e){
    this.setData({
    date: e.detail.value,
    })
  },
  bindPickertimeChange:function(e){
    this.setData({
      time: e.detail.value,
    })
  },

  /**音频 */
  audioPlay:function(){
    this.audioCtx.play();
  },
  audioPause:function(){
    this.audioCtx.pause();
  },
  audioStart:function(){
    this.audioCtx.seek(0);
  },
  
  /**视频 */
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.videoContext.requestFullScreen();
  },

  imageLoad: function(e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(e) {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();
    this.videoContext = wx.createVideoContext('myVideo');
    
    wx.cloud.getTempFileURL({
      fileList: ['cloud://jimmy-0c83ef.6a69-jimmy-0c83ef/起风了.mp3'],
      success: res => {
        this.setData({
          musicUrl: res.fileList
        })
       
        // get temp file URL
        console.log(res.fileList)
      },
      fail: err => {
        // handle error
      }
    })

    // 使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle('#00ff00')
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle('#ff0000')
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
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