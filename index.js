const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const portOffset = parseInt(process.env.NODE_APP_INSTANCE);

router.get("/health", async ctx => {
    const healthServerNumber = portOffset + 1;
    ctx.body = "health status server " + healthServerNumber + " -> ok";
    ctx.status = 200;
});

router.get("/", async ctx => {
    ctx.body = "default route";
    ctx.status = 200;
});

app.use(router.routes());
app.listen(9001 + portOffset);
