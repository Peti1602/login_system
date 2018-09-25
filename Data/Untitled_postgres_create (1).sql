CREATE TABLE "users" (
	"id" serial NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"hash" varchar NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




