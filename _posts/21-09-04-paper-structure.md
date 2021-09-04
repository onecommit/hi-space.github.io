---
title: 🔥 논문 구조
tags: paper 🔥
---

<!--more-->

# General

## 1. Abstract

## 2. Introduction

## 3. Related Work

## 4. Method

## 5. Experiments

## 6. Conclusions

## 7. References

---

# Thesis

## 1. 국문 요약 / 영문 요약

## 2. 핵심어

## 3. 서론
### 3-1. 연구 배경 및 목적

## 4. 선행 연구
### 4-1. 선행 연구
### 4-2. 연구의 차별성

## 5. 연구 방법
### 5-1. 연구 과정

## 6. 실험 및 결과

## 7. 참고 문헌

---

# Translate

1. Adobe Reader 사용해서 긁을 것 (그 중에 **각주** 같은 것들은 수작업으로 제거해줘야 함)
2. VS Code 등 (Regexp 지원하는 에디터)에서 Replace 누르고, 정규식(.*) 선택하고,
원문: ([^\.])(\n)
변경: $1_   (단, _는 공백임)
3. 번역기에 넣고 돌리고 두개 동시 비교