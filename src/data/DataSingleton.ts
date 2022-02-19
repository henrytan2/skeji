import Account from "./instances/Account";
import ClientInstance from "./instances/ClientInstance";

import ProviderInstance from "./instances/ProviderInstance";
import IAccount from "./interfaces/IAccount"
import IClient from "./interfaces/IClient";
import IProvider from "./interfaces/IProvider";

class DataSingletonInstance implements IDataSingleton {

    Account: IAccount;
    Client: IClient;
    Provider: IProvider;
    

    constructor() {
        this.Account = new Account();
        this.Client = new ClientInstance();
        this.Provider = new ProviderInstance();
        
    }
}

export default class DataSingleton {
    private static instance : IDataSingleton = new DataSingletonInstance();

    public static Account = DataSingleton.instance.Account;
    public static Client = DataSingleton.instance.Client;
    public static Provider = DataSingleton.instance.Provider;
}

interface IDataSingleton {
    Account : IAccount;
    Client: IClient;
    Provider: IProvider;
}

