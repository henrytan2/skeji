import CreateRequest from "../poco/client/requests/CreateRequest";
import CreateResponse from "../poco/client/responses/CreateResponse";
import LoginResponse from "../poco/client/responses/LoginResponse";
import ForgotPasswordResponse from "../poco/client/responses/ForgotPasswordResponse";

export default interface IClient {
    Create(request: CreateRequest) : CreateResponse;
    Login(email: string, password:string) : Promise<LoginResponse>;
    ForgotPassword(email: string) : ForgotPasswordResponse;
}