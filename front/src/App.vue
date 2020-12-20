<template>
    <div id="app">
        <div class="left">
            <h1>Feature</h1>
            <Feature/>
        </div>
        <div class="right">
            <h1>Flow</h1>
            <Flow/>
        </div>
    </div>
</template>

<script>
import Feature from './components/Feature';
import Flow from './components/Flow';

export default {
    name: 'App',
    components: {
        Feature,
        Flow,
    }
}
</script>

<style>
#app {
    font-family: "Consolas", "Mircsoft Yahei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.left, .right {
    width: 40%;
}

h1 {
    font-size: 24px;
    font-weight: 800;
}

.head {
    font-weight: bold;
}
</style>
