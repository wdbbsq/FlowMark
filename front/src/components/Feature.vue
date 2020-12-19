<template>
    <div class="container">
        <div class="searchBar">

        </div>
        <FeatureCreate></FeatureCreate>
        <FeatureDetail
            v-for="feature in features"
            :key="feature._id"
            :type="feature.type"
            :reg="feature.reg"
            :description="feature.description"
        >
        </FeatureDetail>
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
