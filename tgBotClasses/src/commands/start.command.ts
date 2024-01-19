import { Command } from "./command.class";
import {Markup, Telegraf} from 'telegraf'
import {IBotContext} from '../context/context.interface'
import { log } from "console";

export class StartCommand extends Command {

    constructor(bot: Telegraf<IBotContext>){
        super(bot)
    }

    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session);
            ctx.reply('Did u like course?', Markup.inlineKeyboard([
                Markup.button.callback('Yes', 'course_liked'),
                Markup.button.callback('No', 'course_disliked')
            ]))
        })
        
        this.bot.action('course_liked', (ctx) => {
            // ctx.session.courseLike = true
            ctx.editMessageText('Cool')
        })

        this.bot.action('course_disliked', (ctx) => {
            // ctx.session.courseLike = false
            ctx.editMessageText('ok')
        })
    }
}