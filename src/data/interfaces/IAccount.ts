import CreateClientRequest from "../poco/account/requests/CreateClientRequest";
import CreateProviderRequest from "../poco/account/requests/CreateProviderRequest";
import CreateAccountResponse from "../poco/account/responses/CreateAccountResponse";
import ForgotPasswordResponse from "../poco/account/responses/ForgotPasswordResponse";
import LoginResponse from "../poco/account/responses/LoginResponse";

interface IAccount {
    ClientLogin(email: string, password: string) : Promise<LoginResponse>;
    CreateClient(createClientRequest : CreateClientRequest) : Promise<CreateAccountResponse>;
    CreateProvider(createProviderRequest: CreateProviderRequest) : Promise<CreateAccountResponse>;
    ForgotClientPassword(email: string) : Promise<ForgotPasswordResponse>;
    ForgotProviderPassword(email: string) : Promise<ForgotPasswordResponse>;
}
export default IAccount;