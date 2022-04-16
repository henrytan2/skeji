import CreateRequest from "../poco/provider/requests/CreateRequest";
import CreateResponse from "../poco/provider/responses/CreateResponse";
import ForgotPasswordResponse from "../poco/provider/responses/ForgotPasswordResponse";
import LoginResponse from "../poco/provider/responses/LoginResponse";

export default interface IProvider {
    Create(request: CreateRequest) : Promise<CreateResponse>;
    Login(email: string, password:string) : Promise<LoginResponse>;
    ForgotPassword(email: string) : ForgotPasswordResponse;
}