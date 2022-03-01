class CreateProviderRequest {
    name: string;
    password: string;
    email: string;

    constructor(name: string, password:string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}

export default CreateProviderRequest;