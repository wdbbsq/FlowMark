<template>
    <div class="container" @mouseenter="enter" @mouseleave="leave">
        <div class="type">
            <span class="head">Type: </span>{{ type }}
            <i class="el-icon-edit" 
                v-if="seen"
                @click="editFeature"
            ></i>
        </div>
        <div class="reg">
            <span class="head">reg: </span>{{ reg }}
        </div>
        <div class="description">
            <span class="head">Description: </span>{{ description }}
            <i class="el-icon-delete" 
                v-if="seen"
                @click="deleteFeature"
            ></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureDetail',
    props: ['id', 'type', 'reg', 'description'],
    data () {
        return {
            seen: false,
        }
    },
    methods: {
        enter() {
            this.seen = true;
        },
        leave() {
            this.seen = false;
        },
        deleteFeature() {
            console.log(this.id);
            this.$axios({
                method: "delete",
                url: "/feature/" + this.id,
            })
            .then(res => {
                if (res.status == 200) {
                    // call parent method to refresh
                    this.$emit("refreshList");
                }
                else {
                    console.log("Delete err!")
                }
            })
            .catch(err => {
                console.log("Cannot fetch data")
            })
        },
        editFeature() {

        }
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

</style>
