export class FormContact  {
    name='';
    email='';
    asunto='';
    message='';

    constructor(name, email, asunto, message){
        this.name = name;
        this.email = email;
        this.asunto = asunto;
        this.message = message;

    }

    get getEmail(){
        return this.email;
    }
    get getAsunto(){
        return this.asunto;
    }
    get getMessage(){
        return this.message;
    }

}