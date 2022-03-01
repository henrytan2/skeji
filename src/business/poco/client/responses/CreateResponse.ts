export default class CreateResponse {
    private _Success!: boolean;
    public get Success(): boolean {
        return this._Success;
    }
    public set Success(value: boolean) {
        this._Success = value;
    }
};