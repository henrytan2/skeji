export default class Provider {
  private _UUID!: string;
    public get UUID(): string {
        return this._UUID;
    }
    public set UUID(value: string) {
        this._UUID = value;
    }
  private _Name!: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(value: string) {
        this._Name = value;
    }
  private _Email!: string;
    public get Email(): string {
        return this._Email;
    }
    public set Email(value: string) {
        this._Email = value;
    }
  private _Password!: string;
    public get Password(): string {
        return this._Password;
    }
    public set Password(value: string) {
        this._Password = value;
    }
  private _CreatedBy!: string;
    public get CreatedBy(): string {
        return this._CreatedBy;
    }
    public set CreatedBy(value: string) {
        this._CreatedBy = value;
    }
  private _CreatedOn!: Date;
    public get CreatedOn(): Date {
        return this._CreatedOn;
    }
    public set CreatedOn(value: Date) {
        this._CreatedOn = value;
    }
  private _ModifiedBy?: string | undefined;
    public get ModifiedBy(): string | undefined {
        return this._ModifiedBy;
    }
    public set ModifiedBy(value: string | undefined) {
        this._ModifiedBy = value;
    }
  private _ModifiedOn?: Date | undefined;
    public get ModifiedOn(): Date | undefined {
        return this._ModifiedOn;
    }
    public set ModifiedOn(value: Date | undefined) {
        this._ModifiedOn = value;
    }
}
