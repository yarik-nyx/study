"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const command_class_1 = require("./command.class");
const telegraf_1 = require("telegraf");
class StartCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.start((ctx) => {
            console.log(ctx.session);
            ctx.reply('Did u like course?', telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.callback('Yes', 'course_liked'),
                telegraf_1.Markup.button.callback('No', 'course_disliked')
            ]));
        });
        this.bot.action('course_liked', (ctx) => {
            // ctx.session.courseLike = true
            ctx.editMessageText('Cool');
        });
        this.bot.action('course_disliked', (ctx) => {
            // ctx.session.courseLike = false
            ctx.editMessageText('ok');
        });
    }
}
exports.StartCommand = StartCommand;
