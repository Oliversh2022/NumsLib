<template>
    <!-- pages/analysis/analysis.wxml -->

    <view class="container">
        <view class="header">
            <text class="title">资产分析</text>
        </view>

        <view class="chart-section">
            <image src="/static/images/chart.png" class="chart-img" mode="aspectFit" />
            <text class="desc">本月资产构成比例图</text>
        </view>

        <view class="summary">
            <view class="summary-item">
                <text class="label">总资产</text>
                <text class="value">¥{{ totalAssets }}</text>
            </view>
            <view class="summary-item">
                <text class="label">本月支出</text>
                <text class="value">¥{{ monthlyExpense }}</text>
            </view>
            <view class="summary-item">
                <text class="label">本月收入</text>
                <text class="value">¥{{ monthlyIncome }}</text>
            </view>
        </view>
    </view>
</template>

<script>
// pages/analysis/analysis.js

export default {
    data() {
        return {
            totalAssets: 1250,
            monthlyIncome: 5000,
            monthlyExpense: 750
        };
    },
    onLoad() {
        // 可添加图表数据请求等逻辑
    },
    methods: {}
};
</script>
<style>
/* pages/analysis/analysis.wxss */

.container {
    padding: 30rpx;
    background-color: #fdfdfd;
}

.header .title {
    font-size: 36rpx;
    font-weight: bold;
    margin-bottom: 30rpx;
}

.chart-section {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 40rpx;
}

.chart-img {
    width: 100%;
    height: 300rpx;
    margin-bottom: 10rpx;
}

.desc {
    color: #888;
    font-size: 26rpx;
}

.summary {
    background-color: #fff7cc;
    padding: 30rpx;
    border-radius: 20rpx;
    box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.05);
}

.summary-item {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
    border-bottom: 1px solid #eee;
}

.summary-item:last-child {
    border-bottom: none;
}

.label {
    font-size: 28rpx;
    color: #555;
}

.value {
    font-size: 32rpx;
    font-weight: bold;
    color: #222;
}
</style>
