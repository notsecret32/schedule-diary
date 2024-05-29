use tauri::Builder;
use teloxide::prelude::*;
use teloxide::types::Update;
use dotenv::dotenv;

#[tokio::main]
async fn main() {
    dotenv().ok();
    pretty_env_logger::init();

    log::info!("Запуск бота...");

    
    let token = dotenv::var("TELOXIDE_TOKEN").expect("Failed to get a TELOXIDE_TOKEN");

    let bot = Bot::new(token);

    let tauri_app = Builder::default()
        .on_message(|msg| {
            if let Some(update) = Update::extract_message(&msg.payload) {
                bot.handle_update(update);
            }

            Ok(())
        })
        .build(tauri::generate_context!())
        .expect("Error while building Tauri application");

    tauri_app.run();
}
