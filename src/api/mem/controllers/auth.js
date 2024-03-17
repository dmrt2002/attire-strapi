// api/members/controllers/auth.js

module.exports = {
    async login(ctx) {
        console.log("inside login")
        const { email, password } = ctx.request.body;

        if (!email || !password) {
            return ctx.badRequest('Missing email or password');
        }

        const member = await strapi.db.query('api::mem.mem').findOne({
            where: { email: email }
        });

        if (!member) {
            return ctx.notFound('Member not found');
        }

        if (password !== member.password) {
            return ctx.unauthorized('Invalid credentials');
        }

        return {
            member: {
                id: member.id,
                email: member.email,
                name: member.name
            },
        };
    },
};
