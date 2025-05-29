<script>
export default {
    data() {
        return {};
    },
    onLaunch() {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        } else {
            wx.cloud.init({
                env: 'cloud1-8gqsu82xcb7d3638',
                // 替换成你自己的云环境ID（可选，默认当前环境）
                traceUser: true // 开启用户访问记录（可选）
            });
        }
    },
    globalData: {}
};
</script>
<style>
.safe-area-top {
    padding-top: var(--status-bar-height, 65px); /* 默认 44px 防止第一次没取到值 */
}
/* common.wxss */
.btn-primary {
    background-color: #ffd600;
    color: #000;
    border-radius: 8px;
    padding: 10px;
}
</style>
