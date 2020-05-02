<template>
  <div class="about container">    
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6">
        <div class="add_some">
          Profile
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="modify">
            Click
        </button> 
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Profile",
  components: {
    //
  },
  methods: {
    modify() {
        axios.post('api/modify-profile', {
                            
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {            
            console.log(error.response.status)
            if (error.response.status == 423){ //status => error status
                this.$router.push('/password-confirm')
            }
        })
    }    
  },
  mounted() {
      //
  },
  beforeRouteEnter (to, from, next) {
      if (!window.Laravel.isLoggedin) {               
          return next('/login');
      }    
      next();
  }            
};
</script>

