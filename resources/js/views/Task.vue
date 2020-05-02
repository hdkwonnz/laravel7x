<template>
    <div class="container">
        <div class="row justify-content-center mt-5" v-if="!$gate.isAdminOrAuthor()">
            <h2>You do not have permission to access tasks...</h2>
        </div>

        <!-- 아래 "$gate.isAdmin()"는 ACL 을 위하여... -->
        <!-- v-if 에서는 "$gate.isAdmin()" 식으로 쓰지만 아래 script 에서는-->
        <!-- "this.$gate.isAdmin()" 식으로 쓴다. -->
        <!-- 허락하는 두가지 방법을 보여 준다. -->
        <!-- 아래 isAdminOrAuthor() function은 resources/js/gate.js에 기술 하였다. -->
        <!-- "$gate.isAdmin())" 은 Admin 만 허락할때 -->
        <!-- "$gate.isAdminOrAuthor()" 은 Admin or Athor 를 허락할때 -->
        <div class="row justify-content-center" v-if="$gate.isAdminOrAuthor()">            
            <!-- <div class="col-md-6" v-if="$gate.isAdmin()"> -->
            <div class="col-md-6">    
                <div class="card card-default">
                    <div class="card-header">Add Task</div>
                    <div class="card-body">
                        <form method="POST" @submit.prevent="addTask()">
                            <input v-model="task" class="form-control" required>
                            <button type="submit" class="btn btn-lg btn-primary mt-4">
                                Click
                            </button>
                        </form>                        
                    </div>
                </div>
            </div>            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">All Tasks</div>
                    <div class="card-body">
                        <li style="list-style: none" v-for="(task, id) in tasks" :key="id">{{task.task}}</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Task",
        data (){
            return {
                task: null,
                // tasks: null
                tasks: []
            }
        },
        methods:{
            //we submit the task to the add-task api then clear the input field
            addTask(){
                // 아래 "$gate.isAdmin()"는 ACL 을 위하여...
                // v-if 에서는 "$gate.isAdmin()" 식으로 쓰지만 아래 script 에서는
                // "this.$gate.isAdmin()" 식으로 쓴다.
                // 허락하는 두가지 방법을 보여 준다.
                // 아래 isAdminOrAuthor() function은 resources/js/gate.js에 기술 하였다.

                // if (this.$gate.isAdmin()){ ////Admin 만 허락할때
                if(this.$gate.isAdminOrAuthor()){ ////Admin or Athor 를 허락할때
                    axios.post('api/add-task', {
                    task: this.task,
                    })
                    .then(response => {
                        this.getTask()
                        this.task = null
                    })
                    .catch(error => {            
                        //console.log(error.response.status)
                        if (error.response.status == 403){ //status => error status
                            this.$router.push('/email-verify')
                        }
                    })
                }               
            },

            getTask(){
                if(this.$gate.isAdminOrAuthor()){ ////
                    axios.get('api/get-task')
                    .then(response=>{
                        this.tasks = response.data.tasks
                    })
                    .catch(error => {            
                        //console.log(error.response.status)
                        if (error.response.status == 403){ //status => error status
                            this.$router.push('/email-verify')
                        }
                    })
                }                
            }
        },
        watch: {
        // // whenever task changes, this function will run
        //     task: function (newTask, oldTask) {
        //     this.getTask()
        //     }
        },
        created() {
            this.getTask()
        },
        //before the route is mounted we check if the user is logged in
        beforeRouteEnter (to, from, next) {
            if (!window.Laravel.isLoggedin) {                    
                //return next('/');
                return next('/login');
            }
            next();
        }           
    }
</script>
