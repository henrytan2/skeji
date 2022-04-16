import ProviderDetails from "../enums/ProviderDetails";
import IProviderDetails from "../IProviderDetail";

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
    private _ProviderDetails: IProviderDetails[] = [];
    public get ProviderDetails(): IProviderDetails[] {
        return this._ProviderDetails;
    }
    public set ProviderDetails(value: IProviderDetails[]) {
        this._ProviderDetails = value;
    }
}

export default CreateRequest;