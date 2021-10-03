---
title: Simplifying Semi-Supervised Learning with Consistency and Confidence (FixMatch)
category: AI
tags: ai paper 🔥
article_header:
    type: overlay
    theme: dark
    background_color: "#123"
    background_image: false
cover: /assets/images/21-10-01-self-supervised-augmentation-consistency-2021-10-01-19-39-57.png
---

Semi-supervised learning에서 Pseudo-labeling과 consistency regularization을 결합한 방법

<!--more-->

- [Paper](https://arxiv.org/ftp/arxiv/papers/2001/2001.07685.pdf)
- [Github](https://github.com/visinf/da-sac)

# Introduction

![](/assets/images/21-10-03-fixmatch-diagram.png)

1. Unlabeled 데이터를 Weakly-augmentation 하고 모델을 통해 prediction 값을 얻어낸다.
2. Class probability에서 threshold 값을 넘는 클래스를 one-hot pseudo-label을 취한다. (해당 클래스의 확률을 1로)
3. 같은 이미지에 대해 Strong-augmentation 한다
4. Strong augmentation 이미지를 input으로 사용하여 얻어진 class probability 와(Cross-entropy loss), weaky augmentation에서 얻어진 pseudo label 결과와 함께 모델을 학습시킨다. 