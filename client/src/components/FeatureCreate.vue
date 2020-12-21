<template>
    <div class="container">
        <div class="selector">
            <span class="head">Type: </span>
            <el-select v-model="type" placeholder="Please select">
                <el-option 
                    v-for="type in types" 
                    :key="type.id"
                    :value="type.lable"
                >
                    {{ type.lable }}
                </el-option>
            </el-select>
            <el-button type="primary" @click="submit">Add</el-button>
        </div>
        <div class="reg">
            <span class="head">Reg: </span>
            <el-input type="text" placeholder="Input reg" v-model="reg" ></el-input>
        </div>
        <div class="description">
            <span class="head">Description: </span>
            <el-input
                type="text"
                placeholder="Input description of the feature"
                v-model="description"
            >
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeatureCreate",
    data() {
        return {
            types: [
                {
                    id: 1,
                    lable: "hot",
                    description: "",
                },
                {
                    id: 2,
                    lable: "num_failed_logins",
                    description: "",
                },
                {
                    id: 3,
                    lable: "logged_in",
                    description: "",
                },
            ],
            type: "",
            reg: "",
            description: "",
        };
    },
    methods: {
        submit() {
            this.$axios({
                method: "post",
                url: "/feature",
                data: {
                    "type": this.type,
                    "reg": this.reg,
                    "description": this.description
                }
            })
            .then(res => {
                if (res.status == 200) {
                    // call parent method to refresh
                    this.$emit("refreshList");

                    this.type = "";
                    this.reg = "";
                    this.description = "";
                }
                else {
                    console.log("Insert err!")
                }
            })
            .catch(err => {
                console.log("Cannot fetch data")
            })
        }
    }
};
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
    line-height: 22px;
}
</style>