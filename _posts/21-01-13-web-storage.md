---
title: "Web storage"
subtitle: Cookie vs Local Storage vs Session Storage
category: WEB
tags: web frontend
---

# Cookie

- 쿠키는 매번 서버로 전송
    - Web Storage는 저장된 데이터가 클라이언트에게만 있다.
- 개수와 용량에 있어 제한이 있다
- 만료일자가 있어 언젠가는 제거된다.

# Web Storage

- key, value 쌍으로 데이터를 저장하고 key를 기반으로 데이터를 조회하는 패턴
- LocalStorage (영구 저장소), Session Storage (임시 저장소)

### LocalStorage

- 저장한 데이터를 지우지 않는 이상 영구적 보관이 가능
- 도메인 마다 별도로 local storage가 생성된다
- 브라우저가 종료되어도 데이터는 보관된다

### SessionStorage

- 데이터의 지속성, 액세스 범위에 제한이 존재한다
- 브라우저가 종료되면 삭제된다

<!--more-->
