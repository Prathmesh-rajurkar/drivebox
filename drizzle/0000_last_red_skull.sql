CREATE TABLE "files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"path" text NOT NULL,
	"size" integer NOT NULL,
	"type" text NOT NULL,
	"fileurl" text NOT NULL,
	"thumbnailurl" text,
	"userId" text NOT NULL,
	"parentId" uuid,
	"isFolder" boolean DEFAULT false NOT NULL,
	"isStared" boolean DEFAULT false NOT NULL,
	"isTrash" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
