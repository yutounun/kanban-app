const bodyParser = require('body-parser')

// Epressアプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
  // HTTPリクエストのbofyをJSONとして解析するミドルウェアをインストール
  app.use(bodyParser.json())
}