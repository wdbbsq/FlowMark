<template>
    <div class="container">
        <div class="time">
            <span class="head">Time: </span>{{ time }}
        </div>
        <div class="path">
            <span class="head">Path: </span>{{ ipv4_srcip }}/{{ tcp_srcport }} -> {{ ipv4_dstip }}/{{ tcp_dstport }}
        </div>
        <div class="data">
            <span class="head">Data: </span>{{ data }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlowDetail',
    props: ['time', 'ipv4_srcip', 'ipv4_dstip', 'tcp_srcport', 'tcp_dstport', 'data'],
    data () {
        return {
            seen: false,
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    box-sizing: border-box;
    border: 2px solid rgb(0, 0, 0);
    font-size: 14px;
    text-align: left;
    padding: 8px;
    margin: 8px 0px;
    width: auto;
    line-height: 18px;
}

.data {
    word-break: break-all;
    white-space: normal;
}
</style>
