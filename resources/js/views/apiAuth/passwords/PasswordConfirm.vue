<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Confirm Password</div>

                        <div class="card-body">
                            Please confirm your password before continuing.
                            <form method="POST" @submit.prevent="passwordConfirm()">                               
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password" v-model="password" required autocomplete="current-password">
                                        <span v-if="errors.password" class="error text-danger">{{ errors.password[0] }}</span>                          
                                    </div>                                   
                                </div>
                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Confirm Password
                                        </button>                                       
                                        <a class="btn btn-link" @click="showForgotForm">
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
        name: "PasswordConfirm",
        data(){
            return {
                password : "",
                errors: []               
            }
        },
        methods : {
            showForgotForm()    {
                //this.$router.push('/password-request')
                this.$router.go('/password-request')
            },
            passwordConfirm() {
                axios.post('/api/password/confirm',{
                    password : this.password
                })
                .then(response => {
                    console.log(response)
                    this.$router.push('/profile')
                })
                .catch(error => {
                    console.log(error.response.status)
                    if (error.response.status == 422){ //status => error status
                            this.errors = error.response.data.errors;
                    } ////매우중요
                }) 
            }    
        },
        beforeRouteEnter (to, from, next) {
            if (!window.Laravel.isLoggedin) {               
                return next('/login');
            }              
            next();
        }            
    }
</script>
