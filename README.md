# rails-nextjs-template

ð¶ð¶ð¶ Ruby on Railsã¨Next.jsã«ããWebã¢ããªã±ã¼ã·ã§ã³ãã³ãã¬ã¼ãã  
RailsãAPIã¢ã¼ãã§ä½¿ç¨ããã  

![ææç©](./.development/img/fruit.gif)  

## å®è¡æ¹æ³

```shell
docker compose up db -d [--build]
docker compose up api -d [--build]
docker compose up web -d [--build]
```

---

APIã³ã³ãã­ã¼ã©ãè¿½å ããã«ã¯ãä»¥ä¸ã®ã³ãã³ããå®è¡ã  

```shell
rails generate controller Api::V1::<APIå>
# docker-compose run api rails generate controller Api::V1::<APIå>
```

`routes.rb`ã§URLãããã³ã°ããã`app/controllers`ã«ä½æããããã¡ã¤ã«ã«å®è£ããã  
