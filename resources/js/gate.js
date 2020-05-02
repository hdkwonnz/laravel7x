// ACL forntend(vue)를 위해 만듬...09/04/2020
// 아래의 user 는 resources/views/entryView/index.blade.php 에 정의 되었다.
export default class Gate{
    constructor(user){
        this.user = user;
    }

    isAdmin(){
        return this.user.role == 'admin';
    }

    isUser(){
        return this.user.role == 'user';
    }

    isAuthor(){
        return this.user.role == 'author';
    }

    isAdminOrAuthor(){
        if(this.user.role == 'admin' || this.user.role == 'author'){
            return true;
        }       
    }

    isAuthorOrUser(){
        if(this.user.role === 'user' || this.user.role === 'author'){
            return true;
        }       
    }
    
}