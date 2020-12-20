<template>
    <div class="container">
        <div class="buttonContainer">

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
        }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
