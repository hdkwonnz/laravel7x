<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                
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
        name: "UserHome",
        data() {
            return {
                tasks: ""
            }
        },
        created() {
            axios.get('api/home/index').then(response=>{
                    this.tasks = response.data.tasks
            })     
        }
    }
</script>

<style scoped>
    
</style>
