<template>
    <div class="container">
        <div class="buttonContainer">
            <el-button @click="getAll">{{ btnNote }}</el-button>
        </div>
        <div class="flow-container">
            <FlowDetail
                v-for="flow in flows"
                :key="flow._id"
                :time="flow.time"
                :ipv4_srcip="flow.ipv4_srcip"
                :ipv4_dstip="flow.ipv4_dstip"
                :tcp_srcport="flow.tcp_srcport"
                :tcp_dstport="flow.tcp_dstport"
                :data="flow.data"    
            ></FlowDetail>
        </div>
    </div>
</template>

<script>
import FlowDetail from './FlowDetail'

export default {
    name: 'Flow',
    components: {
        FlowDetail,
    },
    data () {
        return {
            flows: [],
            btnNote: "获取所有",
        }
    },
    methods: {
        async getAll() {
            this.$axios({
                method: "get",
                url: "/flow"
                })
                .then(res => {
                    this.flows = res.data;
                })
                .catch(err => {
                    console.log("Cannot fetch data")
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
