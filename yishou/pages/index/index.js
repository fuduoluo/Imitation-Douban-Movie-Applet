//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    List:[
      {
        key: "in_theaters", name:"正在上映的电影-北京"
      },
      {
        key: "coming_soon", name: "即将上映的电影"
      },
       {
         key: "top250", name: "豆瓣电影Top250"
      },
      {
        key: "us_box", name: "豆瓣电影北美票房榜"
      }
    ],
    imgUrls:[
      { "img":"https://images.unsplash.com/photo-1467691965561-60bbe8ad30ab?ixlib=rb-0.3.5&s=696b90794276ef19b221faab388f5e9a&auto=format&fit=crop&w=500&q=60"},
      { "img":"https://images.unsplash.com/photo-1490090537791-aa0fbc52b4e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16ff767ef9aaf247a975fcf4860ca42c&auto=format&fit=crop&w=500&q=60"},
      { "img":"https://images.unsplash.com/photo-1508298707492-306274cb77f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00d1ddba7a69a9d4bee32bdc2faeccd0&auto=format&fit=crop&w=500&q=60 "},
      { "img": "https://images.unsplash.com/photo-1504693642111-aeb864e8a35b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f6ec97340c5a72241b0550bcef346a7&auto=format&fit=crop&w=500&q=60" },
      { "img": "https://images.unsplash.com/photo-1511717004695-7862a87f4b3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6e1c6054d1ce17a77cf8e0c47b4d96b&auto=format&fit=crop&w=500&q=60" },
    ],
    nodes:[{
      name: 'h2',
      attrs: {
        style: 'line-height: 40px;color:#000'
      },
      children: [{
        type: 'text',
        text: '豆瓣电影榜单集合'
      }]
    }]
  },
  //首页点击加载电影资源
  gotomovie:function(){
    wx.showToast({
      title: '拼命加载中...',
      icon: 'loading',
      duration: 1000,
      success:function(){
        wx.navigateTo({
          url: '/pages/list/list'
        })
      }
    })
  },
  //事件处理函数
  onLoad: function () {
    // var that=this
    // wx.request({
    //   // 豆瓣已更改api接口路径
    //   url:'https://douban.uieee.com/v2/movie',
    //   data:{},
    //   header:{
    //     'content-type':'application/json',
    //     },
    //   success:function(res) {
    //     console.log(res.data)
    //     that.setData({
    //       list: res.data.title
    //     })
    //   }
    // })
    }
})
