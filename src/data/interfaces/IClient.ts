import Client from "../poco/Client";

export default interface IClient {
    FetchByEmail(email: string) : Promise<Client>;
    Insert(client: Client);
    Delete(clientUUID: string);
    Update(client: Client);
}