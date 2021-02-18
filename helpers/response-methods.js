const PAGINATION_COUNT_HEADER = 'x-count';
const PAGINATION_PAGES_HEADER = 'x-pages';

exports.pageResponse = (ctx, list, count = null, size = 25) => {
    ctx.set(PAGINATION_COUNT_HEADER, count);
    ctx.set(PAGINATION_PAGES_HEADER, Math.ceil(count/size));
    ctx.send(200, list);
}