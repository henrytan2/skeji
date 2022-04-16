import Provider from "../poco/Provider";

export default interface IProvider {
    FetchByEmail(email: string) : Promise<Provider>;
    Insert(provider: Provider) : Promise<Provider>;
    Delete(providerUUID: string);
    Update(provider: Provider);
}