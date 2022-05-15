import ClientDetails from "../enums/ClientDetails";
import IClientDetails from "../IClientDetails";

class CreateRequest {
    private _firstName!: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set FirstName(value: string) {
        this._firstName = value;
    }
    private _lastName!: string;
    public get LastName(): string {
        return this._lastName;
    }
    public set LastName(value: string) {
        this._lastName = value;
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
    private _DOB!: Date;
    public get DOB(): Date {
        return this._DOB;
    }
    public set DOB(value: Date) {
        this._DOB = value;
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
    private _modifiedBy?: string | undefined;
    public get modifiedBy(): string | undefined {
        return this._modifiedBy;
    }
    public set modifiedBy(value: string | undefined) {
        this._modifiedBy = value;
    }
    private _modifiedOn?: Date | undefined;
    public get modifiedOn(): Date | undefined {
        return this._modifiedOn;
    }
    public set modifiedOn(value: Date | undefined) {
        this._modifiedOn = value;
    }
    private _ClientDetails: IClientDetails[] = [];
    public get ClientDetails(): IClientDetails[] {
        return this._ClientDetails;
    }
    public set ClientDetails(value: IClientDetails[]) {
        this._ClientDetails = value;
    }
}

export default CreateRequest;