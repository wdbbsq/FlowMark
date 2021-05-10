<template>
    <div class="container">
        <div class="searchBar">

        </div>
        <FeatureCreate
            @refreshList="getData"
        ></FeatureCreate>
        
        <FeatureDetail
            v-for="feature in features"
            :key="feature._id"
            :id="feature._id"
            :type="feature.type"
            :reg="feature.reg"
            :description="feature.description"
            @refreshList="getData"
        ></FeatureDetail>
    </div>
</template>

<script>
import FeatureDetail from './FeatureDetail';
import FeatureCreate from './FeatureCreate';

export default {
    name: 'Feature',
    components: {
        FeatureDetail,
        FeatureCreate,
    },
    data () {
        return {
            features: [],
            type: "",
            reg: "",
            description: "",
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            this.$axios({
                method: "get",
                url: "/feature"
            })
            .then(res => {
                this.features = res.data;
                this.type = "";
                this.reg = "";
                this.description = "";

                this.$bus.emit("getFeature", this.features);
            })
            .catch(err => {
                this.$message({
                    message: "连接错误，" + err,
                    type: "warning",
                    duration: 1500
                })
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
