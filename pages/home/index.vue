<template>
    <view class="safe-area-top">
        <!-- 你的内容 -->
        <view class="container">
            <view class="card summary-card">
                <view class="summary-row">
                    <text>本月收入：</text>
                    <text class="income">￥{{ income }}</text>
                </view>
                <view class="summary-row">
                    <text>本月支出：</text>
                    <text class="expense">￥{{ expense }}</text>
                </view>
                <view class="summary-row">
                    <text>结余：</text>
                    <text class="balance">￥{{ balance }}</text>
                </view>
            </view>

            <view class="card">
                <view class="section-title">账单记录</view>

                <block v-if="records.length">
                    <view class="record-item" v-for="(item, index) in records" :key="index">
                        <view class="left">
                            <view class="category">{{ item.category }}</view>
                            <view class="note">{{ item.note }}</view>
                        </view>

                        <view class="right">
                            <view :class="'amount ' + (item.type === '收入' ? 'income' : 'expense')">{{ item.type === '收入' ? '+' : '-' }}{{ item.amount }}</view>
                        </view>
                    </view>
                </block>

                <block v-else>
                    <view class="empty">暂无账单</view>
                </block>
            </view>
        </view>
    </view>
</template>

<script>
const db = wx.cloud.database();
export default {
    data() {
        return {
            expense: 0,
            income: 0,
            balance: 0,
            records: [] // ✅ 用于展示账单列表
        };
    },
    onShow() {
        this.loadBills();
    },
    methods: {
        loadBills() {
            db.collection('bills')
                .orderBy('createdAt', 'desc')
                .get()
                .then((res) => {
                    const bills = res.data;
                    let totalIncome = 0;
                    let totalExpense = 0;
                    bills.forEach((bill) => {
                        if (bill.type === '收入') {
                            totalIncome += bill.amount;
                        } else {
                            totalExpense += bill.amount;
                        }
                    });
                    this.setData({
                        records: bills,
                        // ✅ 替代原来的假数据
                        income: totalIncome,
                        expense: totalExpense,
                        balance: totalIncome - totalExpense
                    });
                });
        }
    }
};
</script>
<style>
.container {
    background-color: #ffffff;
    min-height: 100vh;
    padding: 32rpx;
}

.card {
    background-color: #ffd700;
    border-radius: 20rpx;
    padding: 32rpx;
    margin-bottom: 32rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.summary-card .summary-row {
    font-size: 28rpx;
    margin-bottom: 16rpx;
    display: flex;
    justify-content: space-between;
}

.income {
    color: green;
}

.expense {
    color: red;
}

.balance {
    color: #333;
    font-weight: bold;
}

.section-title {
    font-size: 30rpx;
    font-weight: bold;
    margin-bottom: 24rpx;
    color: #333;
}

.record-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24rpx 0;
    border-bottom: 1rpx solid #eee;
}

.left .category {
    font-size: 28rpx;
    font-weight: bold;
    margin-bottom: 8rpx;
}

.left .note {
    font-size: 24rpx;
    color: rgb(0, 0, 0);
}

.right .amount {
    font-size: 30rpx;
}

.right .income {
    color: green;
}

.right .expense {
    color: red;
}

.empty {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 26rpx;
    padding: 40rpx 0;
}
</style>
