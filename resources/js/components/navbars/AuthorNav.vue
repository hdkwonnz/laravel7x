<template>
    <div>       
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-secondary">
            <div class="container">
                <router-link class="navbar-brand" to="/">AirLock</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/task" class="nav-link">Task</router-link>
                        </li>
                            <li class="nav-item">
                            <router-link to="/notice" class="nav-link">Notice</router-link>
                        </li>                                      
                    </ul>               
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">Login</router-link>
                        </li>   
                        <li class="nav-item">
                            <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'passwordConfirm' }" class="nav-link text-white" v-if="isLoggedIn">Hi, {{ name }}</router-link>
                        </li>                                                        
                        <a class="nav-link" v-if="isLoggedIn" @click="logout"> Logout</a>
                    </ul>           
                </div>
            </div>
        </nav>     
    </div>
</template>

<script>
export default {
    name: 'AuthorNav',
    data(){
        return {
            isLoggedIn : false,
            name : null
        }
    },
    methods: {
        logout(){
            axios.get('api/logout')
            .then(response => {
                this.isLoggedIn = false
                this.name = null
                this.$router.go('/')
            })
            .catch(error => {
                console.error(error);
            })
        }           
    },
    mounted(){
        //Check if the user is Authenticated
        this.isLoggedIn = window.Laravel.isLoggedin
        this.isLoggedIn ? this.name = window.Laravel.user['name'] : this.name = null
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // a:hover {
    //     background-color: yellow;
    // }
    a {
        cursor:pointer;
    }
</style>
