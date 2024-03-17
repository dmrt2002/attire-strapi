// api/members/controllers/auth.js

module.exports = {
    async details(ctx) {
        console.log("inside details")
        const { id } = ctx.request.body;

        if (!id) {
            return ctx.badRequest('Missing user id');
        }

        // @ts-ignore
        const orders = await strapi.db.query('api::ord.ord').findMany({
            where: { user_id: id }
        });

        console.log(orders, "orders-tushar")

        if (!orders) {
            return {
                notFound: true
            };
        }

        return {
            orders: orders
        }
    },
};
