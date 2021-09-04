---
title: "[NodeJS] express-generator"
category: WEB
tags: web backend nodejs
---

<!--more-->

# express

## Start Proejct with express

```bash
npm init

// npm install express
yarn add express
```

## Start Project with express generator

```bash
npm install express-generator -g
express --view=pug myapp
```

## Nodemon

### Install

```bash
npm install --save-dev nodemon
```

### Package.json

```json
"scripts": {
	"start": "nodemon ./bin/www"
}
```

### Start

```bash
npm install
SET DEBUG=ewha-farm-server:* & npm start

yarn
yarn start
```

### Result

```bash
yarn run v1.22.5
$ nodemon ./bin/www
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./bin/www`
```

# express generator 구조

```bash
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```

**🔨 bin/www**

http 모듈에 express 모듈을 연결하며, 포트를 지정할 수 있다.서버를 실행하는 스크립트이다.

**🔨 public**

각종 리소스들을 모아놓은 폴더로 외부(브라우저 등의 클라이언트)에서 접근 가능한 파일들을 모아 둔 디렉토리이다.images, javascripts, stylesheets 파일들이 들어있다.

**🔨 routes**

라우터들을 관리하는 곳으로 서버의 로직은 모두 routes 폴더 안의 파일에 작성할 것이다. index.js를 기반으로 라우팅 관리를 해주면 된다. routes 디렉토리 안에 또 폴더를 만들어 관리하던지 파일을 만들어 관리하던지 하면 된다. 다만 index.js가 루트가 되게!

**🔨 views**

view 파일들을 관리하는 곳으로 웹서버로 사용 시 이 디렉토리에 잇는 파일들을 사용해서 렌더링 시킨다.

**🔨 app.js**

대망의 app.js! 핵심적인 서버의 역할을 하며 미들웨어 관리를 하는 곳이다.

## Reference

[[Node.js] #6 Express / Express-generator로 프로젝트 만들기](https://velog.io/@new_wisdom/Node.js-6-Express-Express-generator%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0)
