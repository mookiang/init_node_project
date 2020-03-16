module.exports = {
    async getSample(ctx) {
        try {
            ctx.body = "Hello World";
        } catch (e) { console.log(e); }
    },

    async getChatbot(ctx) {
        try {
            ctx.body = 'Hello Chatbot!';
        } catch (e) { console.log(e); }
    },

    async postChatbot(ctx) {
        try {
            console.log(ctx.request.body);
            ctx.body = {
                data: 'Chatbot - Data'
            }
        } catch (e) { console.log(e); }
    }
}