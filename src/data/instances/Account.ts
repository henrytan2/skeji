import { PrismaClient } from "@prisma/client"
import IAccount from "../interfaces/IAccount"
import CreateAccountResponse from "../poco/account/responses/CreateAccountResponse"
import CreateProviderResponse from "../poco/account/responses/CreateAccountResponse"
import ForgotPasswordResponse from "../poco/account/responses/ForgotPasswordResponse"
import LoginResponse from "../poco/account/responses/LoginResponse"
import CryptoJS from "crypto-js"
import CreateProviderRequest from "../poco/account/requests/CreateProviderRequest"
import {v4 as uuidv4} from "uuid"
import CreateClientRequest from "../poco/account/requests/CreateClientRequest"

const prisma = new PrismaClient();

export default class Account implements IAccount {
    async ClientLogin(email: string, password: string): Promise<LoginResponse> {
        let response = new LoginResponse(false);
        let passwordHashed = CryptoJS.SHA256(password).toString();
        const client = await prisma.clients.findUnique({
            where: {
                Email: email,
            }
        });

        if (client?.Password == passwordHashed) {
            response.Successful = true;
        }
        return response;
    }

    async CreateClient(request : CreateClientRequest): Promise<CreateAccountResponse> {
        let response = new CreateAccountResponse(false);
        let passwordHashed = CryptoJS.SHA256(request.password).toString();
        var clientUUID = new uuidv4();
        const newClient = prisma.clients.create({
            data: {
                UUID: clientUUID,
                FirstName: request.firstname,
                LastName: request.lastname,
                Email: request.email,
                Password: passwordHashed,
                DOB: request.dob,
                CreatedOn: new Date(),
                CreatedBy: clientUUID,
                ModifiedOn: new Date(),
                ModifiedBy: clientUUID,
            },
        }).then(() => {
            response.Success = true;
        });
        return response;
    }
    async CreateProvider(request: CreateProviderRequest): Promise<CreateAccountResponse> {
        let response = new CreateProviderResponse(false);
        let passwordHashed = CryptoJS.SHA256(request.password).toString();
        var providerUUID = new uuidv4();
        const newProvider = prisma.providers.create({
            data: {
                UUID: providerUUID,
                Name: request.name,
                Email: request.email,
                Password: passwordHashed,
                CreatedOn: new Date(),
                CreatedBy: providerUUID,
                ModifiedOn: new Date(),
                ModifiedBy: providerUUID,
            },
        }).then(() => {
            response.Success = true;
        });
        return response;

    }

    async ForgotClientPassword(email: string): Promise<ForgotPasswordResponse> {
        let response = new ForgotPasswordResponse(false);
        const client = await prisma.clients.findUnique({
            where: {
                Email: email,
            },
        }).then((dataResponse) => {
            if (dataResponse != null) {
                response.Success = true;
            }
            else {
                response.Success = false;
            }
        })
        return response;
    }
    async ForgotProviderPassword(email: string): Promise<ForgotPasswordResponse> {
        let response = new ForgotPasswordResponse(false);
        const provider = await prisma.providers.findUnique({
            where: {
                Email: email,
            },
        }).then((dataResponse) => {
            if (dataResponse != null) {
                response.Success = true;
            }
            else {
                response.Success = false;
            }
        })
        return response;
    }

}