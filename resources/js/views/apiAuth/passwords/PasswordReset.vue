<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Reset Password</div>

                        <div class="card-body">
                            <div class="alert alert-success" role="alert" v-if="messageSw">
                                {{ message }}
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="errorSw">
                                {{ error }}
                            </div>
                            <form method="POST" @submit.prevent="passwordReset()">                              
                                <input type="hidden" name="token" v-model="token">                                
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" name="email" v-model="email" required autocomplete="email" autofocus>                  
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password" v-model="password" required autocomplete="new-password">                                        
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="password_confirmation" required autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Reset Password
                                        </button>
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
        name: "PasswordReset",
        data(){
            return {
                token: "",          
                email : "",
                password : "",
                password_confirmation : "",
                message: "",
                messageSw: false,
                error: "",
                errorSw: false
            }
        },
        methods : {
            passwordReset() {
                if (this.password === this.password_confirmation){
                    axios.get('/sanctum/csrf-cookie').then(response => {
                        axios.post('/api/password/reset',{
                            token: this.token,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        })
                        .then(response => {
                            // console.log(response)
                            // this.message = response.data.message
                            // this.messageSw = true
                            // this.token = "",          
                            // this.email = "",
                            // this.password = "",
                            // this.password_confirmation = ""
                            //Initialize CSRF protection for the application
                            // this.$router.go('/dashboard')
                            this.$router.go('/')
                        })
                        .catch(error => {
                            // console.log(error)
                            this.error = error
                            this.errorSw = true
                        })                   
                    });                    
                } else {
                    this.password = "";
                    this.passwordConfirm = "";
                    return alert('Passwords do not match');
                }                
            },                     
        },
        computed: {
            tokenId() {
                this.token = this.$route.params.tokenId
                //return this.token                 
            }
        },
        created() {
            // console.log("router", this.$router)
            // console.log("router", this.$route)
        },
        beforeRouteEnter (to, from, next) {
            if (window.Laravel.isLoggedin) {               
                return next('/');
            }            
            next();
        },
    }
</script>
