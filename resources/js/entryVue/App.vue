<template>
 <div id="app">
    <div id="nav">
        <nav-bar></nav-bar>
    </div>   
    <main class="py-4">
        <router-view></router-view>
    </main>
</div>
</template>
<script>
    import Navbar from "@/js/components/Navbar.vue";
    
    export default {
        name: "App",
        components: {
            "nav-bar": Navbar
        }
    }
</script>
<style lang="scss">
    #nav {
        // padding: 30px;
        padding-bottom: 50px;       
        a {
            font-weight: bold;
            // color: #2c3e50;
            color: white;
            &.router-link-exact-active {
            color: #42b983;
            }
        }
    }
</style>
