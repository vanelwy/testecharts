<template>
    <div class="content">
        <img v-if="loading" src="../assets/puff.svg">
        <span v-else-if="error">
            {{error}}
            <a href="javascript:;" @click="fetchData">
                <i class="fas fa-redo-alt"></i> reload
            </a>
        </span>
        <div class="chart-container" v-else>
            <v-line :data="chartData" :settings="chartSettings"></v-line>
        </div>
    </div>
</template>

<script>
import VLine from "v-charts/lib/line.common";

export default {
    created() {
        this.fetchData();
    },
    components: {
        VLine
    },
    data() {
        return {
            loading: 0,
            error: "",
            chartSettings: {
                labelMap: {
                    date: "Date",
                    pv: "PV",
                    order: "Order"
                }
            },
            chartData: {
                columns: ["date", "pv", "order"],
                rows: []
            }
        };
    },
    methods: {
        async fetchData() {
            this.loading++;
            this.error = "";
            /** 请求图表数据 */
            const { data } = await this.$axios.get("/hello");
            /** 判断数据是否请求成功 */
            if (data.success) {
                this.chartData.rows = data.data;
            } else {
                /** 记录错误信息 */
                this.error = data.error;
            }
            this.loading--;
        }
    }
};
</script>

<style lang='less' scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    border: 1px solid #efefef;
    padding: 20px;

    a {
        padding: 0 0.5em;
    }
}

.chart-container {
    width: 100%;
}
</style>