
```
npm run dev
```


[Pages]

```
https://developers.cloudflare.com/pages/
npm create cloudflare@latest -- --platform=pages

```

[R2]

```
wrangler r2 bucket create　create hello-cloudflare-pages
curl -X POST "http://localhost:8788/put?key=hello.txt" -H "content-type: text/plain"  --data-binary "Hello R2"
curl -X POST "http://localhost:8788/get?key=hello.txt"
```

[D1]

```
npx wrangler d1 create hello-cloudflare-pages

npx wrangler d1 execute hello-cloudflare-pages --command "CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT);"
npx wrangler d1 execute hello-cloudflare-pages --command "INSERT INTO messages (text) VALUES ('Hello D1!');"

curl -X POST http://localhost:8788/api/d1 -H "Content-Type: application/json" -d '{"text": "Hello from curl!"}'

curl http://localhost:8788/api/d1


```
