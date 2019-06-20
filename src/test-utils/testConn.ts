import { createConnection } from "typeorm";

export const testConn = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "graphql_ts_test",
    synchronize: drop,
    dropSchema: drop,
    entities: [__dirname + "./../entity/*.*"]
  });
};