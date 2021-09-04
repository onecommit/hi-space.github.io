---
title: Pretext Task
category: AI
tags: ai 🔥
---

self-supervised learning에서는 사용자가 새로운 문제를 정의하는 과정이 필요하다. 이를 pretext task라고 하는데, pretext task를 학습함으로써 network 는 데이터 자체에 대한 이해를 높일 수 있게 된다.

<!--more-->

# Concept

- **pretext task 로 pre-train 된 모델을 사용자가 풀고자하는 문제인 downstream task로 transfer learning 하는 접근 방식**이 Self-supervised learning의 핵심개념이다.  
- Network로 하여금 만든 pretext task를 학습하게 하여 데이터 자체에 대한 이해를 높일 수 있게 하는 방식이다.
- 대표적인 방식으로 Exemplar, context prediction, jigsaw puzzle count, rotation 가 있다.

![](/assets/images/21-09-04-self-supervised-learning-2021-09-04-16-00-10.png)


# Reference

- [Unsupervised Visual Representation Learning Overview (Self-Supervision)](https://seongkyun.github.io/study/2019/11/29/unsupervised/)
- [Pretex task 리뷰에 대한 세미나 자료](http://dmqm.korea.ac.kr/activity/seminar/284)