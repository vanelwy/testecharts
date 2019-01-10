<template>
    <div>
        <div class="toolbar">
            <div class="toolbar-title">
                <strong class="primary--text">LANTERN</strong>
                <span class="font-weight-light">CHARTS</span>
            </div>
        </div>

        <div class="content">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CountbyYear from "./components/CountbyYear"
export default {
    name: "App",
    components: {
        CountbyYear
    },
    data() {
        return {
            //
        };
    }
};
</script>
<style lang="less" scoped>
.toolbar {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    &-title {
        font-size: 2rem;
        font-weight: 300;
        strong {
            font-weight: 500;
        }
        span {
            color: #409eff;
        }
    }
    padding: 1em 2em;
}
.container {
    flex-basis: 1024px;
}
.content {
    display: flex;
    justify-content: center;
    padding: 2rem;
}
</style>
