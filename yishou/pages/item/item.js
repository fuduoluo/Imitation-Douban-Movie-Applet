// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    console.log(params)
    wx.showLoading({ title: '拼命加载中...' })
    var that=this
    var searchurl = "https://douban.uieee.com/v2/movie/subject/" + params.id
    wx.request({
      url: searchurl,
      header: {
        'content-type': 'application/text',
      },
      success: function (res) { 
        that.setData({ title: res.data.title, movie: res.data })
        wx.setNavigationBarTitle({ title: res.data.title + ' « 电影 « 豆瓣' })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
  },

  onShareAppMessage() {
    return {
      title: this.data.title,
      desc: this.data.title,
      path: '/pages/item?id=' + this.data.id
    }
  }
})
