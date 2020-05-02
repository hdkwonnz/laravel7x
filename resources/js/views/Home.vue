<template>
    <div>
        <div v-if="!isLoggedIn || $gate.isUser()">
            <user-home></user-home>
        </div>        
        <div v-else-if="$gate.isAdmin()">
            <admin-home></admin-home>
        </div>
        <div v-else-if="$gate.isAuthor()">
            <author-home></author-home>
        </div>        
    </div>
</template>

<script>
    import UserHome from "@/js/components/homes/UserHome.vue";
    import AdminHome from "@/js/components/homes/AdminHome.vue";
    import AuthorHome from "@/js/components/homes/AuthorHome.vue";

    export default {
        name: "Home",
        components: {
            "user-home": UserHome,
            "admin-home": AdminHome,
            "author-home": AuthorHome
        },            
        data() {
            return {                
                isLoggedIn: false
            }
        },
        created() {
            //
        },
        mounted(){
            //Check if the user is Authenticated
            this.isLoggedIn = window.Laravel.isLoggedin
        }
    }
</script>

<style scoped>
    
</style>
