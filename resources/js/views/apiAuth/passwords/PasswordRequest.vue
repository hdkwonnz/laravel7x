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
                            <form method="POST" @submit.prevent="passwordEmail()">                                
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <input id="email" v-model="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus>          
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary" >
                                            Send Password Reset Link
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
        name: "PasswordRequest",
        data() {
            return {                    
                email : "",
                message: "",
                messageSw: false,
                error: "",
                errorSw: false
            }
        },
        methods : {
            passwordEmail() {
                axios.post('api/password/email',{
                        email: this.email,                    
                })
                .then(response => {
                    this.message = response.data.message
                    this.messageSw = true                   
                })
                .catch(error => {
                    //console.log(error)
                    this.error = error
                    this.errorSw = true
                })
            },                     
        },
        beforeRouteEnter (to, from, next) {
            if (window.Laravel.isLoggedin) {               
                return next('/');
            }            
            next();
        },            
    }
</script>
