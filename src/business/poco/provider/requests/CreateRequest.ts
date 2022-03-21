class CreateRequest {
    private _name!: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _password!: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    private _email!: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    private _createdBy!: string;
    public get createdBy(): string {
        return this._createdBy;
    }
    public set createdBy(value: string) {
        this._createdBy = value;
    }
    private _createdOn!: Date;
    public get createdOn(): Date {
        return this._createdOn;
    }
    public set createdOn(value: Date) {
        this._createdOn = value;
    }
    private _modifiedBy!: string;
    public get modifiedBy(): string {
        return this._modifiedBy;
    }
    public set modifiedBy(value: string) {
        this._modifiedBy = value;
    }
    private _modifiedOn?: Date | undefined;
    public get modifiedOn(): Date | undefined {
        return this._modifiedOn;
    }
    public set modifiedOn(value: Date | undefined) {
        this._modifiedOn = value;
    }
}

export default CreateRequest;