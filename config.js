const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "saffian911",
      password: "Password",
      database: "ticketz_dash",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;