export default interface ClientPoco {
    UUID?: string;
    firstName: string;
    lastName:  string;
    email: string;
    DOB: Date;
    password: string;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn: Date;
}