import ClientDetails from "../enums/ClientDetails";
import IClientDetails from "../IClientDetails";


export default interface CreateRequest {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    DOB: Date;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn: Date;
    clientDetails: IClientDetails[];

}