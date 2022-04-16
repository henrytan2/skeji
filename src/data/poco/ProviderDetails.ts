export default class ProviderDetails {
    private _providerUUID!: string;
    public get providerUUID(): string {
        return this._providerUUID;
    }
    public set providerUUID(value: string) {
        this._providerUUID = value;
    }
    private _key!: string;
    public get key(): string {
        return this._key;
    }
    public set key(value: string) {
        this._key = value;
    }
    private _value!: string;
    public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this._value = value;
    }
}