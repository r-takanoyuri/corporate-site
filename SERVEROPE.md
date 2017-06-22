# 開発環境構築手順について説明します

## 必要な環境
 - Node.js
 - Gulp
 - SCSS

## ディレクトリ構成
```
build/							<- 公開されているディレクトリ
	├ assets/
 		├ css/
		├ img/
		└ js/
	 ├ data/					<- ニュースページで使用するファイル格納
 		├ release/
			├ img/				<- 記事使用の画像格納
				└ 2017/
			└ pdf/				<- PDF格納
				└ 2017/
		├ guide/				<- このサイトの利用について
		├ news/					<- プレスルーム
			├ release/		<- プレスリリース
				├ 2017/			<- プレスリリース2017年

		└ sitemap				<- サイトマップ
	├ sitemap.xml
	└ robots.txt
src/								<- SCSSが格納されているディレクトリ
	├ assets/
		└ scss/
gulpfile.js
package.json
```

## インストール手順
### Node.jsインストール
下記サイトへアクセスし手順に沿ってインストールしてください
<a href="https://nodejs.org/en/">https://nodejs.org/en/</a>


### npmインストール
```
$ cd /Users/***/corporate-site
$ npm install -g npm

package.jsonとgulpfile.jsは
masterファイルを使用してください
```

### Gulpインストール
```
グローバル
$ npm install -g gulp

ローカル
$ npm install -g gulp --save

確認
$ gulp -v

下記のように表示されればOK
[16:04:45] CLI version 3.9.1
[16:04:45] Local version 3.9.1
```

### option
```
$ npm install gulp-sass --save
$ npm install gulp-watch --save
$ npm install gulp-imagemin --save
$ npm install gulp-autoprefixer --save
$ npm install imagemin-pngquant --save
```

### 動作確認
```
$ gulp watch

下記のように動作すれば正常
[09:19:47] Using gulpfile ~/***/gulpfile.js
[09:19:47] Starting 'watch'...
[09:19:47] Finished 'watch' after 8.96 ms
```
