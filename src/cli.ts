#!/usr/bin/env node
import "reflect-metadata";
import {SchemaSyncCommand} from "./commands/SchemaSyncCommand";
import {SchemaDropCommand} from "./commands/SchemaDropCommand";
import {QueryCommand} from "./commands/QueryCommand";
import {EntityCreateCommand} from "./commands/EntityCreateCommand";
import {MigrationCreateCommand} from "./commands/MigrationCreateCommand";
import {MigrationRunCommand} from "./commands/MigrationRunCommand";
import {MigrationRevertCommand} from "./commands/MigrationRevertCommand";
import {SubscriberCreateCommand} from "./commands/SubscriberCreateCommand";
import {SchemaSyncLogCommand} from "./commands/SchemaSyncLogCommand";
import {MigrationGenerateCommand} from "./commands/MigrationGenerateCommand";

require("yargs")
    .usage("Usage: $0 <command> [options]")
    .command(new SchemaSyncCommand())
    .command(new SchemaSyncLogCommand())
    .command(new SchemaDropCommand())
    .command(new QueryCommand())
    .command(new EntityCreateCommand())
    .command(new SubscriberCreateCommand())
    .command(new MigrationCreateCommand())
    .command(new MigrationGenerateCommand())
    .command(new MigrationRunCommand())
    .command(new MigrationRevertCommand())
    .demand(1)
    .version(() => require("./package.json").version)
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .argv;

require("yargonaut")
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");
