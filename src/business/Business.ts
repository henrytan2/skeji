import IProvider from "./interfaces/IProvider";
import IClient from "./interfaces/IClient";
import Client from "./instances/Client";
import Provider from "./instances/Provider";

class BusinessSingletonInstance implements IBusinessSingleton {
    Client: IClient;
    Provider: IProvider;

    constructor() {
        this.Client = new Client();
        this.Provider = new Provider();
    }
}

export default class Business {
    private static instance : IBusinessSingleton = new BusinessSingletonInstance();
    
    public static Client = Business.instance.Client;
    public static Provider = Business.instance.Provider;
}

interface IBusinessSingleton {
    Client: IClient;
    Provider: IProvider;
}