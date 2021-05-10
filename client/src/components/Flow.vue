<template>
    <div class="container">
        <div>
            <el-progress :percentage="progress"></el-progress>
        </div>
        <div class="buttonContainer">
            <el-button @click="getAll">{{ btnNote }}</el-button>
            <el-button @click="mark">开始标注</el-button>
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
import bus from "../utils/eventBus";

export default {
    name: 'Flow',
    components: {
        FlowDetail,
    },
    data () {
        return {
            flows: [],
            features: [],
            contentfeatures: [],
            lastFlow: "",
            featureDict: {
                "hot": [], 
                "num_failed_logins": [], 
                "logged_in": [], 
                "num_compromised": [],
                "root_shell": [],
                "su_attempted": [],
                "num_root": [],
                "num_file_creations": [],
                "num_shells": [],
                "num_access_files": [],
                "num_outbound_cmds": [],
                "is_hot_login": [],
                "is_guest_login": [],
            },
            btnNote: "获取所有",
            totalFlow: 0,
            totalContentFeature: 0,
            progress: 0,
            processStatus: "",
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
                this.$message({
                    message: "连接错误，" + err,
                    type: "warning",
                    duration: 1500
                })
            })

            writeJson("1111111111111111111")
        },
        getFeatures(data) {
            this.features = data;
            for (let i = 0; i < data.length; i++) {
                this.featureDict[data[i].type].push({
                    "reg": data[i].reg,
                    "description": data[i].description,
                })
            }
        },
        mark() {
            this.$axios.request({
                method: "get",
                url: "/static/app-config.json",
                baseURL: "http://localhost:8080/"
            })
            .then(res => {
                this.lastFlow = res.data.lastFlow;
            })
            .catch(err => {

            })

            const that = this;
            that.$axios({
                method: "get",
                url: "/contentfeature"
            })
            .then(res => {
                if (this.contentfeatures.length == 0) {
                    this.contentfeatures = res;
                }

                for (let [key, arr] of Object.entries(that.featureDict)) {
                    if (arr.length == 0) continue;
                    else {
                        
                    }
                }
            })
            .catch(err => {
                this.$message({
                    message: "连接错误，" + err,
                    type: "warning",
                    duration: 1500
                })
            })
        },
        readJson() {

        },
        writeJson(time) {
            this.$axios.request({
                method: "post",
                data: {
                    lastFlow: time
                },
                url: "/static/app-config.json",
                baseURL: "http://localhost:8080/"
            })
            .then(res => {
                this.lastFlow = res.data.lastFlow;
            })
            .catch(err => {

            })
        },
    },
    created () {
        this.$bus.on('getFeature', this.getFeatures);
    },
    mounted () {
        this.$axios({
            method: "get",
            url: "/flow/total"
        })
        .then(res => {
            this.totalFlow = res.data;
        })
        .catch(err => {
            this.$message({
                message: "连接错误，" + err,
                type: "warning",
                duration: 1500
            })
        })
        this.$axios({
            method: "get",
            url: "/contentfeature/total"
        })
        .then(res => {
            this.totalContentFeature = res.data;
        })
        .catch(err => {
            this.$message({
                message: "连接错误，" + err,
                type: "warning",
                duration: 1500
            })
        })
    },
    beforeDestroy () {
        this.$bus.off('getFeature', this.getFeatures);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
