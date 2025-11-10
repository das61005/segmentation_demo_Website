頸動脈分割AIデモサイト（github）

このプロジェクトは、医用画像（頸動脈）をアップロードし、AIによるセグメンテーション結果を表示する Web アプリケーションです。ユーザー認証機能（登録・ログイン）を備え、JWT による保護されたページアクセスを実現しています。

使用技術:
- フロントエンド: HTML, CSS, JavaScript
- バックエンド: Node.js, Express
- データベース: PostgreSQL
- 認証: JWT（JSON Web Token）
- AI分割API: Hugging Face Spaces (UNet-carotid-segmentation)
- 開発環境: VS Code, pgAdmin

セットアップ手順:
1. リポジトリをクローン
   git clone https://github.com/your-username/carotid-segmentation-demo.git
   cd carotid-segmentation-demo

2. 必要なパッケージをインストール
   npm install

3. .env ファイルを作成
   PORT=3001
   DB_URL=postgresql://postgres:your_password@localhost:5432/segmentation
   JWT_SECRET=your_secret_key

4. PostgreSQL に users テーブルを作成
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     username TEXT UNIQUE NOT NULL,
     password TEXT NOT NULL
   );

5. サーバーを起動
   node server.js

機能テスト手順:
1. register.html で新規ユーザー登録
2. login.html でログイン → JWT を取得
3. index.html に遷移 → ユーザー名表示
4. 画像をアップロード → AI による分割結果を表示
5. 「ログアウト」ボタンでセッション終了

フォルダ構成:
routes/           認証API（auth.js）
test_data/        テスト用画像（任意）
db.js             PostgreSQL接続設定
server.js         Expressサーバー起動
login.html        ログイン画面
register.html     登録画面
index.html        メイン機能画面
login.js          ログイン処理（前端）
script.js         分割処理（前端）
style.css         共通スタイル
.env              環境変数（ローカル用）
package.json      プロジェクト設定



