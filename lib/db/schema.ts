import {
  pgTable,
  serial,
  text,
  uuid,
  integer,
  boolean,
  varchar,
  timestamp,
  PgColumn,
  PgTableWithColumns,
} from "drizzle-orm/pg-core";
import { Many, relations } from "drizzle-orm";
import path from "path";

export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: text("name").notNull(),
  path: text("path").notNull(),
  size: integer("size").notNull(),
  type: text("type").notNull(),

  fileurl: text("fileurl").notNull(),
  thumbnailurl: text("thumbnailurl"),

  userId: text("userId").notNull(),
  parentId: uuid("parentId"),

  isFolder: boolean("isFolder").default(false).notNull(),
  isStared: boolean("isStared").default(false).notNull(),
  isTrash: boolean("isTrash").default(false).notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const filesRelations = relations(files, ({ one,many }) => ({
  parent: one(files, {
    fields: [files.parentId],
    references: [files.id],
  }),

  children: many(files),
}));

export const File = typeof files.$inferSelect;
export const NewFile = typeof files.$inferInsert;
