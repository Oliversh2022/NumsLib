const db = wx.cloud.database()

Page({
  data: {
    type: '支出',
    date: new Date().toISOString().split('T')[0],
    amount: '',
    category: '',
    note: '',
    categories: ['饮品', '日用品', '交通', '餐饮', '工资', '红包']
  },

  handleTypeChange(e) {
    this.setData({ type: e.currentTarget.dataset.type })
  },

  onAmountInput(e) {
    this.setData({ amount: e.detail.value })
  },

  onCategoryChange(e) {
    const index = e.detail.value
    this.setData({ category: this.data.categories[index] })
  },

  onNoteInput(e) {
    this.setData({ note: e.detail.value })
  },

  onDateChange(e) {
    this.setData({ date: e.detail.value })
  },

  handleSave() {
    const { amount, category, note, date, type } = this.data
    if (!amount || !category) {
      wx.showToast({ title: '请填写完整', icon: 'none' })
      return
    }

    db.collection('bills').add({
      data: {
        amount: Number(amount),
        category,
        note,
        date,
        type,
        createdAt: new Date()
      },
      success: () => {
        wx.showToast({ title: '保存成功' })
        wx.switchTab({ url: '/pages/home/index' })
      }
    })
  }
})

