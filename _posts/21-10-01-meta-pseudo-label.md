---
title: Meta Pseudo Labels
category: AI
tags: ai paper 🔥
article_header:
    type: overlay
    theme: dark
    background_color: "#123"
    background_image: false
cover: /assets/images/21-10-01-meta-pseudo-label-2021-10-02-23-15-21.png
---

Meta Pseudo Labels (CVPR 2021)

<!--more-->

- [Paper](https://arxiv.org/pdf/2003.10580.pdf)
- [Github](https://github.com/kekmodel/MPL-pytorch)

# Introduction

Noisy Student 는 Teacher 모델이 그보다 더 큰 Noisy Student 모델을 학습시키는 형태였다. SOTA를 기록할 만큼 좋은 성능을 보였지만, Teacher 모델의 pseudo labeling 이 정확하지 않으면 Studnet 모델 또한 정확도가 떨어진다는 문제점이 있었다. 

Meta Pseudo Labels 에서는 teacher 와 student 모델을 동시에 학습한다.

# Methods

![](/assets/images/21-10-01-meta-pseudo-label-2021-10-02-23-15-21.png)

Student 가 학습되는 동안 labeled image 에 대한 studnet 의 성능이 teacher 에게 reward 로 전달되고, 이것을 Loss 함수의 파라미터로 사용한다. 
- Student는 teacher에서 생성된 pseudo labeled data로 학습
- Teacher은 student가 labeled image에 대해 얼마나 잘 작동하는지의 reward signal로 학습

