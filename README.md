# RFPコーポレートサイトを管理するプロジェクト


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

