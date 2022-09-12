const {
    DB_USER,
    DB_PASSWORD,
    DB_PORT,

    SERVER_PROTOCOL,
    SERVER_DOMAIN,
    SERVER_PORT,

} = process.env;

if (
    DB_USER === undefined
    DB_PASSWORD === undefined
DB_PORT === undefined

SERVER_PROTOCOL === undefined
SERVER_DOMAIN === undefined
SERVER_PORT === undefined
) {
    throw new Error('Please fill ".env" file in project root');
}
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
})