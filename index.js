const { initConnection } = require("./lib/db.js");
const { createServer } = require("./lib/server.js");

(async function bootstrap() {
    try {
        await initConnection();

        const server = await createServer();

        server.listen(3000, () => 'Server listening on ' + 3000 + ' port.')
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}());