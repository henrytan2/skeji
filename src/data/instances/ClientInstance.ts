import { PrismaClient } from "@prisma/client";
import IClient from "../interfaces/IClient";
import Client from "../poco/Client";
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient();

export default class ClientInstance implements IClient {
    async FetchByEmail(email: string): Promise<Client> {
        let response = new Client();
        const client = await prisma.clients.findUnique({
            where: {
                Email: email,
            },
        });
        if (client !== null) {
            response.CreatedBy = client.CreatedBy;
            response.CreatedOn = client.CreatedOn;
            response.Email = client.Email;
            response.ModifiedBy = client.ModifiedBy != null ? client.ModifiedBy : undefined;
            response.ModifiedOn = client.ModifiedOn != null ? client.ModifiedOn : undefined;
            response.FirstName = client.FirstName;
            response.LastName = client.LastName;
            response.Password = client.Password;
            response.UUID = client.UUID;
            response.DOB = client.DOB
        }
        return response;
    }

    async Delete(clientUUID: string) {
        const deletedUser = await prisma.clients.delete({
            where: {
                UUID: clientUUID,
            }
        })
    }

    async Insert(client: Client) {
        const newClient = await prisma.clients.create({
            data: {
                CreatedBy: client.CreatedBy,
                CreatedOn: client.CreatedOn,
                Email: client.Email,
                ModifiedBy: client.ModifiedBy,
                ModifiedOn: client.ModifiedOn,
                FirstName: client.FirstName,
                LastName: client.LastName,
                Password: client.Password,
                UUID: new uuidv4(),
                DOB: client.DOB,
            }
        });
    }


    async Update(client: Client) {
        const updateClient = await prisma.clients.update({
            where: {
                UUID: client.UUID,
            },
            data: {
                CreatedBy: client.CreatedBy,
                CreatedOn: client.CreatedOn,
                Email: client.Email,
                ModifiedBy: client.ModifiedBy,
                ModifiedOn: client.ModifiedOn,
                FirstName: client.FirstName,
                LastName: client.LastName,
                Password: client.Password,
                DOB: client.DOB,
            }
        })
    }
}