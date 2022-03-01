import IClient from "../interfaces/IClient";
import CreateRequest from "../poco/client/requests/CreateRequest";
import CreateResponse from "../poco/client/responses/CreateResponse";
import LoginResponse from "../poco/client/responses/LoginResponse"
import ForgotPasswordResponse from "../poco/client/responses/ForgotPasswordResponse";
import CryptoJS from "crypto-js";
import DataSingleton from "../../data/DataSingleton";
import ClientPoco from "../../data/poco/Client";

export default class Client implements IClient {
    Create(request: CreateRequest): CreateResponse {
        let response = new CreateResponse();
        let client = new ClientPoco();
        client.Email = request.Email;
        client.CreatedBy = request.CreatedBy;
        client.CreatedOn = request.CreatedOn;
        client.ModifiedBy = request.ModifiedBy;
        client.ModifiedOn = request.ModifiedOn;
        client.DOB = request.DOB;
        client.FirstName = request.FirstName;
        client.LastName = request.LastName;
        client.Password = request.Password;
        try {
            DataSingleton.Client.Insert(client);
            response.Success = true;
        } 
        catch (e) {
            // create account handling
        }
        return response;
    }
    async Login(email: string, password: string): Promise<LoginResponse >{
        let client = DataSingleton.Client.FetchByEmail(email);
        let passwordHashed = CryptoJS.SHA256(password).toString();
        let response = new LoginResponse();
        response.Success = false;

        if ((await client)?.Password == passwordHashed) {
            response.Success = true;
        }
        return response;
    }
    ForgotPassword(email: string): ForgotPasswordResponse {
        throw new Error("Method not implemented.");
    } 
}

// async CreateClient(request : CreateClientRequest): Promise<CreateAccountResponse> {
//     let response = new CreateAccountResponse(false);
//     let passwordHashed = CryptoJS.SHA256(request.password).toString();
//     var clientUUID = new uuidv4();
//     const newClient = prisma.clients.create({
//         data: {
//             UUID: clientUUID,
//             FirstName: request.firstname,
//             LastName: request.lastname,
//             Email: request.email,
//             Password: passwordHashed,
//             DOB: request.dob,
//             CreatedOn: new Date(),
//             CreatedBy: clientUUID,
//             ModifiedOn: new Date(),
//             ModifiedBy: clientUUID,
//         },
//     }).then(() => {
//         response.Success = true;
//     });
//     return response;
// }