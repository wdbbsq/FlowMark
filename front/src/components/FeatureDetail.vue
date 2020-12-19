<template>
    <div class="container">
        <div class="type">
            <span class="head">Type: </span>{{ type }}
        </div>
        <div class="reg">
            <span class="head">reg: </span>{{ reg }}
        </div>
        <div class="description">
            <span class="head">Description: </span>{{ description }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureDetail',
    props: ['type', 'reg', 'description'],
    data () {
        return {
            msg: ''
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

.type {
    font-weight: 200;
}

</style>
