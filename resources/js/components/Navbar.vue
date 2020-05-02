<template>
    <div>        
        <div v-if="!isLoggedIn || $gate.isUser()">
            <user-nav></user-nav>
        </div>        
        <div v-else-if="$gate.isAdmin()">
            <admin-nav></admin-nav>
        </div>
        <div v-else-if="$gate.isAuthor()">
            <author-nav></author-nav>
        </div>               
    </div>
</template>

<script>
    import UserNav from "@/js/components/navbars/UserNav.vue";
    import AdminNav from "@/js/components/navbars/AdminNav.vue";
    import AuthorNav from "@/js/components/navbars/AuthorNav.vue";

    export default {       
        name: 'Navbar',
        components: {
                "user-nav": UserNav,
                "admin-nav": AdminNav,
                "author-nav": AuthorNav
        },            
        data(){
            return {
                isLoggedIn : false               
            }
        },
        methods: {
            //
        },
        mounted(){
            //Check if the user is Authenticated
            this.isLoggedIn = window.Laravel.isLoggedin          
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    //
</style>
