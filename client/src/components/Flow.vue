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
                :path="flow.path"
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
                    let arr = [];
                    for (let i = 0; i < res.data.length; i++) {
                        let tmpObj = {
                            "_id": res.data[i]._id,
                            "time": res.data[i].time,
                            "path": res.data[i].ipv4_srcip + "/" + res.data[i].tcp_srcport + " -> " + res.data[i].ipv4_dstip + "/" + res.data[i].tcp_dstport,
                            "data": res.data[i].data
                        }
                        arr.push(tmpObj);
                    }
                    this.flows = arr;
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
