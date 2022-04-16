import IProviderDetails from "./interfaces/IProviderDetails";
import ClientInstance from "./instances/ClientInstance";
import ProviderDetailsInstance from "./instances/ProviderDetailsInstance";
import ProviderInstance from "./instances/ProviderInstance";
import IClient from "./interfaces/IClient";
import IProvider from "./interfaces/IProvider";

class DataSingletonInstance implements IDataSingleton {

    Client: IClient;
    Provider: IProvider;
    ProviderDetails: IProviderDetails;
    

    constructor() {
        this.Client = new ClientInstance();
        this.Provider = new ProviderInstance();
        this.ProviderDetails = new ProviderDetailsInstance();
    }
}

export default class DataSingleton {
    private static instance : IDataSingleton = new DataSingletonInstance();

    public static Client = DataSingleton.instance.Client;
    public static Provider = DataSingleton.instance.Provider;
    public static ProviderDetails = DataSingleton.instance.ProviderDetails;
}

interface IDataSingleton {
    Client: IClient;
    Provider: IProvider;
    ProviderDetails: IProviderDetails;
}

