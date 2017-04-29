var orm = require("./config/orm.js");


// Console log all the party_name's.
orm.select("*", "parties");

// Console log all the client_name's.
orm.select("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.leftJoin("*", "clients", "parties", "id", "client_id");
