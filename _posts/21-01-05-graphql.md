---
title: "GraphQL"
tags: web backend
---

<!--more-->

## 개념

- Graph Query Language
    - Query Language: 정보를 얻기 위해 보내는 Query를 만들기 위해 사용되는 Language
- Server API를 통해 정보를 주고받기 위한 Query Language
- 하나의 endpoint를 사용하고, 요청할 대 사용한 Query 문에 따라 응답의 구조가 달라진다.
- backend에서 지정해놓은 틀이 거의 없기 때문에 유연하다.

## 장점

- 원하는 정보를 하나의 Query에 모두 담아 요청할 수 있기 때문에 HTTP 요청 횟수를 줄일 수 있다.
- 필요한 데이터만 받아올 수 있기 때문에 HTTP 응답 size를 줄일 수 있다.
- 원하는 데이터를 요청해 얻어올 수 있다.

## 단점

- File 전송 등 text 만으로 하기 힘든 내용들은 처리하기 어렵다.
- 고정된 request, response 만 사용할 경우, query로 인한 request의 크기가 REST API 보다 더 커진다
- 재귀적인 Query가 불가능
- HTTP 캐싱 사용 불가능 (Apollo 등의 서비스를 이용해 해결 가능)
- 클라이언트 측에서 필요한 데이터를 스스로 결정하기 때문에 데이터 요청 형태가 다양하다. 그래서 잘못된 요청을 필터링하기가 까다롭다.

## 사용처

- 서로 다른 모양의 다양한 request에 대해 응답할 때
- 대부분의 request가 CRUD에 해당할 때

## Apollo

- GraphQL API를 제공하는 서버를 개발할 수 있게 도와주는 패키지
- Node.js에서 사용하는 express와 역할이 비슷

```bash
yarn add apollo-server
```

- express서버와 migration 할거면

```bash
yarn add apollo-server-express
```

# GraphQL

- 클라이언트가 서버로부터 데이터를 요청하는 방식 중 하나

## REST API와의 비교

### OverFetching

- **GraphQL**: request에 자신이 원하는 항목만 명시하면 response에 해당 항목만 반환되기 때문에 network bandwidth를 절약할 수 있다. 다만 요청에 약간의 오버헤드 데이터가 있다
- **REST API**: endpoint 별로 항상 일정한 응답이 반환되기 때문에 필요없는 데이터도 반환된다

### UndeFetching

- **GraphQL**: endpoint가 1개이기 때문에 HTTP 요청 1개에 원하는 데이터를 모두 가져올 수 있다
- **REST API**: resource 종류별로 endpoint가 있기 때문에 원하는 데이터의 endpoint마다 일일이 HTTP request를 해야 한다.

### Type

- **GraphQL**: 자료형 지정이 가능

### CrossPlatform

- **GraphQL**: Web, Android, iOS 등 클라이언트 별로 API를 만들 필요 없이 하나로 통일할 수 있다.
- **REST API**: Android와 iOS 가 같은 기능을 수행하더라도, 해당 기능을 수행하기 위해 필요한 데이터가 다를 수 있다. 이 경우 OS 별로 API를 관리해줘야 한다.

### Schema

- GraphQL : 스키마 파일 작성 필요
- REST API: API 문서 작성 필요

### Query-Mutation

- GraphQL의 Query == REST API의 GET
- GraphQL의 Mutation == REST API의 POST, PUT, DELETE

### Caching

- GraphQL: endpoint가 1개라서 HTTP 캐싱을 그대로 이용 불가능. 그러나 Apollo client에서 다른 캐싱 기능 지원
- REST API: endpoint가 여러개이기 때문에 각 데이터 요청에 대해 HTTP 캐싱을 그대로 활용 가능

---

## Reference

- [https://velog.io/@gwak2837/React에-Apollo-Client-연결하기](https://velog.io/@gwak2837/React%EC%97%90-Apollo-Client-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0)
