use dotenv::dotenv;
use teloxide::{prelude::*, utils::command::BotCommands};
use teloxide::types::{InlineKeyboardButton, InlineKeyboardMarkup};
use url::Url;

#[tokio::main]
async fn main() {
    dotenv().ok();
    pretty_env_logger::init();

    log::info!("Запуск бота...");

    
    let token = dotenv::var("TELOXIDE_TOKEN").expect("Failed to get a TELOXIDE_TOKEN");

    let bot = Bot::new(token);

    Command::repl(bot, answer).await;
}

#[derive(BotCommands, Clone)]
#[command(rename_rule = "lowercase", description = "These commands are supported:")]
enum Command {
    #[command(description = "Open Web App")]
    OpenWebApp,
}

async fn answer(bot: Bot, msg: Message, cmd: Command) -> ResponseResult<()> {
    let web_app_url = dotenv::var("WEB_APP_URL").expect("Failed to get a WEB_APP_URL");

    let button = InlineKeyboardButton::url("Открыть веб-приложение", Url::parse(&web_app_url).expect("Invalid URL"));

    // Создайте разметку для кнопки
    let keyboard = InlineKeyboardMarkup::default().append_row(vec![button]);

    match cmd {
        Command::OpenWebApp => bot.send_message(msg.chat.id, Command::descriptions().to_string()).reply_markup(keyboard).await?,
    };

    Ok(())
}