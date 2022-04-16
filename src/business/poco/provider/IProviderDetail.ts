import ProviderDetails from "./enums/ProviderDetails";

export default interface IProviderDetails {
    providerUUID: string,
    key: ProviderDetails,
    value: string,
}