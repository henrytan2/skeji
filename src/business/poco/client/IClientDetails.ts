import ClientDetails from "./enums/ClientDetails";

export default interface IClientDetails {
    clientUUID: string,
    key: ClientDetails,
    value: string,
}