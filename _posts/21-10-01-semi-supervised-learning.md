---
title: Semi-supervised learning
category: AI
tags: ai 🔥
article_header:
    type: overlay
    theme: dark
    background_color: "#123"
    background_image: false
# cover: /assets/images/21-10-01-self-supervised-augmentation-consistency-2021-10-01-19-39-57.png
---

<!--more-->

Semi-supervised learning 은 소량의 labeled 데이터를 사용한 학습 방법이다. 소량의 labeled 데이터로만 학습하게 되면 overfitting 과 같은 문제가 발생할 가능성이 크다. 그래서 소량의 labeled 데이터와 대량의 unlabeled 데이터를 함께 사용하여 성능을 향상시키기 위해 semi-supervised learning이 사용된다. 

# Approach





최근 준지도학습(Semi-supervised learning)에서는 label이 존재하지 않는 data에 noise를 주입한 뒤 모델이 noise가 없는 원본 데이터와 noise가 주입된 데이터를 동일한 class 분포로 예측하도록 학습하는 consistency regularization 방법이 많이 사용되고 있다.

ReMixMatch는 최근 consistency regularization을 사용해 준지도학습에서 높은 성능을 기록했던 MixMatch의 후속 알고리즘으로 기존의 방식에서 unlabeled data의 예측 분포가 labeled data의 예측 분포의 양상을 따르도록 하는 Distribution Alignment와 weak augmentation과 strong augmentation을 함께 이용함으로써 강한 noise를 주입함에도 label 정보를 유지할 수 있는 Augmentation Anchoring의 두 가지 방식을 추가함으로써 높은 성능 향상을 이룩했다. 또한 간단하지만 효과적인 data augmentation 방법인 CTAugment 알고리즘을 제안한다.

FixMatch는 마찬가지로 consistency regularization을 이용한 준지도학습 알고리즘으로 weak augmentation과 strong augmentation(RandAugment, CTAugment)에 pseudo-labeling 방법을 함께 도입해 높은 성능 향상을 이룩했다.


## Entropy Minimization

모델을 좀 더 confident 하게 학습하는 것이 목표이다. loss에 entropy minimization term 을 추가하여 학습한다.

## Pseudo-label

labeled data로 충분히 학습된 모델을 사용하여 unlabeled data에 pseudo-labeling을 한다. 그리고 labeled data 와 pseudo-labeled data 를 섞어서 학습을 한다.

## Consistency regularization

데이터에 약갼의 augmentation을 가하더라도 데이터의 정답 label은 동일하다는 성질을 이용. 

## Mean Teacher

Teacher model과 studnet model이 서로 각각의 모델을 가지고 있다.

## Self-training

가장 단순한 pseudo-labeling 방법.
labeled 데이터와 pseudo-labeling 된 데이터를 이용해 계속해서 학습하는 방식. 학습 초기에는 labeled 데이터만 학습에 사용하다가 점진적으로 pseudo-labeling 데이터들도 학습에 사용한다.

# Referecne

- [Semi-supervised learning 방법론 소개](https://blog.est.ai/2020/11/ssl/)
- [Semi-supervised learning 정리](https://jiwunghyun.medium.com/semi-supervised-learning-%EC%A0%95%EB%A6%AC-a7ed58a8f023)
- [FixMatch: Simplifying Semi-Supervised Learning with Consistency and Confidence](https://2-chae.github.io/category/2.papers/29)
