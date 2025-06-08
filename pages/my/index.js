Page({
  data: {
    userInfo: {
      avatarUrl: '/images/default-avatar.png',
      nickName: '点击登录'
    },
    totalAssets: '1250'
  },

  goToDetails() {
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },

  goToRecords() {
    wx.navigateTo({
      url: '/pages/records/records'
    })
  },

  goToGoals() {
    wx.navigateTo({
      url: '/pages/goals/goals'
    })
  },

  goToSettings() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    })
  }
})
