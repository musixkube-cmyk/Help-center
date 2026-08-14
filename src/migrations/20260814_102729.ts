import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_payload_users_roles" AS ENUM('admin', 'editor', 'trust-reviewer', 'legal-reviewer', 'migrator');
  CREATE TYPE "public"."enum_help_docs_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_help_docs_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum_help_docs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__help_docs_v_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__help_docs_v_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum__help_docs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_support_docs_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_support_docs_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum_support_docs_category" AS ENUM('account-and-access', 'reports-and-appeals', 'payments-and-purchases', 'technical-support', 'contact-us');
  CREATE TYPE "public"."enum_support_docs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__support_docs_v_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__support_docs_v_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum__support_docs_v_version_category" AS ENUM('account-and-access', 'reports-and-appeals', 'payments-and-purchases', 'technical-support', 'contact-us');
  CREATE TYPE "public"."enum__support_docs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_trust_docs_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_trust_docs_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum_trust_docs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__trust_docs_v_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__trust_docs_v_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum__trust_docs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_legal_docs_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_legal_docs_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum_legal_docs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__legal_docs_v_blocks_heading_level" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__legal_docs_v_blocks_callout_variant" AS ENUM('note', 'warning');
  CREATE TYPE "public"."enum__legal_docs_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "payload_users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_payload_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "payload_users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "payload_users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "nav_nodes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"blurb" varchar,
  	"parent_id" integer,
  	"order" numeric DEFAULT 0,
  	"root_section" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "nav_nodes_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "help_docs_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "help_docs_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum_help_docs_blocks_heading_level" DEFAULT '2',
  	"block_name" varchar
  );
  
  CREATE TABLE "help_docs_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "help_docs_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "help_docs_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "help_docs_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_help_docs_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "help_docs_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "help_docs_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "help_docs_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "help_docs_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "help_docs_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "help_docs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"path" varchar,
  	"blurb" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_help_docs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "help_docs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "_help_docs_v_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum__help_docs_v_blocks_heading_level" DEFAULT '2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__help_docs_v_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_help_docs_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_help_docs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_path" varchar,
  	"version_blurb" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__help_docs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_help_docs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "support_docs_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "support_docs_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum_support_docs_blocks_heading_level" DEFAULT '2',
  	"block_name" varchar
  );
  
  CREATE TABLE "support_docs_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "support_docs_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "support_docs_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "support_docs_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_support_docs_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "support_docs_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "support_docs_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "support_docs_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "support_docs_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "support_docs_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "support_docs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"path" varchar,
  	"blurb" varchar,
  	"category" "enum_support_docs_category",
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_support_docs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "support_docs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "_support_docs_v_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum__support_docs_v_blocks_heading_level" DEFAULT '2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__support_docs_v_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_support_docs_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_support_docs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_path" varchar,
  	"version_blurb" varchar,
  	"version_category" "enum__support_docs_v_version_category",
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__support_docs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_support_docs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "trust_docs_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum_trust_docs_blocks_heading_level" DEFAULT '2',
  	"block_name" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_trust_docs_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "trust_docs_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "trust_docs_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "trust_docs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"path" varchar,
  	"blurb" varchar,
  	"approved_by" varchar,
  	"approved_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_trust_docs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "trust_docs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "_trust_docs_v_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum__trust_docs_v_blocks_heading_level" DEFAULT '2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__trust_docs_v_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_trust_docs_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_trust_docs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_path" varchar,
  	"version_blurb" varchar,
  	"version_approved_by" varchar,
  	"version_approved_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__trust_docs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_trust_docs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "legal_docs_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum_legal_docs_blocks_heading_level" DEFAULT '2',
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_legal_docs_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "legal_docs_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_docs_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "legal_docs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"path" varchar,
  	"blurb" varchar,
  	"version" varchar,
  	"effective_date" timestamp(3) with time zone,
  	"superseded_by_id" integer,
  	"status" "enum_legal_docs_status" DEFAULT 'draft',
  	"approved_by" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_legal_docs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "legal_docs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "_legal_docs_v_blocks_paragraph" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"level" "enum__legal_docs_v_blocks_heading_level" DEFAULT '2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_list_items_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"ordered" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__legal_docs_v_blocks_callout_variant" DEFAULT 'note',
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_table_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_legal_docs_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_legal_docs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_path" varchar,
  	"version_blurb" varchar,
  	"version_version" varchar,
  	"version_effective_date" timestamp(3) with time zone,
  	"version_superseded_by_id" integer,
  	"version_status" "enum__legal_docs_v_version_status" DEFAULT 'draft',
  	"version_approved_by" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__legal_docs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_legal_docs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"payload_users_id" integer,
  	"nav_nodes_id" integer,
  	"help_docs_id" integer,
  	"support_docs_id" integer,
  	"trust_docs_id" integer,
  	"legal_docs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"payload_users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_users_roles" ADD CONSTRAINT "payload_users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_users_sessions" ADD CONSTRAINT "payload_users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_nodes" ADD CONSTRAINT "nav_nodes_parent_id_nav_nodes_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."nav_nodes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "nav_nodes_rels" ADD CONSTRAINT "nav_nodes_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."nav_nodes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_nodes_rels" ADD CONSTRAINT "nav_nodes_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_nodes_rels" ADD CONSTRAINT "nav_nodes_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_nodes_rels" ADD CONSTRAINT "nav_nodes_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_nodes_rels" ADD CONSTRAINT "nav_nodes_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_paragraph" ADD CONSTRAINT "help_docs_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_heading" ADD CONSTRAINT "help_docs_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_list_items_children" ADD CONSTRAINT "help_docs_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_list_items" ADD CONSTRAINT "help_docs_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_list" ADD CONSTRAINT "help_docs_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_callout" ADD CONSTRAINT "help_docs_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_table_headers" ADD CONSTRAINT "help_docs_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_table_rows_cells" ADD CONSTRAINT "help_docs_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_table_rows" ADD CONSTRAINT "help_docs_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_table" ADD CONSTRAINT "help_docs_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_blocks_quote" ADD CONSTRAINT "help_docs_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_rels" ADD CONSTRAINT "help_docs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_rels" ADD CONSTRAINT "help_docs_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_rels" ADD CONSTRAINT "help_docs_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_rels" ADD CONSTRAINT "help_docs_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "help_docs_rels" ADD CONSTRAINT "help_docs_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_paragraph" ADD CONSTRAINT "_help_docs_v_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_heading" ADD CONSTRAINT "_help_docs_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_list_items_children" ADD CONSTRAINT "_help_docs_v_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_list_items" ADD CONSTRAINT "_help_docs_v_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_list" ADD CONSTRAINT "_help_docs_v_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_callout" ADD CONSTRAINT "_help_docs_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_table_headers" ADD CONSTRAINT "_help_docs_v_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_table_rows_cells" ADD CONSTRAINT "_help_docs_v_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_table_rows" ADD CONSTRAINT "_help_docs_v_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_table" ADD CONSTRAINT "_help_docs_v_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_blocks_quote" ADD CONSTRAINT "_help_docs_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v" ADD CONSTRAINT "_help_docs_v_parent_id_help_docs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."help_docs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_help_docs_v_rels" ADD CONSTRAINT "_help_docs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_help_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_rels" ADD CONSTRAINT "_help_docs_v_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_rels" ADD CONSTRAINT "_help_docs_v_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_rels" ADD CONSTRAINT "_help_docs_v_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_help_docs_v_rels" ADD CONSTRAINT "_help_docs_v_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_paragraph" ADD CONSTRAINT "support_docs_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_heading" ADD CONSTRAINT "support_docs_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_list_items_children" ADD CONSTRAINT "support_docs_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_list_items" ADD CONSTRAINT "support_docs_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_list" ADD CONSTRAINT "support_docs_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_callout" ADD CONSTRAINT "support_docs_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_table_headers" ADD CONSTRAINT "support_docs_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_table_rows_cells" ADD CONSTRAINT "support_docs_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_table_rows" ADD CONSTRAINT "support_docs_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_table" ADD CONSTRAINT "support_docs_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_blocks_quote" ADD CONSTRAINT "support_docs_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_rels" ADD CONSTRAINT "support_docs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_rels" ADD CONSTRAINT "support_docs_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_rels" ADD CONSTRAINT "support_docs_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_rels" ADD CONSTRAINT "support_docs_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support_docs_rels" ADD CONSTRAINT "support_docs_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_paragraph" ADD CONSTRAINT "_support_docs_v_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_heading" ADD CONSTRAINT "_support_docs_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_list_items_children" ADD CONSTRAINT "_support_docs_v_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_list_items" ADD CONSTRAINT "_support_docs_v_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_list" ADD CONSTRAINT "_support_docs_v_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_callout" ADD CONSTRAINT "_support_docs_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_table_headers" ADD CONSTRAINT "_support_docs_v_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_table_rows_cells" ADD CONSTRAINT "_support_docs_v_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_table_rows" ADD CONSTRAINT "_support_docs_v_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_table" ADD CONSTRAINT "_support_docs_v_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_blocks_quote" ADD CONSTRAINT "_support_docs_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v" ADD CONSTRAINT "_support_docs_v_parent_id_support_docs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."support_docs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_support_docs_v_rels" ADD CONSTRAINT "_support_docs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_support_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_rels" ADD CONSTRAINT "_support_docs_v_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_rels" ADD CONSTRAINT "_support_docs_v_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_rels" ADD CONSTRAINT "_support_docs_v_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_docs_v_rels" ADD CONSTRAINT "_support_docs_v_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_paragraph" ADD CONSTRAINT "trust_docs_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_heading" ADD CONSTRAINT "trust_docs_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_list_items_children" ADD CONSTRAINT "trust_docs_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_list_items" ADD CONSTRAINT "trust_docs_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_list" ADD CONSTRAINT "trust_docs_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_callout" ADD CONSTRAINT "trust_docs_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_table_headers" ADD CONSTRAINT "trust_docs_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_table_rows_cells" ADD CONSTRAINT "trust_docs_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_table_rows" ADD CONSTRAINT "trust_docs_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_table" ADD CONSTRAINT "trust_docs_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_blocks_quote" ADD CONSTRAINT "trust_docs_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_rels" ADD CONSTRAINT "trust_docs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_rels" ADD CONSTRAINT "trust_docs_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_rels" ADD CONSTRAINT "trust_docs_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_rels" ADD CONSTRAINT "trust_docs_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "trust_docs_rels" ADD CONSTRAINT "trust_docs_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_paragraph" ADD CONSTRAINT "_trust_docs_v_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_heading" ADD CONSTRAINT "_trust_docs_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_list_items_children" ADD CONSTRAINT "_trust_docs_v_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_list_items" ADD CONSTRAINT "_trust_docs_v_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_list" ADD CONSTRAINT "_trust_docs_v_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_callout" ADD CONSTRAINT "_trust_docs_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_table_headers" ADD CONSTRAINT "_trust_docs_v_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_table_rows_cells" ADD CONSTRAINT "_trust_docs_v_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_table_rows" ADD CONSTRAINT "_trust_docs_v_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_table" ADD CONSTRAINT "_trust_docs_v_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_blocks_quote" ADD CONSTRAINT "_trust_docs_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v" ADD CONSTRAINT "_trust_docs_v_parent_id_trust_docs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."trust_docs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_rels" ADD CONSTRAINT "_trust_docs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_trust_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_rels" ADD CONSTRAINT "_trust_docs_v_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_rels" ADD CONSTRAINT "_trust_docs_v_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_rels" ADD CONSTRAINT "_trust_docs_v_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_trust_docs_v_rels" ADD CONSTRAINT "_trust_docs_v_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_paragraph" ADD CONSTRAINT "legal_docs_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_heading" ADD CONSTRAINT "legal_docs_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_list_items_children" ADD CONSTRAINT "legal_docs_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_list_items" ADD CONSTRAINT "legal_docs_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_list" ADD CONSTRAINT "legal_docs_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_callout" ADD CONSTRAINT "legal_docs_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_table_headers" ADD CONSTRAINT "legal_docs_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_table_rows_cells" ADD CONSTRAINT "legal_docs_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_table_rows" ADD CONSTRAINT "legal_docs_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_table" ADD CONSTRAINT "legal_docs_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_blocks_quote" ADD CONSTRAINT "legal_docs_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs" ADD CONSTRAINT "legal_docs_superseded_by_id_legal_docs_id_fk" FOREIGN KEY ("superseded_by_id") REFERENCES "public"."legal_docs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "legal_docs_rels" ADD CONSTRAINT "legal_docs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_rels" ADD CONSTRAINT "legal_docs_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_rels" ADD CONSTRAINT "legal_docs_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_rels" ADD CONSTRAINT "legal_docs_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_docs_rels" ADD CONSTRAINT "legal_docs_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_paragraph" ADD CONSTRAINT "_legal_docs_v_blocks_paragraph_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_heading" ADD CONSTRAINT "_legal_docs_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_list_items_children" ADD CONSTRAINT "_legal_docs_v_blocks_list_items_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v_blocks_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_list_items" ADD CONSTRAINT "_legal_docs_v_blocks_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v_blocks_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_list" ADD CONSTRAINT "_legal_docs_v_blocks_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_callout" ADD CONSTRAINT "_legal_docs_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_table_headers" ADD CONSTRAINT "_legal_docs_v_blocks_table_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_table_rows_cells" ADD CONSTRAINT "_legal_docs_v_blocks_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v_blocks_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_table_rows" ADD CONSTRAINT "_legal_docs_v_blocks_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v_blocks_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_table" ADD CONSTRAINT "_legal_docs_v_blocks_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_blocks_quote" ADD CONSTRAINT "_legal_docs_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v" ADD CONSTRAINT "_legal_docs_v_parent_id_legal_docs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."legal_docs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_legal_docs_v" ADD CONSTRAINT "_legal_docs_v_version_superseded_by_id_legal_docs_id_fk" FOREIGN KEY ("version_superseded_by_id") REFERENCES "public"."legal_docs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_rels" ADD CONSTRAINT "_legal_docs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_legal_docs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_rels" ADD CONSTRAINT "_legal_docs_v_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_rels" ADD CONSTRAINT "_legal_docs_v_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_rels" ADD CONSTRAINT "_legal_docs_v_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_docs_v_rels" ADD CONSTRAINT "_legal_docs_v_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_users_fk" FOREIGN KEY ("payload_users_id") REFERENCES "public"."payload_users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_nav_nodes_fk" FOREIGN KEY ("nav_nodes_id") REFERENCES "public"."nav_nodes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_help_docs_fk" FOREIGN KEY ("help_docs_id") REFERENCES "public"."help_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_support_docs_fk" FOREIGN KEY ("support_docs_id") REFERENCES "public"."support_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trust_docs_fk" FOREIGN KEY ("trust_docs_id") REFERENCES "public"."trust_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_legal_docs_fk" FOREIGN KEY ("legal_docs_id") REFERENCES "public"."legal_docs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_payload_users_fk" FOREIGN KEY ("payload_users_id") REFERENCES "public"."payload_users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_users_roles_order_idx" ON "payload_users_roles" USING btree ("order");
  CREATE INDEX "payload_users_roles_parent_idx" ON "payload_users_roles" USING btree ("parent_id");
  CREATE INDEX "payload_users_sessions_order_idx" ON "payload_users_sessions" USING btree ("_order");
  CREATE INDEX "payload_users_sessions_parent_id_idx" ON "payload_users_sessions" USING btree ("_parent_id");
  CREATE INDEX "payload_users_updated_at_idx" ON "payload_users" USING btree ("updated_at");
  CREATE INDEX "payload_users_created_at_idx" ON "payload_users" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_users_email_idx" ON "payload_users" USING btree ("email");
  CREATE INDEX "nav_nodes_parent_idx" ON "nav_nodes" USING btree ("parent_id");
  CREATE INDEX "nav_nodes_updated_at_idx" ON "nav_nodes" USING btree ("updated_at");
  CREATE INDEX "nav_nodes_created_at_idx" ON "nav_nodes" USING btree ("created_at");
  CREATE INDEX "slug_idx" ON "nav_nodes" USING btree ("slug");
  CREATE INDEX "parent_idx" ON "nav_nodes" USING btree ("parent_id");
  CREATE INDEX "order_idx" ON "nav_nodes" USING btree ("order");
  CREATE INDEX "nav_nodes_rels_order_idx" ON "nav_nodes_rels" USING btree ("order");
  CREATE INDEX "nav_nodes_rels_parent_idx" ON "nav_nodes_rels" USING btree ("parent_id");
  CREATE INDEX "nav_nodes_rels_path_idx" ON "nav_nodes_rels" USING btree ("path");
  CREATE INDEX "nav_nodes_rels_help_docs_id_idx" ON "nav_nodes_rels" USING btree ("help_docs_id");
  CREATE INDEX "nav_nodes_rels_support_docs_id_idx" ON "nav_nodes_rels" USING btree ("support_docs_id");
  CREATE INDEX "nav_nodes_rels_trust_docs_id_idx" ON "nav_nodes_rels" USING btree ("trust_docs_id");
  CREATE INDEX "nav_nodes_rels_legal_docs_id_idx" ON "nav_nodes_rels" USING btree ("legal_docs_id");
  CREATE INDEX "help_docs_blocks_paragraph_order_idx" ON "help_docs_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_paragraph_parent_id_idx" ON "help_docs_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_paragraph_path_idx" ON "help_docs_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "help_docs_blocks_heading_order_idx" ON "help_docs_blocks_heading" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_heading_parent_id_idx" ON "help_docs_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_heading_path_idx" ON "help_docs_blocks_heading" USING btree ("_path");
  CREATE INDEX "help_docs_blocks_list_items_children_order_idx" ON "help_docs_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_list_items_children_parent_id_idx" ON "help_docs_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_list_items_order_idx" ON "help_docs_blocks_list_items" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_list_items_parent_id_idx" ON "help_docs_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_list_order_idx" ON "help_docs_blocks_list" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_list_parent_id_idx" ON "help_docs_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_list_path_idx" ON "help_docs_blocks_list" USING btree ("_path");
  CREATE INDEX "help_docs_blocks_callout_order_idx" ON "help_docs_blocks_callout" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_callout_parent_id_idx" ON "help_docs_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_callout_path_idx" ON "help_docs_blocks_callout" USING btree ("_path");
  CREATE INDEX "help_docs_blocks_table_headers_order_idx" ON "help_docs_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_table_headers_parent_id_idx" ON "help_docs_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_table_rows_cells_order_idx" ON "help_docs_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_table_rows_cells_parent_id_idx" ON "help_docs_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_table_rows_order_idx" ON "help_docs_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_table_rows_parent_id_idx" ON "help_docs_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_table_order_idx" ON "help_docs_blocks_table" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_table_parent_id_idx" ON "help_docs_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_table_path_idx" ON "help_docs_blocks_table" USING btree ("_path");
  CREATE INDEX "help_docs_blocks_quote_order_idx" ON "help_docs_blocks_quote" USING btree ("_order");
  CREATE INDEX "help_docs_blocks_quote_parent_id_idx" ON "help_docs_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "help_docs_blocks_quote_path_idx" ON "help_docs_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "help_docs_path_idx" ON "help_docs" USING btree ("path");
  CREATE INDEX "help_docs_updated_at_idx" ON "help_docs" USING btree ("updated_at");
  CREATE INDEX "help_docs_created_at_idx" ON "help_docs" USING btree ("created_at");
  CREATE INDEX "help_docs__status_idx" ON "help_docs" USING btree ("_status");
  CREATE UNIQUE INDEX "path_idx" ON "help_docs" USING btree ("path");
  CREATE INDEX "help_docs_rels_order_idx" ON "help_docs_rels" USING btree ("order");
  CREATE INDEX "help_docs_rels_parent_idx" ON "help_docs_rels" USING btree ("parent_id");
  CREATE INDEX "help_docs_rels_path_idx" ON "help_docs_rels" USING btree ("path");
  CREATE INDEX "help_docs_rels_help_docs_id_idx" ON "help_docs_rels" USING btree ("help_docs_id");
  CREATE INDEX "help_docs_rels_support_docs_id_idx" ON "help_docs_rels" USING btree ("support_docs_id");
  CREATE INDEX "help_docs_rels_trust_docs_id_idx" ON "help_docs_rels" USING btree ("trust_docs_id");
  CREATE INDEX "help_docs_rels_legal_docs_id_idx" ON "help_docs_rels" USING btree ("legal_docs_id");
  CREATE INDEX "_help_docs_v_blocks_paragraph_order_idx" ON "_help_docs_v_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_paragraph_parent_id_idx" ON "_help_docs_v_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_paragraph_path_idx" ON "_help_docs_v_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "_help_docs_v_blocks_heading_order_idx" ON "_help_docs_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_heading_parent_id_idx" ON "_help_docs_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_heading_path_idx" ON "_help_docs_v_blocks_heading" USING btree ("_path");
  CREATE INDEX "_help_docs_v_blocks_list_items_children_order_idx" ON "_help_docs_v_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_list_items_children_parent_id_idx" ON "_help_docs_v_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_list_items_order_idx" ON "_help_docs_v_blocks_list_items" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_list_items_parent_id_idx" ON "_help_docs_v_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_list_order_idx" ON "_help_docs_v_blocks_list" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_list_parent_id_idx" ON "_help_docs_v_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_list_path_idx" ON "_help_docs_v_blocks_list" USING btree ("_path");
  CREATE INDEX "_help_docs_v_blocks_callout_order_idx" ON "_help_docs_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_callout_parent_id_idx" ON "_help_docs_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_callout_path_idx" ON "_help_docs_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_help_docs_v_blocks_table_headers_order_idx" ON "_help_docs_v_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_table_headers_parent_id_idx" ON "_help_docs_v_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_table_rows_cells_order_idx" ON "_help_docs_v_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_table_rows_cells_parent_id_idx" ON "_help_docs_v_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_table_rows_order_idx" ON "_help_docs_v_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_table_rows_parent_id_idx" ON "_help_docs_v_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_table_order_idx" ON "_help_docs_v_blocks_table" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_table_parent_id_idx" ON "_help_docs_v_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_table_path_idx" ON "_help_docs_v_blocks_table" USING btree ("_path");
  CREATE INDEX "_help_docs_v_blocks_quote_order_idx" ON "_help_docs_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_help_docs_v_blocks_quote_parent_id_idx" ON "_help_docs_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_help_docs_v_blocks_quote_path_idx" ON "_help_docs_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_help_docs_v_parent_idx" ON "_help_docs_v" USING btree ("parent_id");
  CREATE INDEX "_help_docs_v_version_version_path_idx" ON "_help_docs_v" USING btree ("version_path");
  CREATE INDEX "_help_docs_v_version_version_updated_at_idx" ON "_help_docs_v" USING btree ("version_updated_at");
  CREATE INDEX "_help_docs_v_version_version_created_at_idx" ON "_help_docs_v" USING btree ("version_created_at");
  CREATE INDEX "_help_docs_v_version_version__status_idx" ON "_help_docs_v" USING btree ("version__status");
  CREATE INDEX "_help_docs_v_created_at_idx" ON "_help_docs_v" USING btree ("created_at");
  CREATE INDEX "_help_docs_v_updated_at_idx" ON "_help_docs_v" USING btree ("updated_at");
  CREATE INDEX "_help_docs_v_latest_idx" ON "_help_docs_v" USING btree ("latest");
  CREATE INDEX "_help_docs_v_autosave_idx" ON "_help_docs_v" USING btree ("autosave");
  CREATE INDEX "version_path_idx" ON "_help_docs_v" USING btree ("version_path");
  CREATE INDEX "_help_docs_v_rels_order_idx" ON "_help_docs_v_rels" USING btree ("order");
  CREATE INDEX "_help_docs_v_rels_parent_idx" ON "_help_docs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_help_docs_v_rels_path_idx" ON "_help_docs_v_rels" USING btree ("path");
  CREATE INDEX "_help_docs_v_rels_help_docs_id_idx" ON "_help_docs_v_rels" USING btree ("help_docs_id");
  CREATE INDEX "_help_docs_v_rels_support_docs_id_idx" ON "_help_docs_v_rels" USING btree ("support_docs_id");
  CREATE INDEX "_help_docs_v_rels_trust_docs_id_idx" ON "_help_docs_v_rels" USING btree ("trust_docs_id");
  CREATE INDEX "_help_docs_v_rels_legal_docs_id_idx" ON "_help_docs_v_rels" USING btree ("legal_docs_id");
  CREATE INDEX "support_docs_blocks_paragraph_order_idx" ON "support_docs_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_paragraph_parent_id_idx" ON "support_docs_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_paragraph_path_idx" ON "support_docs_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "support_docs_blocks_heading_order_idx" ON "support_docs_blocks_heading" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_heading_parent_id_idx" ON "support_docs_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_heading_path_idx" ON "support_docs_blocks_heading" USING btree ("_path");
  CREATE INDEX "support_docs_blocks_list_items_children_order_idx" ON "support_docs_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_list_items_children_parent_id_idx" ON "support_docs_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_list_items_order_idx" ON "support_docs_blocks_list_items" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_list_items_parent_id_idx" ON "support_docs_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_list_order_idx" ON "support_docs_blocks_list" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_list_parent_id_idx" ON "support_docs_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_list_path_idx" ON "support_docs_blocks_list" USING btree ("_path");
  CREATE INDEX "support_docs_blocks_callout_order_idx" ON "support_docs_blocks_callout" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_callout_parent_id_idx" ON "support_docs_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_callout_path_idx" ON "support_docs_blocks_callout" USING btree ("_path");
  CREATE INDEX "support_docs_blocks_table_headers_order_idx" ON "support_docs_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_table_headers_parent_id_idx" ON "support_docs_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_table_rows_cells_order_idx" ON "support_docs_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_table_rows_cells_parent_id_idx" ON "support_docs_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_table_rows_order_idx" ON "support_docs_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_table_rows_parent_id_idx" ON "support_docs_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_table_order_idx" ON "support_docs_blocks_table" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_table_parent_id_idx" ON "support_docs_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_table_path_idx" ON "support_docs_blocks_table" USING btree ("_path");
  CREATE INDEX "support_docs_blocks_quote_order_idx" ON "support_docs_blocks_quote" USING btree ("_order");
  CREATE INDEX "support_docs_blocks_quote_parent_id_idx" ON "support_docs_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "support_docs_blocks_quote_path_idx" ON "support_docs_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "support_docs_path_idx" ON "support_docs" USING btree ("path");
  CREATE INDEX "support_docs_updated_at_idx" ON "support_docs" USING btree ("updated_at");
  CREATE INDEX "support_docs_created_at_idx" ON "support_docs" USING btree ("created_at");
  CREATE INDEX "support_docs__status_idx" ON "support_docs" USING btree ("_status");
  CREATE UNIQUE INDEX "path_1_idx" ON "support_docs" USING btree ("path");
  CREATE INDEX "support_docs_rels_order_idx" ON "support_docs_rels" USING btree ("order");
  CREATE INDEX "support_docs_rels_parent_idx" ON "support_docs_rels" USING btree ("parent_id");
  CREATE INDEX "support_docs_rels_path_idx" ON "support_docs_rels" USING btree ("path");
  CREATE INDEX "support_docs_rels_help_docs_id_idx" ON "support_docs_rels" USING btree ("help_docs_id");
  CREATE INDEX "support_docs_rels_support_docs_id_idx" ON "support_docs_rels" USING btree ("support_docs_id");
  CREATE INDEX "support_docs_rels_trust_docs_id_idx" ON "support_docs_rels" USING btree ("trust_docs_id");
  CREATE INDEX "support_docs_rels_legal_docs_id_idx" ON "support_docs_rels" USING btree ("legal_docs_id");
  CREATE INDEX "_support_docs_v_blocks_paragraph_order_idx" ON "_support_docs_v_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_paragraph_parent_id_idx" ON "_support_docs_v_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_paragraph_path_idx" ON "_support_docs_v_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "_support_docs_v_blocks_heading_order_idx" ON "_support_docs_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_heading_parent_id_idx" ON "_support_docs_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_heading_path_idx" ON "_support_docs_v_blocks_heading" USING btree ("_path");
  CREATE INDEX "_support_docs_v_blocks_list_items_children_order_idx" ON "_support_docs_v_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_list_items_children_parent_id_idx" ON "_support_docs_v_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_list_items_order_idx" ON "_support_docs_v_blocks_list_items" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_list_items_parent_id_idx" ON "_support_docs_v_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_list_order_idx" ON "_support_docs_v_blocks_list" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_list_parent_id_idx" ON "_support_docs_v_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_list_path_idx" ON "_support_docs_v_blocks_list" USING btree ("_path");
  CREATE INDEX "_support_docs_v_blocks_callout_order_idx" ON "_support_docs_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_callout_parent_id_idx" ON "_support_docs_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_callout_path_idx" ON "_support_docs_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_support_docs_v_blocks_table_headers_order_idx" ON "_support_docs_v_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_table_headers_parent_id_idx" ON "_support_docs_v_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_table_rows_cells_order_idx" ON "_support_docs_v_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_table_rows_cells_parent_id_idx" ON "_support_docs_v_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_table_rows_order_idx" ON "_support_docs_v_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_table_rows_parent_id_idx" ON "_support_docs_v_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_table_order_idx" ON "_support_docs_v_blocks_table" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_table_parent_id_idx" ON "_support_docs_v_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_table_path_idx" ON "_support_docs_v_blocks_table" USING btree ("_path");
  CREATE INDEX "_support_docs_v_blocks_quote_order_idx" ON "_support_docs_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_support_docs_v_blocks_quote_parent_id_idx" ON "_support_docs_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_support_docs_v_blocks_quote_path_idx" ON "_support_docs_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_support_docs_v_parent_idx" ON "_support_docs_v" USING btree ("parent_id");
  CREATE INDEX "_support_docs_v_version_version_path_idx" ON "_support_docs_v" USING btree ("version_path");
  CREATE INDEX "_support_docs_v_version_version_updated_at_idx" ON "_support_docs_v" USING btree ("version_updated_at");
  CREATE INDEX "_support_docs_v_version_version_created_at_idx" ON "_support_docs_v" USING btree ("version_created_at");
  CREATE INDEX "_support_docs_v_version_version__status_idx" ON "_support_docs_v" USING btree ("version__status");
  CREATE INDEX "_support_docs_v_created_at_idx" ON "_support_docs_v" USING btree ("created_at");
  CREATE INDEX "_support_docs_v_updated_at_idx" ON "_support_docs_v" USING btree ("updated_at");
  CREATE INDEX "_support_docs_v_latest_idx" ON "_support_docs_v" USING btree ("latest");
  CREATE INDEX "_support_docs_v_autosave_idx" ON "_support_docs_v" USING btree ("autosave");
  CREATE INDEX "version_path_1_idx" ON "_support_docs_v" USING btree ("version_path");
  CREATE INDEX "_support_docs_v_rels_order_idx" ON "_support_docs_v_rels" USING btree ("order");
  CREATE INDEX "_support_docs_v_rels_parent_idx" ON "_support_docs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_support_docs_v_rels_path_idx" ON "_support_docs_v_rels" USING btree ("path");
  CREATE INDEX "_support_docs_v_rels_help_docs_id_idx" ON "_support_docs_v_rels" USING btree ("help_docs_id");
  CREATE INDEX "_support_docs_v_rels_support_docs_id_idx" ON "_support_docs_v_rels" USING btree ("support_docs_id");
  CREATE INDEX "_support_docs_v_rels_trust_docs_id_idx" ON "_support_docs_v_rels" USING btree ("trust_docs_id");
  CREATE INDEX "_support_docs_v_rels_legal_docs_id_idx" ON "_support_docs_v_rels" USING btree ("legal_docs_id");
  CREATE INDEX "trust_docs_blocks_paragraph_order_idx" ON "trust_docs_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_paragraph_parent_id_idx" ON "trust_docs_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_paragraph_path_idx" ON "trust_docs_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "trust_docs_blocks_heading_order_idx" ON "trust_docs_blocks_heading" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_heading_parent_id_idx" ON "trust_docs_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_heading_path_idx" ON "trust_docs_blocks_heading" USING btree ("_path");
  CREATE INDEX "trust_docs_blocks_list_items_children_order_idx" ON "trust_docs_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_list_items_children_parent_id_idx" ON "trust_docs_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_list_items_order_idx" ON "trust_docs_blocks_list_items" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_list_items_parent_id_idx" ON "trust_docs_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_list_order_idx" ON "trust_docs_blocks_list" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_list_parent_id_idx" ON "trust_docs_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_list_path_idx" ON "trust_docs_blocks_list" USING btree ("_path");
  CREATE INDEX "trust_docs_blocks_callout_order_idx" ON "trust_docs_blocks_callout" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_callout_parent_id_idx" ON "trust_docs_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_callout_path_idx" ON "trust_docs_blocks_callout" USING btree ("_path");
  CREATE INDEX "trust_docs_blocks_table_headers_order_idx" ON "trust_docs_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_table_headers_parent_id_idx" ON "trust_docs_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_table_rows_cells_order_idx" ON "trust_docs_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_table_rows_cells_parent_id_idx" ON "trust_docs_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_table_rows_order_idx" ON "trust_docs_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_table_rows_parent_id_idx" ON "trust_docs_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_table_order_idx" ON "trust_docs_blocks_table" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_table_parent_id_idx" ON "trust_docs_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_table_path_idx" ON "trust_docs_blocks_table" USING btree ("_path");
  CREATE INDEX "trust_docs_blocks_quote_order_idx" ON "trust_docs_blocks_quote" USING btree ("_order");
  CREATE INDEX "trust_docs_blocks_quote_parent_id_idx" ON "trust_docs_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "trust_docs_blocks_quote_path_idx" ON "trust_docs_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "trust_docs_path_idx" ON "trust_docs" USING btree ("path");
  CREATE INDEX "trust_docs_updated_at_idx" ON "trust_docs" USING btree ("updated_at");
  CREATE INDEX "trust_docs_created_at_idx" ON "trust_docs" USING btree ("created_at");
  CREATE INDEX "trust_docs__status_idx" ON "trust_docs" USING btree ("_status");
  CREATE UNIQUE INDEX "path_2_idx" ON "trust_docs" USING btree ("path");
  CREATE INDEX "trust_docs_rels_order_idx" ON "trust_docs_rels" USING btree ("order");
  CREATE INDEX "trust_docs_rels_parent_idx" ON "trust_docs_rels" USING btree ("parent_id");
  CREATE INDEX "trust_docs_rels_path_idx" ON "trust_docs_rels" USING btree ("path");
  CREATE INDEX "trust_docs_rels_help_docs_id_idx" ON "trust_docs_rels" USING btree ("help_docs_id");
  CREATE INDEX "trust_docs_rels_support_docs_id_idx" ON "trust_docs_rels" USING btree ("support_docs_id");
  CREATE INDEX "trust_docs_rels_trust_docs_id_idx" ON "trust_docs_rels" USING btree ("trust_docs_id");
  CREATE INDEX "trust_docs_rels_legal_docs_id_idx" ON "trust_docs_rels" USING btree ("legal_docs_id");
  CREATE INDEX "_trust_docs_v_blocks_paragraph_order_idx" ON "_trust_docs_v_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_paragraph_parent_id_idx" ON "_trust_docs_v_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_paragraph_path_idx" ON "_trust_docs_v_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "_trust_docs_v_blocks_heading_order_idx" ON "_trust_docs_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_heading_parent_id_idx" ON "_trust_docs_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_heading_path_idx" ON "_trust_docs_v_blocks_heading" USING btree ("_path");
  CREATE INDEX "_trust_docs_v_blocks_list_items_children_order_idx" ON "_trust_docs_v_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_list_items_children_parent_id_idx" ON "_trust_docs_v_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_list_items_order_idx" ON "_trust_docs_v_blocks_list_items" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_list_items_parent_id_idx" ON "_trust_docs_v_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_list_order_idx" ON "_trust_docs_v_blocks_list" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_list_parent_id_idx" ON "_trust_docs_v_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_list_path_idx" ON "_trust_docs_v_blocks_list" USING btree ("_path");
  CREATE INDEX "_trust_docs_v_blocks_callout_order_idx" ON "_trust_docs_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_callout_parent_id_idx" ON "_trust_docs_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_callout_path_idx" ON "_trust_docs_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_trust_docs_v_blocks_table_headers_order_idx" ON "_trust_docs_v_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_table_headers_parent_id_idx" ON "_trust_docs_v_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_table_rows_cells_order_idx" ON "_trust_docs_v_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_table_rows_cells_parent_id_idx" ON "_trust_docs_v_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_table_rows_order_idx" ON "_trust_docs_v_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_table_rows_parent_id_idx" ON "_trust_docs_v_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_table_order_idx" ON "_trust_docs_v_blocks_table" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_table_parent_id_idx" ON "_trust_docs_v_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_table_path_idx" ON "_trust_docs_v_blocks_table" USING btree ("_path");
  CREATE INDEX "_trust_docs_v_blocks_quote_order_idx" ON "_trust_docs_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_trust_docs_v_blocks_quote_parent_id_idx" ON "_trust_docs_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_trust_docs_v_blocks_quote_path_idx" ON "_trust_docs_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_trust_docs_v_parent_idx" ON "_trust_docs_v" USING btree ("parent_id");
  CREATE INDEX "_trust_docs_v_version_version_path_idx" ON "_trust_docs_v" USING btree ("version_path");
  CREATE INDEX "_trust_docs_v_version_version_updated_at_idx" ON "_trust_docs_v" USING btree ("version_updated_at");
  CREATE INDEX "_trust_docs_v_version_version_created_at_idx" ON "_trust_docs_v" USING btree ("version_created_at");
  CREATE INDEX "_trust_docs_v_version_version__status_idx" ON "_trust_docs_v" USING btree ("version__status");
  CREATE INDEX "_trust_docs_v_created_at_idx" ON "_trust_docs_v" USING btree ("created_at");
  CREATE INDEX "_trust_docs_v_updated_at_idx" ON "_trust_docs_v" USING btree ("updated_at");
  CREATE INDEX "_trust_docs_v_latest_idx" ON "_trust_docs_v" USING btree ("latest");
  CREATE INDEX "_trust_docs_v_autosave_idx" ON "_trust_docs_v" USING btree ("autosave");
  CREATE INDEX "version_path_2_idx" ON "_trust_docs_v" USING btree ("version_path");
  CREATE INDEX "_trust_docs_v_rels_order_idx" ON "_trust_docs_v_rels" USING btree ("order");
  CREATE INDEX "_trust_docs_v_rels_parent_idx" ON "_trust_docs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_trust_docs_v_rels_path_idx" ON "_trust_docs_v_rels" USING btree ("path");
  CREATE INDEX "_trust_docs_v_rels_help_docs_id_idx" ON "_trust_docs_v_rels" USING btree ("help_docs_id");
  CREATE INDEX "_trust_docs_v_rels_support_docs_id_idx" ON "_trust_docs_v_rels" USING btree ("support_docs_id");
  CREATE INDEX "_trust_docs_v_rels_trust_docs_id_idx" ON "_trust_docs_v_rels" USING btree ("trust_docs_id");
  CREATE INDEX "_trust_docs_v_rels_legal_docs_id_idx" ON "_trust_docs_v_rels" USING btree ("legal_docs_id");
  CREATE INDEX "legal_docs_blocks_paragraph_order_idx" ON "legal_docs_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_paragraph_parent_id_idx" ON "legal_docs_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_paragraph_path_idx" ON "legal_docs_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "legal_docs_blocks_heading_order_idx" ON "legal_docs_blocks_heading" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_heading_parent_id_idx" ON "legal_docs_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_heading_path_idx" ON "legal_docs_blocks_heading" USING btree ("_path");
  CREATE INDEX "legal_docs_blocks_list_items_children_order_idx" ON "legal_docs_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_list_items_children_parent_id_idx" ON "legal_docs_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_list_items_order_idx" ON "legal_docs_blocks_list_items" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_list_items_parent_id_idx" ON "legal_docs_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_list_order_idx" ON "legal_docs_blocks_list" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_list_parent_id_idx" ON "legal_docs_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_list_path_idx" ON "legal_docs_blocks_list" USING btree ("_path");
  CREATE INDEX "legal_docs_blocks_callout_order_idx" ON "legal_docs_blocks_callout" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_callout_parent_id_idx" ON "legal_docs_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_callout_path_idx" ON "legal_docs_blocks_callout" USING btree ("_path");
  CREATE INDEX "legal_docs_blocks_table_headers_order_idx" ON "legal_docs_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_table_headers_parent_id_idx" ON "legal_docs_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_table_rows_cells_order_idx" ON "legal_docs_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_table_rows_cells_parent_id_idx" ON "legal_docs_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_table_rows_order_idx" ON "legal_docs_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_table_rows_parent_id_idx" ON "legal_docs_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_table_order_idx" ON "legal_docs_blocks_table" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_table_parent_id_idx" ON "legal_docs_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_table_path_idx" ON "legal_docs_blocks_table" USING btree ("_path");
  CREATE INDEX "legal_docs_blocks_quote_order_idx" ON "legal_docs_blocks_quote" USING btree ("_order");
  CREATE INDEX "legal_docs_blocks_quote_parent_id_idx" ON "legal_docs_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "legal_docs_blocks_quote_path_idx" ON "legal_docs_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "legal_docs_path_idx" ON "legal_docs" USING btree ("path");
  CREATE INDEX "legal_docs_superseded_by_idx" ON "legal_docs" USING btree ("superseded_by_id");
  CREATE INDEX "legal_docs_updated_at_idx" ON "legal_docs" USING btree ("updated_at");
  CREATE INDEX "legal_docs_created_at_idx" ON "legal_docs" USING btree ("created_at");
  CREATE INDEX "legal_docs__status_idx" ON "legal_docs" USING btree ("_status");
  CREATE UNIQUE INDEX "path_3_idx" ON "legal_docs" USING btree ("path");
  CREATE INDEX "status_idx" ON "legal_docs" USING btree ("status");
  CREATE INDEX "effectiveDate_idx" ON "legal_docs" USING btree ("effective_date");
  CREATE INDEX "legal_docs_rels_order_idx" ON "legal_docs_rels" USING btree ("order");
  CREATE INDEX "legal_docs_rels_parent_idx" ON "legal_docs_rels" USING btree ("parent_id");
  CREATE INDEX "legal_docs_rels_path_idx" ON "legal_docs_rels" USING btree ("path");
  CREATE INDEX "legal_docs_rels_help_docs_id_idx" ON "legal_docs_rels" USING btree ("help_docs_id");
  CREATE INDEX "legal_docs_rels_support_docs_id_idx" ON "legal_docs_rels" USING btree ("support_docs_id");
  CREATE INDEX "legal_docs_rels_trust_docs_id_idx" ON "legal_docs_rels" USING btree ("trust_docs_id");
  CREATE INDEX "legal_docs_rels_legal_docs_id_idx" ON "legal_docs_rels" USING btree ("legal_docs_id");
  CREATE INDEX "_legal_docs_v_blocks_paragraph_order_idx" ON "_legal_docs_v_blocks_paragraph" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_paragraph_parent_id_idx" ON "_legal_docs_v_blocks_paragraph" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_paragraph_path_idx" ON "_legal_docs_v_blocks_paragraph" USING btree ("_path");
  CREATE INDEX "_legal_docs_v_blocks_heading_order_idx" ON "_legal_docs_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_heading_parent_id_idx" ON "_legal_docs_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_heading_path_idx" ON "_legal_docs_v_blocks_heading" USING btree ("_path");
  CREATE INDEX "_legal_docs_v_blocks_list_items_children_order_idx" ON "_legal_docs_v_blocks_list_items_children" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_list_items_children_parent_id_idx" ON "_legal_docs_v_blocks_list_items_children" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_list_items_order_idx" ON "_legal_docs_v_blocks_list_items" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_list_items_parent_id_idx" ON "_legal_docs_v_blocks_list_items" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_list_order_idx" ON "_legal_docs_v_blocks_list" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_list_parent_id_idx" ON "_legal_docs_v_blocks_list" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_list_path_idx" ON "_legal_docs_v_blocks_list" USING btree ("_path");
  CREATE INDEX "_legal_docs_v_blocks_callout_order_idx" ON "_legal_docs_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_callout_parent_id_idx" ON "_legal_docs_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_callout_path_idx" ON "_legal_docs_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_legal_docs_v_blocks_table_headers_order_idx" ON "_legal_docs_v_blocks_table_headers" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_table_headers_parent_id_idx" ON "_legal_docs_v_blocks_table_headers" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_table_rows_cells_order_idx" ON "_legal_docs_v_blocks_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_table_rows_cells_parent_id_idx" ON "_legal_docs_v_blocks_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_table_rows_order_idx" ON "_legal_docs_v_blocks_table_rows" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_table_rows_parent_id_idx" ON "_legal_docs_v_blocks_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_table_order_idx" ON "_legal_docs_v_blocks_table" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_table_parent_id_idx" ON "_legal_docs_v_blocks_table" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_table_path_idx" ON "_legal_docs_v_blocks_table" USING btree ("_path");
  CREATE INDEX "_legal_docs_v_blocks_quote_order_idx" ON "_legal_docs_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_legal_docs_v_blocks_quote_parent_id_idx" ON "_legal_docs_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_legal_docs_v_blocks_quote_path_idx" ON "_legal_docs_v_blocks_quote" USING btree ("_path");
  CREATE INDEX "_legal_docs_v_parent_idx" ON "_legal_docs_v" USING btree ("parent_id");
  CREATE INDEX "_legal_docs_v_version_version_path_idx" ON "_legal_docs_v" USING btree ("version_path");
  CREATE INDEX "_legal_docs_v_version_version_superseded_by_idx" ON "_legal_docs_v" USING btree ("version_superseded_by_id");
  CREATE INDEX "_legal_docs_v_version_version_updated_at_idx" ON "_legal_docs_v" USING btree ("version_updated_at");
  CREATE INDEX "_legal_docs_v_version_version_created_at_idx" ON "_legal_docs_v" USING btree ("version_created_at");
  CREATE INDEX "_legal_docs_v_version_version__status_idx" ON "_legal_docs_v" USING btree ("version__status");
  CREATE INDEX "_legal_docs_v_created_at_idx" ON "_legal_docs_v" USING btree ("created_at");
  CREATE INDEX "_legal_docs_v_updated_at_idx" ON "_legal_docs_v" USING btree ("updated_at");
  CREATE INDEX "_legal_docs_v_latest_idx" ON "_legal_docs_v" USING btree ("latest");
  CREATE INDEX "_legal_docs_v_autosave_idx" ON "_legal_docs_v" USING btree ("autosave");
  CREATE INDEX "version_path_3_idx" ON "_legal_docs_v" USING btree ("version_path");
  CREATE INDEX "version_status_idx" ON "_legal_docs_v" USING btree ("version_status");
  CREATE INDEX "version_effectiveDate_idx" ON "_legal_docs_v" USING btree ("version_effective_date");
  CREATE INDEX "_legal_docs_v_rels_order_idx" ON "_legal_docs_v_rels" USING btree ("order");
  CREATE INDEX "_legal_docs_v_rels_parent_idx" ON "_legal_docs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_legal_docs_v_rels_path_idx" ON "_legal_docs_v_rels" USING btree ("path");
  CREATE INDEX "_legal_docs_v_rels_help_docs_id_idx" ON "_legal_docs_v_rels" USING btree ("help_docs_id");
  CREATE INDEX "_legal_docs_v_rels_support_docs_id_idx" ON "_legal_docs_v_rels" USING btree ("support_docs_id");
  CREATE INDEX "_legal_docs_v_rels_trust_docs_id_idx" ON "_legal_docs_v_rels" USING btree ("trust_docs_id");
  CREATE INDEX "_legal_docs_v_rels_legal_docs_id_idx" ON "_legal_docs_v_rels" USING btree ("legal_docs_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_payload_users_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_users_id");
  CREATE INDEX "payload_locked_documents_rels_nav_nodes_id_idx" ON "payload_locked_documents_rels" USING btree ("nav_nodes_id");
  CREATE INDEX "payload_locked_documents_rels_help_docs_id_idx" ON "payload_locked_documents_rels" USING btree ("help_docs_id");
  CREATE INDEX "payload_locked_documents_rels_support_docs_id_idx" ON "payload_locked_documents_rels" USING btree ("support_docs_id");
  CREATE INDEX "payload_locked_documents_rels_trust_docs_id_idx" ON "payload_locked_documents_rels" USING btree ("trust_docs_id");
  CREATE INDEX "payload_locked_documents_rels_legal_docs_id_idx" ON "payload_locked_documents_rels" USING btree ("legal_docs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_payload_users_id_idx" ON "payload_preferences_rels" USING btree ("payload_users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "payload_users_roles" CASCADE;
  DROP TABLE "payload_users_sessions" CASCADE;
  DROP TABLE "payload_users" CASCADE;
  DROP TABLE "nav_nodes" CASCADE;
  DROP TABLE "nav_nodes_rels" CASCADE;
  DROP TABLE "help_docs_blocks_paragraph" CASCADE;
  DROP TABLE "help_docs_blocks_heading" CASCADE;
  DROP TABLE "help_docs_blocks_list_items_children" CASCADE;
  DROP TABLE "help_docs_blocks_list_items" CASCADE;
  DROP TABLE "help_docs_blocks_list" CASCADE;
  DROP TABLE "help_docs_blocks_callout" CASCADE;
  DROP TABLE "help_docs_blocks_table_headers" CASCADE;
  DROP TABLE "help_docs_blocks_table_rows_cells" CASCADE;
  DROP TABLE "help_docs_blocks_table_rows" CASCADE;
  DROP TABLE "help_docs_blocks_table" CASCADE;
  DROP TABLE "help_docs_blocks_quote" CASCADE;
  DROP TABLE "help_docs" CASCADE;
  DROP TABLE "help_docs_rels" CASCADE;
  DROP TABLE "_help_docs_v_blocks_paragraph" CASCADE;
  DROP TABLE "_help_docs_v_blocks_heading" CASCADE;
  DROP TABLE "_help_docs_v_blocks_list_items_children" CASCADE;
  DROP TABLE "_help_docs_v_blocks_list_items" CASCADE;
  DROP TABLE "_help_docs_v_blocks_list" CASCADE;
  DROP TABLE "_help_docs_v_blocks_callout" CASCADE;
  DROP TABLE "_help_docs_v_blocks_table_headers" CASCADE;
  DROP TABLE "_help_docs_v_blocks_table_rows_cells" CASCADE;
  DROP TABLE "_help_docs_v_blocks_table_rows" CASCADE;
  DROP TABLE "_help_docs_v_blocks_table" CASCADE;
  DROP TABLE "_help_docs_v_blocks_quote" CASCADE;
  DROP TABLE "_help_docs_v" CASCADE;
  DROP TABLE "_help_docs_v_rels" CASCADE;
  DROP TABLE "support_docs_blocks_paragraph" CASCADE;
  DROP TABLE "support_docs_blocks_heading" CASCADE;
  DROP TABLE "support_docs_blocks_list_items_children" CASCADE;
  DROP TABLE "support_docs_blocks_list_items" CASCADE;
  DROP TABLE "support_docs_blocks_list" CASCADE;
  DROP TABLE "support_docs_blocks_callout" CASCADE;
  DROP TABLE "support_docs_blocks_table_headers" CASCADE;
  DROP TABLE "support_docs_blocks_table_rows_cells" CASCADE;
  DROP TABLE "support_docs_blocks_table_rows" CASCADE;
  DROP TABLE "support_docs_blocks_table" CASCADE;
  DROP TABLE "support_docs_blocks_quote" CASCADE;
  DROP TABLE "support_docs" CASCADE;
  DROP TABLE "support_docs_rels" CASCADE;
  DROP TABLE "_support_docs_v_blocks_paragraph" CASCADE;
  DROP TABLE "_support_docs_v_blocks_heading" CASCADE;
  DROP TABLE "_support_docs_v_blocks_list_items_children" CASCADE;
  DROP TABLE "_support_docs_v_blocks_list_items" CASCADE;
  DROP TABLE "_support_docs_v_blocks_list" CASCADE;
  DROP TABLE "_support_docs_v_blocks_callout" CASCADE;
  DROP TABLE "_support_docs_v_blocks_table_headers" CASCADE;
  DROP TABLE "_support_docs_v_blocks_table_rows_cells" CASCADE;
  DROP TABLE "_support_docs_v_blocks_table_rows" CASCADE;
  DROP TABLE "_support_docs_v_blocks_table" CASCADE;
  DROP TABLE "_support_docs_v_blocks_quote" CASCADE;
  DROP TABLE "_support_docs_v" CASCADE;
  DROP TABLE "_support_docs_v_rels" CASCADE;
  DROP TABLE "trust_docs_blocks_paragraph" CASCADE;
  DROP TABLE "trust_docs_blocks_heading" CASCADE;
  DROP TABLE "trust_docs_blocks_list_items_children" CASCADE;
  DROP TABLE "trust_docs_blocks_list_items" CASCADE;
  DROP TABLE "trust_docs_blocks_list" CASCADE;
  DROP TABLE "trust_docs_blocks_callout" CASCADE;
  DROP TABLE "trust_docs_blocks_table_headers" CASCADE;
  DROP TABLE "trust_docs_blocks_table_rows_cells" CASCADE;
  DROP TABLE "trust_docs_blocks_table_rows" CASCADE;
  DROP TABLE "trust_docs_blocks_table" CASCADE;
  DROP TABLE "trust_docs_blocks_quote" CASCADE;
  DROP TABLE "trust_docs" CASCADE;
  DROP TABLE "trust_docs_rels" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_paragraph" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_heading" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_list_items_children" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_list_items" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_list" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_callout" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_table_headers" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_table_rows_cells" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_table_rows" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_table" CASCADE;
  DROP TABLE "_trust_docs_v_blocks_quote" CASCADE;
  DROP TABLE "_trust_docs_v" CASCADE;
  DROP TABLE "_trust_docs_v_rels" CASCADE;
  DROP TABLE "legal_docs_blocks_paragraph" CASCADE;
  DROP TABLE "legal_docs_blocks_heading" CASCADE;
  DROP TABLE "legal_docs_blocks_list_items_children" CASCADE;
  DROP TABLE "legal_docs_blocks_list_items" CASCADE;
  DROP TABLE "legal_docs_blocks_list" CASCADE;
  DROP TABLE "legal_docs_blocks_callout" CASCADE;
  DROP TABLE "legal_docs_blocks_table_headers" CASCADE;
  DROP TABLE "legal_docs_blocks_table_rows_cells" CASCADE;
  DROP TABLE "legal_docs_blocks_table_rows" CASCADE;
  DROP TABLE "legal_docs_blocks_table" CASCADE;
  DROP TABLE "legal_docs_blocks_quote" CASCADE;
  DROP TABLE "legal_docs" CASCADE;
  DROP TABLE "legal_docs_rels" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_paragraph" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_heading" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_list_items_children" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_list_items" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_list" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_callout" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_table_headers" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_table_rows_cells" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_table_rows" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_table" CASCADE;
  DROP TABLE "_legal_docs_v_blocks_quote" CASCADE;
  DROP TABLE "_legal_docs_v" CASCADE;
  DROP TABLE "_legal_docs_v_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_payload_users_roles";
  DROP TYPE "public"."enum_help_docs_blocks_heading_level";
  DROP TYPE "public"."enum_help_docs_blocks_callout_variant";
  DROP TYPE "public"."enum_help_docs_status";
  DROP TYPE "public"."enum__help_docs_v_blocks_heading_level";
  DROP TYPE "public"."enum__help_docs_v_blocks_callout_variant";
  DROP TYPE "public"."enum__help_docs_v_version_status";
  DROP TYPE "public"."enum_support_docs_blocks_heading_level";
  DROP TYPE "public"."enum_support_docs_blocks_callout_variant";
  DROP TYPE "public"."enum_support_docs_category";
  DROP TYPE "public"."enum_support_docs_status";
  DROP TYPE "public"."enum__support_docs_v_blocks_heading_level";
  DROP TYPE "public"."enum__support_docs_v_blocks_callout_variant";
  DROP TYPE "public"."enum__support_docs_v_version_category";
  DROP TYPE "public"."enum__support_docs_v_version_status";
  DROP TYPE "public"."enum_trust_docs_blocks_heading_level";
  DROP TYPE "public"."enum_trust_docs_blocks_callout_variant";
  DROP TYPE "public"."enum_trust_docs_status";
  DROP TYPE "public"."enum__trust_docs_v_blocks_heading_level";
  DROP TYPE "public"."enum__trust_docs_v_blocks_callout_variant";
  DROP TYPE "public"."enum__trust_docs_v_version_status";
  DROP TYPE "public"."enum_legal_docs_blocks_heading_level";
  DROP TYPE "public"."enum_legal_docs_blocks_callout_variant";
  DROP TYPE "public"."enum_legal_docs_status";
  DROP TYPE "public"."enum__legal_docs_v_blocks_heading_level";
  DROP TYPE "public"."enum__legal_docs_v_blocks_callout_variant";
  DROP TYPE "public"."enum__legal_docs_v_version_status";`)
}
