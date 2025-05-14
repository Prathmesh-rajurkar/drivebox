import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import { log } from "console";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("Database url is not set in .env");
}

async function runMigration() {
    try {
        const sql = neon(process.env.DATABASE_URL!);
        const db = drizzle(sql);
        await migrate(db, {
            migrationsFolder: "./drizzle",
            migrationsTable: "__drizzle_migration",
            migrationsSchema: "public",
        });
        console.log("Migration completed successfully");
    } catch (error) {
        console.error("Migration failed:", error);
        process.exit(1)
    }
}

runMigration()