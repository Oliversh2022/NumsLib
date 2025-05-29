<template>
    <view class="container">
        <!-- 用户头像和昵称 -->
        <view class="user-info">
            <image class="avatar" :src="userInfo.avatarUrl" mode="aspectFill" />
            <text class="nickname">{{ userInfo.nickName }}</text>
        </view>

        <!-- 资产概览 -->
        <view class="asset-summary">
            <text class="title">资产总览</text>
            <view class="amount">¥{{ totalAssets }}</view>
        </view>

        <!-- 快捷功能入口 -->
        <view class="quick-actions">
            <view class="action-item" @tap="goToDetails">
                <image src="/static/images/details.png" />
                <text>资产明细</text>
            </view>
            <view class="action-item" @tap="goToRecords">
                <image src="/static/images/record.png" />
                <text>收支记录</text>
            </view>
            <view class="action-item" @tap="goToGoals">
                <image src="/static/images/goals.png" />
                <text>理财目标</text>
            </view>
            <view class="action-item" @tap="goToSettings">
                <image src="/static/images/settings.png" />
                <text>设置</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                avatarUrl: '/images/default-avatar.png',
                nickName: '点击登录'
            },
            totalAssets: '1250'
        };
    },
    methods: {
        goToDetails() {
            uni.navigateTo({
                url: '/pages/details/details'
            });
        },

        goToRecords() {
            uni.navigateTo({
                url: '/pages/records/records'
            });
        },

        goToGoals() {
            uni.navigateTo({
                url: '/pages/goals/goals'
            });
        },

        goToSettings() {
            uni.navigateTo({
                url: '/pages/settings/settings'
            });
        }
    }
};
</script>
<style>
.container {
    padding: 20rpx;
    background-color: #f5f5f5;
}

.user-info {
    display: flex;
    align-items: center;
    margin-bottom: 40rpx;
}

.avatar {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    margin-right: 20rpx;
}

.nickname {
    font-size: 36rpx;
    font-weight: bold;
}

.asset-summary {
    background-color: #fff;
    padding: 40rpx;
    border-radius: 20rpx;
    margin-bottom: 40rpx;
    box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.05);
}

.asset-summary .title {
    font-size: 28rpx;
    color: #888;
}

.asset-summary .amount {
    font-size: 48rpx;
    font-weight: bold;
    margin-top: 10rpx;
    color: #333;
}

.quick-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.action-item {
    width: 45%;
    background-color: #fff;
    border-radius: 20rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    text-align: center;
    box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.05);
}

.action-item image {
    width: 60rpx;
    height: 60rpx;
    margin-bottom: 10rpx;
}
.asset-summary {
    background-color: #ffe066;
    padding: 20rpx;
    border-radius: 16rpx;
    margin: 20rpx 0;
}
.quick-actions {
    display: flex;
    flex-direction: column;
    gap: 16rpx; /* 按钮之间的间距 */
    margin-left: 32rpx; /* 靠左一些 */
}

.action-item {
    width: 180rpx;
    height: 70rpx;
    line-height: 70rpx;
    display: flex;
    text-align: center;
    justify-content: flex-start;
    padding-left: 9rpx;
    background-color: #ffffff;
    border: 1rpx solid #ccc;
    border-radius: 12rpx;
    font-size: 28rpx;
    color: #333;
}
</style>
