---
title: Git 초기 계정 설정
category: ENV
tags: env git
---

```sh
git config --global user.name "이름"
git config --global user.email "이메일@gmail.com"
git config credential.helper store
git config --global credential.helper 'cache --timeout 2592000'
```

<!--more-->

Git 사용자 계정 등록 및 세션 유지를 위한 설정

## git config

commit 시 사용자의 정보를 반영하기 위해 git config에 등록해야 한다.

```sh
git config --global user.name "이름"
git config --global user.email "이메일@gmail.com"
```

## Cache 유지

push 할 때 매번 인증하기 번거롭기 때문에 cache를 저장한다.

```sh
git config credential.helper store
git config --global credential.helper 'cache --timeout 2592000'
```

> 1 day: `86400`  
> 7 days: `604800`  
> 30 days: `2592000`
