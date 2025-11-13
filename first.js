class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
     viewDetails(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
     }
}