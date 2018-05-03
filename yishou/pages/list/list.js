// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    title:"",
    titleid:false,
    totalCount:0,
    dataUrl:"",
    itemp:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在onLoad函数内可以获取到设置URL的参数
    const that=this
    var start = that.data.totalCount
    // console.log("初次加载",start,options.type)
    const api = 'https://douban.uieee.com/v2/movie/'+ options.type + "?start=" + start+"&count=20";
    wx.request({
      // 豆瓣已更改api接口路径]
      url:api,
      header: {
        'content-type': 'application/text',
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data.subjects,
          itemp: false
        })
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
        if (res.data.title =="豆瓣电影北美票房榜"){
          that.setData({
            titleid: false
          })
 
        }else{
          that.setData({
            titleid: true
          })
        }
      }
    })
      this.setData({
        title:options.name
      })
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
    var that = this
    var search = that.data.title
    var start = that.data.totalCount +=20;
    // console.log("加载更多",start)
      switch (search){
        case "正在上映的电影-北京" :
          this.data.dataUrl = "https://douban.uieee.com/v2/movie/in_theaters?" + "start=" + start+"&count=8";
          break;
        case "即将上映的电影":
          this.data.dataUrl = "https://douban.uieee.com/v2/movie/coming_soon?" + "start=" + start + "&count=8";
          break;
        case "豆瓣电影Top250":
          this.data.dataUrl = "https://douban.uieee.com/v2/movie/top250?" + "start=" + start + "count=8";
          break;
        case "豆瓣电影北美票房榜":
          this.data.dataUrl = "https://douban.uieee.com/v2/movie/us_box?" + "start=" + start + "count=8";
          break;
      }
      wx.request({
        // 豆瓣已更改api接口路径]
        url: that.data.dataUrl ,
        header: {
          'content-type': 'application/text',
        },
        success: function (res) { 
          var totallist={} 
          if (that.data.itemp==false){
            totallist = that.data.list.concat(res.data.subjects)
            // console.log("加载更多",totallist )
          }
          else{
            totallist = that.data.list
            that.data.itemp=false
          }  
          // concat 不修改数组 直接是一个个元素加进去
          that.setData({ 
            list: totallist,
          }) 
        }
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})