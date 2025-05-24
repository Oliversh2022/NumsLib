const db = wx.cloud.database()

Page({
  data: {
    expense: 0,
    income: 0,
    balance: 0,
    records: [] // ✅ 用于展示账单列表
  },

  onShow() {
    this.loadBills()
  },

  loadBills() {
    db.collection('bills')
      .orderBy('createdAt', 'desc')
      .get()
      .then(res => {
        const bills = res.data
        let totalIncome = 0
        let totalExpense = 0

        bills.forEach(bill => {
          if (bill.type === '收入') {
            totalIncome += bill.amount
          } else {
            totalExpense += bill.amount
          }
        })

        this.setData({
          records: bills, // ✅ 替代原来的假数据
          income: totalIncome,
          expense: totalExpense,
          balance: totalIncome - totalExpense
        })
      })
  }
})
