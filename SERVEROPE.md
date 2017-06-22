# 事前準備
* コーポレートサイトはHTML5＋CSS3を推奨しています。
* SCSS/Gulpを利用するための環境


## 運用ルール
* フロントエンド資源に改修が入る場合、フロントコーダーさんによりpush
* デフォルトブランチは、develop
* 小規模は、developにて直修正
* 中規模は、developから派生させたブランチを作成し、そちらにpush

## 運用フロー
1. フロントコーダーは、リポジトリにpushすることでフロント資源を納品

-- 記述途中 --

## 準備（HTMLファイルの取得）
* 適当なローカルにディレクトリに、corporate-site プロジェクトをcloneする

```
$ cd hogehoge
$ git clone https://github.com/corporate-site.git
```

pushでなんどもパスワードを聞かれた場合の対処法
リモートリポジトリパスを書き換える
```
$ git clone https://username:password@github.com/org/project.git
```

* 以降は、適宜checkout / pullしてください

## 目的やその他
* 継続的な修正をしやすくするために、フロントエンド資源のバージョン管理はしっかりしていく。  

## デプロイ環境

-- 記述途中 --


* 運用フローは以下  
 <a href="https://github.com/corporate-site/SERVEROPE.md" target="_blank">フロントエンド開発環境構築手順</a>



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
