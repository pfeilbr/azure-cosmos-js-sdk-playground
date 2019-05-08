# azure-cosmos-js-sdk-playground

learn [azure cosmos db javascript sdk](https://github.com/azure/azure-cosmos-js).

## Running

1. provision resources
    ```sh
    # create group
    az group create --name group01 --location "East US"

    # create cosmos db account
    az group deployment create \
    --name cosmosdbaccountdeployment01 \
    --resource-group group01 \
    --template-file arm-templates/azure-cosmos-db-account.json \
    --parameters name="account01" location="eastus" locationName="East US" defaultExperience="DocumentDB"
    ```
1. copy `.env.sample` to `.env` and populate with your information from **Keys**
![](https://www.evernote.com/l/AAG3s-Zs6VRIPa7fvjL6KuMP03bCj8nDKhYB/image.png)
1. run `npm start`