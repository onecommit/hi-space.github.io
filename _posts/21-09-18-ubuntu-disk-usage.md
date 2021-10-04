---
title: "[Ubuntu] 폴더 용량 확인 (du, df)"
category: ENV
tags: env ubuntu
---

폴더 용량을 확인할 때 du (disk usage) 명령어를 사용한다 + 파일 카운팅 / 리스팅

```sh
# 특정 폴더(하위 파일/폴더 포함)의 전체 용량을 확인
du -sh [폴더]

# 파일 시스템의 디스크 사용량 확인
df -h -P

# 파일 갯수 카운팅
find /path/to/find -name '*.png' -type f | wc -l
```

<!--more-->

## 폴더 용량 확인

```sh
du [option] [폴더]
```

주로 사용할 옵션은 아래와 같다.

- `-a`: 하위 폴더의 모든 파일, 폴더 기본 정보 출력
- `-c`: 모든 파일의 사용정보와 합께 출력
- `-h`: KB, MB, G 등 보기 쉽게 출력
- `-s`: 총 사용량만 출력
- `-x`: 현재 파일 시스템의 파일 사용량을 출력
- `-X [파일명]`: 지정한 파일명은 제외

그래서 특정 폴더(하위 파일/폴더 포함)의 전체 용량을 확인하기 위해 이 명령어를 사용한다.

```sh
du -sh [폴더]
```

## 파일 시스템 용량 확인

du 가 디렉토리 용량을 확인하기 위한 명령어라면 df는 파일 시스템의 디스크 사용량을 확인하기 위한 명령어이다.

```sh
df -h -P
```

## 파일 갯수 카운팅

```sh
# 자식 디렉토리 파일 개수 포함 (recursive)
# type: f (파일) / d (디렉토리)
find /path/to/find -name '*.png' -type f | wc -l
```

## 파일 리스트

```sh
# 현재 디렉토리 내에 있는 디렉토리
ls -l | grep ^d | wc -l

# 현재 디렉토리 내에 있는 파일
ls -l | grep ^- | wc -l

# 현재 디렉토리 내에 있는 파일 (서브디렉토리 포함)
ls -Rl | grep ^- | wc -l

# 정규식을 이용해서 파일명 필터링
ls -l | grep ^- | awk '{print $9}' | grep '[정규식]' | wc -l

# 특정 확장자의 파일
ls -Rl | grep '^-.*\.txt$'
```

# Reference

- [리눅스 find 명령어 사용법 - 리눅스 파일 검색](https://recipes4dev.tistory.com/156)