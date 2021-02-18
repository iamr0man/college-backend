const Koa = require('koa');
const cors = require('@koa/cors');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const helmet = require('koa-helmet');
const DecRouter = require('koa-dec-router');
const noCache = require('koa-no-cache');
const morgan = require('koa-morgan');

const { db, isDbConnectionInited } = require('./db.js');

const {pageResponse} = require('../helpers/response-methods.js');

const notFoundHandler = require('../middleware/not-found.js');

export async function createApp() {
    const app = new Koa();
    const controllersDir = [
        `${__dirname}/../modules/categories/controllers`
    ]

    const decRouter = DecRouter({
        controllersDir
    });

    app
        .use(morgan(
                ':method :url :status :response-time ms - :res[content-length]'
            )
        )
        .use(helmet())
        .use(compress())
        .use(
            respond({
                methods: {
                    page: pageResponse
                }
            })
        )
        .use(
            cors({
                credentials: true,
                origin: (ctx) => ctx.request.header.origin
            })
        )
        .use(bodyParser())
        .use(
            noCache({
                paths: ['/api/v1/(.*)'],
                types: ['json', 'application/json']
            })
        )
        .use((ctx, next) => {
            if (!isDbConnectionInited) {
                return next(ctx);
            }
            return db.transaction(() => next(ctx));
        })
        .use(decRouter.router.routes())
        .use(decRouter.router.allowedMethods())
        .use(notFoundHandler);
    return app;
}

export async function createServer() {
    const app = await createApp();

    return http.createServer(app.callback());
}
