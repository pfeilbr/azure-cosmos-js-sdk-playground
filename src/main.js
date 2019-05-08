require("dotenv").config();
const cosmos = require("@azure/cosmos");
const CosmosClient = cosmos.CosmosClient;

const endpoint = process.env.ENDPOINT; // Add your endpoint
const masterKey = process.env.MASTERKEY; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, auth: { masterKey } });

const databaseDefinition = { id: "sample database" };
const collectionDefinition = { id: "sample collection" };
const documentDefinition = { id: "hello world doc", content: "Hello World!" };

async function helloCosmos() {
  const { database: db } = await client.databases.create(databaseDefinition);
  console.log("created db");

  const { container } = await db.containers.create(collectionDefinition);
  console.log("created collection");

  const { body } = await container.items.create(documentDefinition);
  console.log("Created item with content: ", body.content);

  await db.delete();
  console.log("Deleted database");
}

helloCosmos().catch(err => {
  console.error(err);
});
