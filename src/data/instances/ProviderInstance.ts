import { PrismaClient } from "@prisma/client";
import IProvider from "../interfaces/IProvider";
import Provider from "../poco/Provider";
import { v4 as uuidv4 } from "uuid"

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

    async Delete(providerUUID: string) {
        const deletedUser = await prisma.providers.delete({
            where: {
                UUID: providerUUID,
            }
        })
    }

    async Insert(provider: Provider) {
        const newProvider = await prisma.providers.create({
            data: {
                UUID: new uuidv4(),
                Name: provider.Name,
                Email: provider.Email,
                Password: provider.Password,
                CreatedBy: provider.CreatedBy,
                CreatedOn: provider.CreatedOn,
                ModifiedBy: provider.ModifiedBy,
                ModifiedOn: provider.ModifiedOn,
            }
        });
    }

    async Update(provider: Provider) {
        const updatedProvider = await prisma.providers.update({
            where: {
                UUID: provider.UUID,
            },
            data: {
                Name: provider.Name,
                Email: provider.Email,
                Password: provider.Password,
                CreatedBy: provider.CreatedBy,
                CreatedOn: provider.CreatedOn,
                ModifiedBy: provider.ModifiedBy,
                ModifiedOn: provider.ModifiedOn,
            }
        })
    }
}