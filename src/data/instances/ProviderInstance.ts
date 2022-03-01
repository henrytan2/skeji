import { PrismaClient } from "@prisma/client";
import IProvider from "../interfaces/IProvider";
import Provider from "../poco/Provider";

const prisma = new PrismaClient();

export default class ProviderInstance implements IProvider {

    async FetchByEmail(email: string): Promise<Provider> {
        let response = new Provider();
        const provider = await prisma.providers.findUnique({
            where: {
                Email: email,
            },
        });
        if (provider != null) {
            response.CreatedBy = provider.CreatedBy;
            response.CreatedOn = provider.CreatedOn;
            response.Email = provider.Email;
            response.ModifiedBy = provider.ModifiedBy != null ? provider.ModifiedBy : undefined;
            response.ModifiedOn = provider.ModifiedOn != null ? provider.ModifiedOn : undefined;
            response.Name = provider.Name;
            response.Password = provider.Password;
            response.UUID = provider.UUID;
        }
        return response;
    }

    async Insert(provider: Provider) {
        throw new Error("Method not implemented.");
    }

    async Delete(providerUUID: string) {
        throw new Error("Method not implemented.");
    }

    async Update(provider: Provider) {
        throw new Error("Method not implemented.");
    }
}