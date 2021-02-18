import { controller, get } from 'koa-dec-router'

@controller('/api/v1/categories')
export class CategoriesController {
    @get('/')
    async getCategories(ctx) {
        ctx.ok('Hello, from Koa');
    }
}