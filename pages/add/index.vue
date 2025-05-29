<template>
    <view class="safe-area-top">
        <!-- 你的内容 -->
        <view class="container">
            <view class="card">
                <view class="section">
                    <text class="label">金额</text>
                    <input class="input" placeholder="请输入金额" type="number" @input="onAmountInput" />
                </view>

                <view class="section">
                    <text class="label">分类</text>
                    <picker mode="selector" :range="categories" @change="onCategoryChange">
                        <view class="input">{{ category || '请选择分类' }}</view>
                    </picker>
                </view>

                <view class="section">
                    <text class="label">备注</text>
                    <input class="input" placeholder="添加备注（如：奶茶、吃饭）" @input="onNoteInput" />
                </view>

                <view class="section">
                    <text class="label">日期</text>
                    <input class="input" type="date" :value="date" @input="onDateChange" />
                </view>

                <view class="type-buttons">
                    <view :class="'type-btn ' + (type === '支出' ? 'active' : '')" data-type="支出" @tap="handleTypeChange">支出</view>
                    <view :class="'type-btn ' + (type === '收入' ? 'active' : '')" data-type="收入" @tap="handleTypeChange">收入</view>
                </view>

                <button class="save-btn" @tap="handleSave">保存账单</button>
            </view>
        </view>
    </view>
</template>

<script>
const db = wx.cloud.database();
export default {
    data() {
        return {
            type: '支出',
            date: new Date().toISOString().split('T')[0],
            amount: '',
            category: '',
            note: '',
            categories: ['饮品', '日用品', '交通', '餐饮', '工资', '红包']
        };
    },
    methods: {
        handleTypeChange(e) {
            this.setData({
                type: e.currentTarget.dataset.type
            });
        },

        onAmountInput(e) {
            this.setData({
                amount: e.detail.value
            });
        },

        onCategoryChange(e) {
            const index = e.detail.value;
            this.setData({
                category: this.categories[index]
            });
        },

        onNoteInput(e) {
            this.setData({
                note: e.detail.value
            });
        },

        onDateChange(e) {
            this.setData({
                date: e.detail.value
            });
        },

        handleSave() {
            const { amount, category, note, date, type } = this;
            if (!amount || !category) {
                uni.showToast({
                    title: '请填写完整',
                    icon: 'none'
                });
                return;
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
                    uni.showToast({
                        title: '保存成功'
                    });
                    uni.switchTab({
                        url: '/pages/home/index'
                    });
                }
            });
        }
    }
};
</script>
<style>
.container {
    background-color: #f7f7f7;
    min-height: 100vh;
    padding: 32rpx;
}

.card {
    background-color: #ffffff;
    border-radius: 20rpx;
    padding: 32rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
}

.section {
    margin-bottom: 32rpx;
}

.label {
    font-size: 30rpx;
    color: #333;
    margin-bottom: 16rpx;
    display: block;
}

.input {
    background-color: #f8f8f8;
    border-radius: 12rpx;
    padding: 20rpx;
    font-size: 28rpx;
    border: 1rpx solid #ddd;
}

.type-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20rpx;
    margin-bottom: 40rpx;
}

.type-btn {
    flex: 1;
    text-align: center;
    padding: 20rpx 0;
    border: 1rpx solid #ddd;
    border-radius: 12rpx;
    margin-right: 20rpx;
    font-size: 28rpx;
    background-color: #fff;
}

.type-btn:last-child {
    margin-right: 0;
}

.type-btn.active {
    background-color: #ffd700;
    border-color: #ffd700;
    color: #000;
}

.save-btn {
    background-color: #ffd700;
    color: #000;
    font-size: 30rpx;
    padding: 24rpx 0;
    border-radius: 16rpx;
    border: none;
}
</style>
