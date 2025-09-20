use actix_web::{get, App, HttpServer, Responder};

#[get("/items")]
async fn items() -> impl Responder {
    "[{\"id\":1,\"name\":\"Widget\"}]"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(items))
        .bind(("0.0.0.0", 4000))?
        .run()
        .await
}