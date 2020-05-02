<template>
    <div>       
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Verify Your Email Address</div>

                        <div class="card-body">                          
                            <div class="alert alert-success" role="alert">
                                A fresh verification link has been sent to your email address.
                            </div>                          
                                Before proceeding, please check your email for a verification link.
                                If you did not receive the email,
                            <form class="d-inline" method="POST" @submit.prevent="resend()">                               
                                <button type="submit" class="btn btn-link p-0 m-0 align-baseline">click here to request another</button>.
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
        name: "Verify",
        data(){
            return {
                
            }
        },
        methods : {
            resend() {
                axios.post('/api/email/resend',{                            
                        })
                .then(response => {
                    console.log(response)                    
                })
                .catch(error => {
                    console.log(error)                           
                })
            },
        },
        beforeRouteEnter (to, from, next) {
            if (!window.Laravel.isLoggedin) {               
                return next('/login');
            }            
            next();
        },            
    }
</script>
