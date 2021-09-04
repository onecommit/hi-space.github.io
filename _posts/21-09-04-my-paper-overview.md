---
title: 🔥 논문 개요/실험 정리 🔥
tags: paper 🔥
---

<!--more-->

# Abstract

실 환경에서 labeling된 실 데이터를 얻는 것은 쉽지 않은 일이다. 특히 segmentation 과 같은 task의 경우 pixel 별로 annotation 해야 하기 때문에 획득 비용이 비싸다. 그래픽 엔진을 통해서 GT 데이터를 얻을 수 있는 방법이 있지만, 실제 real world에 적용할 모델을 학습시키기에는 real과 synthetic 데이터 간의 domain gap이 존재한다.

본 논문에서는 synthetic data를 이용한 self-supervised learning 학습 방법을 제안한다.

domain gap을 줄이면서 동시에 unlabeled real data를 효과적으로 사용하여 학습 성능을 올릴 수 있는 방안에 대해 제안하고자 한다.

---

# Introduction

ImageNet의 데이터 공개를 시작으로 Supervised learning(SL)이 여러 visual task 분야에서 좋은 성과를 거뒀다. 검증된 좋은 모델들이 이미 존재하기 때문에, 특정 문제에 맞는 AI모델을 만들기 위해서는 그에 맞는 양질의 데이터를 얼마나 많이 확보하느냐가 결국 모델의 성능을 좌우하게 되었다.

하지만 task에 맞는 데이터를 확보하고, 그 데이터에 labeling 하는 것은 많은 시간과 비용을 필요로 한다. 이러한 데이터 의존적인 문제들을 해결하기 위해 데이터가 부족하더라도 효과적인 학습을 할 수 있는 다양한 연구들이 진행되고 있다. 유사한 task에서 학습된 pretrain 모델을 가져와 target task에 적용하는 Transfer Learning, Domain Adaptation(DA), 그리고 labeled data가 적거나 없을 때 사용하는 Semi-Supervised Learning, Self-Supervised Learning 등의 연구들이 있다.

Self-Supervised Learning (SSL)은 네트워크가 아무런 정보, 즉 labeled data가 없는 상태에서 학습해야 하기 때문에, 정답을 가르쳐주는 SL에 비해 문제가 더 어려워질 수 있다. 하지만 다행히 그래픽 엔진을 통해 손쉽게 Ground Truth 데이터를 획득할 수 있는 방법이 있다. 실제 세계를 투영한 시뮬레이션 세계를 만들고, 그 내에서 RGB 이미지와 연관된 정확한 depth, segmentation, optical flow 등의 annotated data를 얻을 수 있다. 이렇게 얻어진 synthetic data를 SSL의 학습 데이터로 사용하려고 한다.

Synthetic data만으로 학습된 모델은 real data와의 domain gap 이 존재하기 때문에, 실제 real world에서 사용하기에는 성능이 좋지 않다. 그렇기 때문에 synthetic data 만으로 학습된 모델을 직접 adaptation 하여 모델을 학습시키지 않고, unlabeled real data에 pseudo-labeling을 해주는 teacher 모델로 사용하고자 한다.

Adapted data로 task model을 충분히 학습시키고, 학습된 모델은 unlabeled data에 pseudo labeling을 해준다. 어느정도 labeled real data가 모이면 adapted data와 real data를 함께 입력으로 넣어 task model를 학습시키고, 점차 real data의 비율을 늘려 나감으로써 real world에서도 잘 동작하는 SSL 학습 루프를 구성한다.

---

# Related Work

- Unsupervised Domain Adaptation for Semantic Segmentation
- Knowledge Distilation
- Learning from noisy label
- Unsupervised representation learning
- Semi-supervised domain adaptation
- Semi-supervised learning for Semantic Segmentation

---

# Experiments

## 비교 논문

- Cycada
- AdaptSegnet
- Seg-Uncertainty

## Task model

- FCN
- DeepLab v3+
- SegNet

## Dataset

- Kitti , Cityscapes
- Synthia, GTA5

