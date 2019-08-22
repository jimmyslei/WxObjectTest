const recorderManager = wx.getRecorderManager();

Page({
  data:{
    apiData:'',
    postData:'',
    src:"",
    code:'',
    videosrc:'',
    imgfile:''
  },
 
  onLoad:function(options){
    //wx.showNavigationBarLoading();
    wx.showShareMenu({
      withShareTicket: true,
      success:function(){
          
      }
    });
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
        //  wx.request({
        //    url: 'https://test.com/onLogin',
        //    data: {
        //      code: res.code
        //    }
        //  })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    recorderManager.onStop(this.onVoiceStop);
  },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
 successTips(){
   wx.showToast({
     title: '成功',
     icon: 'success',
     duration: 2000
   })
 },
  loadingTips(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
  },
  showLoading:function(e){
    wx.showLoading({
      title: '加载中',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  //跳转到地图
  navigateToMap:function(e){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
 
  loadingTips(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
  },
  getlocotion() {  //获取位置信息需要在app.json 配置 permission
    wx.getLocation({
      type: "gcj02",
      altitude:true,
      success:function(result){
        wx.chooseLocation({
          success:function(results){
            wx.openLocation({
              latitude: results.latitude,
              longitude: results.longitude,
              scale: 8,
              name: results.name,
              address: results.address,
              success: function () {
              }
            })
          }
        })
      }
    })
  },
  camea:function(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  camStart:function(){
    const ctx = wx.createCameraContext();
    ctx.startRecord({
      success:(res)=>{
        
      }
    })
  },
  camStop:function(){
    const ctx = wx.createCameraContext();
    ctx.stopRecord({
      success:(res)=>{
        this.setData({
          videosrc: res.tempVideoPath
        })
      }
    })
  },

  cameaCode:function(e){
    wx.scanCode({
      onlyFromCamera:false,
      scanType: ['barCode', 'qrCode'],
      success: (res)=>{
        this.setData({
          code: res.result
        })
        
      }
    })
  },
  showActionSheet:function(e){
    wx.showActionSheet({
      itemList: ["第一个菜单","第二个菜单"],
    })
  },
  //导航条加载动画
  navigationBarLoading:function(e){
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.hideNavigationBarLoading()
    }, 2000)
  },
  //设置下拉样式
  setBackgroundTextStyle:function(e){
    wx.setBackgroundTextStyle({
      textStyle: 'light' // 下拉背景字体、loading 图的样式为dark
    })
  },
  //设置tabar红点
  tabBarRedDot:function(e){
    wx.showTabBarRedDot({
      index: 0,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  setTabBarBadge:function(e){
    wx.setTabBarBadge({
      index: 1,
      text: '1',
    })
  },
  //滚动定位
  pageScrollTo:function(e){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  //创建动画
  navigateTo:function(e){
    wx.navigateTo({
      url: '/pages/animation/animation',
    })
  },
  //文件下载
  download:function(){
    var ths = this;
    wx.downloadFile({
      url:'https://6a69-jimmy-0c83ef-1254386761.tcb.qcloud.la/257A8299.png?sign=f215384921b04892165753c905187619&t=1565922728',
     // filePath:'/images',
      success:function(res){
        if (res.statusCode === 200) {
          ths.setData({ imgfile: res.tempFilePath});
        }
      }
    })
  },
  //设置缓存
  setStorage:function(){
    wx.setStorage({
      key: 'userName',
      data: 'admin',
    });
    wx.showToast({
      title: '缓存设置成功',
    })
  },
  getStorage:function(){
    wx.getStorage({
      key: 'userName',
      success: function(res) {
        wx.showModal({
          title: '缓存值',
          content: res.data,
        })
      },
    })
  },

  voiceStartRecord: function () {
    if (this.recorderManager == null) {
      this.recorderManager = wx.getRecorderManager();
      this.options = {
        duration: 10000,
        sampleRate: 16000,
        numberOfChannels: 1,
        encodeBitRate: 64000,
        format: 'aac',
        frameSize: 50
      }
    }

    this.recorderManager.start(this.options);
    this.recorderManager.onStop((res) => 
    {
      console.log(res)
      debugger
      // 保存文件
      wx.saveFile({
        tempFilePath,
        success() {
          debugger
          const savedFilePath = res.tempFilePath
        }, 
       // fileInfo => {
       //   const { savedFilePath } = fileInfo;
       //   const voiceKey = `voicenote-${Date.now()}`

          // 生成笔记并保存再 storage
       //   const note = {
       //     key: voiceKey,
       //     path: savedFilePath,
       //     duration: (duration / 1000).toFixed(2),
       //     word: '',
       //     isRec: false,
      //      time: dateformat(new Date, 'YYYY-MM-DD HH:mm:ss')
      //    };

      //    const notes = this.data.notes.map(v => v);
       //   notes.unshift(note);

      //    this.recognizeVoice(voiceKey, savedFilePath);
      //    this.saveToStorage(notes);
      //    this.setData({ notes });
      //  },
        fail() {
          console.log('错误，保存语音失败');
        }
      });




    //  wx.uploadFile({
    //    url: 'https://xxxx',//将录音文件传到后台服务器
    //    filePath: res.tempFilePath,
    //    method: 'POST',
    //    name: 'file',
    //    header: {
     //     'content-type': 'multipart/form-data'
     //   },
     //   success: function (res) {
    //      console.log(res);
    //    },

    //    fail: function () {
    //      console.log("语音识别失败");
    //    }
    //  })

    });
  },


  voiceStartRecord() {
    console.log('start record');
    recorderManager.start({
      // 最大长度设置为 2 分钟
      duration: 2 * 60 * 1000,
      // 格式
      format: 'aac',
      sampleRate: 16000,
      encodeBitRate: 25600,
      frameSize: 9,
      numberOfChannels: 1
    });
  },

  voiceEndRecord() {
    console.log('stop record');
    recorderManager.stop();
  },

  onVoiceStop(voiceInfo) {
    const { duration, tempFilePath } = voiceInfo;

    

    // 保存文件
    wx.saveFile({
      tempFilePath,
      success: fileInfo => {
        debugger
        const { savedFilePath } = fileInfo;
        const voiceKey = `voicenote-${Date.now()}`


        // 生成笔记并保存再 storage
      //  const note = {
      //    key: voiceKey,
      //    path: savedFilePath,
      //    duration: (duration / 1000).toFixed(2),
      //    word: '',
      //    isRec: false,
      //    time: dateformat(new Date, 'YYYY-MM-DD HH:mm:ss')
     //   };
        
      //  const notes = this.data.notes.map(v => v);
     //   notes.unshift(note);
        debugger
        this.recognizeVoice(voiceKey, savedFilePath);
     //   this.saveToStorage(notes);
     //   this.setData({ notes });
      },
      fail() {
        util.showModel('错误', '保存语音失败');
      }
    });
  },
  recognizeVoice(key, path) {

    wx.request({
      url: 'https://127.0.0.1:5001/api/AI/uploadfile',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (result) {
        debugger
        mythis.setData({
          apiData: result.data
        })
      },
      fail: function (error) {
        debugger
      }
    })

    wx.uploadFile({
      url: "https://127.0.0.1:5001/api/AI/uploadfile",
      filePath: path,
      method: 'get',
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      success: res => {
        debugger
        let data = res.data;
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }

        console.log(res);

        if (data.code !== 0) {
          console.error(data);
          util.showModel('语音识别失败', data);
          return;
        }

        const result = data.data.reduce((pre, cur, idx) => {
          if (pre.hasError) {
            return pre;
          }

          if (cur.code !== 0) {
            pre.hasError = true;
            pre.errMsg = message;
          }

          pre.text = cur.text;
          return pre;
        }, { text: '', hasError: false, errMsg: '' });

        if (!result.hasError) {
          const notes = this.data.notes.map(v => {
            if (v.key === key) {
              v.word = result.text;
              v.isRec = true;
            }
            return v;
          });

         // this.saveToStorage(notes);
         // this.setData({ notes });
        } else {
          console.error(result, data);
          util.showModel('语音识别失败', result.errMsg);
        }
      },
      fail: function (e) {
        debugger
        console.error(e);
        util.showModel('语音识别失败', e);
      }
    });
  },



  getApi:function(event){
    var mythis = this;
    wx.request({
      url: 'https://127.0.0.1/api/Test',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success:function(result){
        mythis.setData({
          apiData:result.data
        })
      },
      fail:function(error){
        
      }
    })
  },
  getpostApi:function(event){
    var thiss = this;
    wx.request({
      url: 'http://127.0.0.1:8008/api/Test/Posts',
      method:'POST',
      data:{str:"post请求成功"},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success:function(result){
        
        thiss.setData({
          postData:result.data
        })
      },
      fail:function(error){
        
      }
    })
  }
})