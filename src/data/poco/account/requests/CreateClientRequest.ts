class CreateClientRequest {
    firstname: string;
    lastname: string;
    password: string;
    dob: Date;
    email: string;

    constructor(firstname: string, lastname: string, password:string, dob: Date, email: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.dob = dob;
        this.email = email;
    }
}

export default CreateClientRequest;