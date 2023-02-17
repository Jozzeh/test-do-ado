import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import Env from "@ioc:Adonis/Core/Env";

export default class extends BaseSchema {
  protected tableName = "envs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("environment");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });

    const currentEvn: string = Env.get("CUSTOM_ENV");
    this.defer(async (db) => {
      await db.table("envs").insert({
        environment: currentEvn,
        created_at: this.now(),
        updated_at: this.now(),
      });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
