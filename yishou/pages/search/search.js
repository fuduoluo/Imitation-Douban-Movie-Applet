// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    texts:'',
    empty:false
  },
  onbindchange:function(event){
    var that=this
    var text = event.detail.value
    if (text===""){
      that.setData({
        texts:"输入有惊喜会搜到哦"
      })
    }else{
      var searchurl = "http://t.yushu.im/v2/movie/search?q=" + text
      console.log(searchurl)
      wx.request({
        url: searchurl,
        header: {
          'content-type': 'application/json',
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            list: res.data.subjects,
            texts: ""
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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