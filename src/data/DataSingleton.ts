import ClientInstance from "./instances/ClientInstance";
import ProviderInstance from "./instances/ProviderInstance";
import IClient from "./interfaces/IClient";
import IProvider from "./interfaces/IProvider";

class DataSingletonInstance implements IDataSingleton {

    Client: IClient;
    Provider: IProvider;
    

    constructor() {
        this.Client = new ClientInstance();
        this.Provider = new ProviderInstance();
    }
}

export default class DataSingleton {
    private static instance : IDataSingleton = new DataSingletonInstance();

    public static Client = DataSingleton.instance.Client;
    public static Provider = DataSingleton.instance.Provider;
}

interface IDataSingleton {
    Client: IClient;
    Provider: IProvider;
}

