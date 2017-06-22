#事前準備
①nodeインストール
下記よりインストールしといてください

https://nodejs.org/en/

②ターミナルを開き、該当フォルダまで移動してください
例）
機器番号:フォルダ名 ユーザ番号$



gulp インストール手順

1.npmインストール
$	sudo npm install -g npm

2.npmファイル作成
$	npm init

package.json生成される
{
  "name": "プロダクト名",
  "version": "1.0.0",
  "author": "",
  "license": "ISC",
  "devDependencies": {　// オプション機能
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-imagemin": "^3.2.0",
    "gulp-sass": "^3.1.0",
    "gulp-watch": "^4.3.11",
    "imagemin-pngquant": "^5.0.0"
  }
}

3.gulpインストール
グローバル
$	sudo npm install -g gulp

ローカル
$	sudo npm install gulp --save

確認
$ gulp -v
下記のように表示されればOK
[16:04:45] CLI version 3.9.1
[16:04:45] Local version 3.9.1

4.入れといた方が良いオプション機能
$	sudo npm install gulp-sass --save
$	sudo npm install gulp-watch --save
$	sudo npm install gulp-imagemin --save
$	sudo npm install gulp-autoprefixer --save
$	sudo npm install imagemin-pngquant --save
