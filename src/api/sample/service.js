module.exports = {
    async getSample(ctx) {
        try {
            ctx.body = "Hello World";
        } catch (e) { console.log(e); }
    },
}