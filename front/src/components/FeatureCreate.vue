<template>
    <div class="container">
        <div class="selector">
            <span class="head">Type: </span>
            <select
                v-model="type"
                name="Type"
            >
                <option
                    v-for="type in types"
                    :key=type.id
                >   
                    {{ type.type }}
                </option>
            </select>
        </div>
        <div class="reg">
            <span class="head">reg: </span>
            <input 
                type="text"
                placeholder="Input reg"
                v-model="reg"
            >
        </div>
        <div class="description">
            <span class="head">Description: </span>
            <input 
                type="text"
                placeholder="Input description of the feature"
                v-model="description"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureCreate',
    props: [''],
    data () {
        return {
            types: [{
                id: 1,
                type: "hot",
                description: ""
            }, {
                id: 2,
                type: "num_failed_logins",
                description: ""
            }, {
                id: 3,
                type: "logged_in",
                description: ""
            }],
            type: "",
            reg: "",
            description: "",
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
        line-height: 22px;
    }

</style>