// pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    movie:[],
    summary:"",
    empty:false,
    array:"",
    url:""
    
  },
  watch:function(){
    var url=this.data.url
    wx.navigateTo({
      url: '/pages/video/video?Rurl='+url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options)
      var that=this
      var id=options.id
      var searchurl = "https://douban.uieee.com/v2/movie/subject/"+id
      // console.log(searchurl)
      wx.request({
        url: searchurl,
        header: {
          'content-type': 'application/text',
        },
        success: function (res) {
          // console.log(res.data)
          wx.setNavigationBarTitle({ title: res.data.title + ' « 电影 « 豆瓣' })
          // 星星评级
          var array=that.starRating(res.data.rating.stars)
          that.setData({
            array:array,
          })
          that.setData({
            movie: res.data,
            empty:true,
            url: res.data.clip_urls[0]
          })
          if(res.data.summary==""){
            that.setData({
              summary: "暂无摘要",
              empty: false
            })
          }
        }
      })
  },
  // 星星评级
  starRating: function (stars){
      var num = stars.toString().substring(0, 1);
      var array = [];
      for (var i = 1; i <= 5; i++) {
        if (i <= num) {
          array.push(1);
        }
        else {
          array.push(0);
        }
      }
      return array;   
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