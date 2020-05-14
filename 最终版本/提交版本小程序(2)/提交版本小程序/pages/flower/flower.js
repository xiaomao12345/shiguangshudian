//index.js 获取应用实例

var app = getApp();
Page({
  data: {
    show: 'block',
    hide: 'none',
    animationlist: [],
    isAnimation: false,
    zindex: [
      1, 2, 3
    ],
    animationlistyet: [],
    cardInfoList: [
      {
        id: 1,
        cardUrl: 'https://7368-shiguangshucheng-9845f6-1259049166.tcb.qcloud.la/%E6%8C%87%E5%8D%9711.jpg',
       
      }, {
        id: 2,
        cardUrl: 'https://7368-shiguangshucheng-9845f6-1259049166.tcb.qcloud.la/%E6%8C%87%E5%8D%9733.jpg',
        
       
      }, {
        id: 3,
        cardUrl: 'https://7368-shiguangshucheng-9845f6-1259049166.tcb.qcloud.la/%E6%8C%87%E5%8D%9722.jpg',
        cardInfo: {
         
          cardTitle: '行动派手帐指南',
          cardName: '手帐研究室',
          cardPrice: '52.00',
          cardInfoMes: ['时间管理、读书笔记、旅行手帐、观影心得、美食记你最关心的手帐话题尽在这里，联合13位手帐达人诚恳分享更实用的手帐技巧'],
          
        
        }
    
      }
    ]
  },
  kaishi: function () {
    wx.reLaunch({
      url: '../ddemo/ddemo',
    })
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var self = this;
    if (this.data.isAnimation) {
      return false;
    }
    this.setData({ isAnimation: true });
    var animation1 = wx.createAnimation({ duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)' });
    this.animation1 = animation1;
    // this.animation1.translateY(-320).rotate(-5).translateX(0).scale(0.52).step();
    this
      .animation1
      .translateY(28)
      .translateX(51)
      .rotate(0)
      .scale(1)
      .step();
    var animation2 = wx.createAnimation({ duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)' });
    this.animation2 = animation2;
    this
      .animation2
      .translateY(62)
      .translateX(25)
      .rotate(0)
      .step();
    var animation3 = wx.createAnimation({ duration: 100, timingFunction: 'cubic-bezier(.8,.2,.1,0.8)' });
    this.animation3 = animation3;
    this
      .animation3
      .translateY(44)
      .translateX(41)
      .rotate(0)
      .step();
    if (this.data.animationlistyet.length <= 0) {
      this.data.animationlistyet = [
        this
          .animation1
          .export(),
        this
          .animation2
          .export(),
        this
          .animation3
          .export()
      ];
    }
    this.setData({ animationlist: this.data.animationlistyet });
    var animationlistyet = self.data.animationlistyet;
    var animation = self
      .data
      .animationlistyet
      .pop();
    self
      .data
      .animationlistyet
      .unshift(animation);
    self.setData({
      animationlist: [], animationlistyet: self.data.animationlistyet // 用来寄存下一次动画的排序
    });
    setTimeout(function () {
      var zindex = self.data.zindex;
      var slidethis = self
        .data
        .zindex
        .shift();
      self
        .data
        .zindex
        .push(slidethis);
      self.setData({ isAnimation: false, zindex: self.data.zindex });
    }, 100);
  },
  buythis: function (e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({ url: '../detail/detail' });
  },
  // onLoad: function () {
  //   console.log('onLoad');
  //   var that = this;
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function (userInfo) {
  //     //更新数据
  //     that.setData({ userInfo: userInfo });
  //   });
  // },
  collected: function (e) {
    const that = this;
    
    that.setData({
      show: 'none',
      hide: 'block'
    })
  },
  no_collected: function (e) {
    const that = this;
    that.setData({
      hide: 'none',
      show: 'block'
    })
  },
  xq:function(e){
    console.log('43456576')
  },
 
  /**
   * [微信小程序分享]
   * @return {[type]} [description]
   */
  onShareAppMessage: function () {
    return { title: '自定义分享标题', desc: '自定义分享描述', path: '/index/index' };
  }
});
