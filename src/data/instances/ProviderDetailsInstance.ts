import { PrismaClient } from "@prisma/client";
import ProviderDetails from "../poco/ProviderDetails";
import IProviderDetails from "../interfaces/IProviderDetails";

const prisma = new PrismaClient();

export default class ProviderDetailsInstance implements IProviderDetails {
    async Insert(providerDetail: ProviderDetails) {
        const newProvider = await prisma.providerDetails.create({
            data: {
                ProviderUUID: providerDetail.providerUUID,
                Key: providerDetail.key,
                Value: providerDetail.value,
            }
        });
    }
    
}