# rails-nextjs-template

Ruby on RailsとNext.jsによるWebアプリケーションテンプレート。  

## 実行方法

```shell
docker compose up db -d [--build]
docker compose up app -d [--build]
```

---

APIコントローラを追加するには、以下のコマンドを実行。  

```shell
rails generate controller Api::V1::<API名>
# docker-compose run app rails generate controller Api::V1::<API名>
```

`routes.rb`でURLマッピングをし、`app/controllers`に作成されたファイルを改修する。  
