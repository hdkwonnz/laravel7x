<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card card-default">
                        <div class="card-header">Login</div>

                        <div class="card-body">
                            <form method="POST" action="">
                                <div class="form-group row">
                                    <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" v-model="email" required autofocus>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" v-model="password" required>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                            Login
                                        </button> 
                                        <a class="btn text-primary" @click="showForgotForm">
                                            Forgot Your Password?
                                        </a>                                    
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>             
    </div>       
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {                    
                email : "",
                password : "",               
            }
        },
        methods : {           
            showForgotForm()    {
                this.$router.push('/password-request')
                // this.$router.go('/password-request')
            },
            handleSubmit(e){
                e.preventDefault()                    
                if ((this.password.length > 0) && (this.email.length > 0)) {
                    axios.get('/sanctum/csrf-cookie').then(response => {
                        axios.post('api/login', {
                            email: this.email,
                            password: this.password
                        })
                        .then(response => {                                
                            // this.$router.go('/dashboard')
                            this.$router.go('/')
                            // this.$router.push({ name:'home' })
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                    })
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if (window.Laravel.isLoggedin) {
                // return next('/dashboard');
                return next('/');
            }            
            next();
        },            
    }
</script>
