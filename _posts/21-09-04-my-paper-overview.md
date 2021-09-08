---
title: 💡 논문 개요/실험 정리 💡
tags: paper 💡 🔥
---

가상 데이터를 이용한 자기 지도 학습 (Self-supervised learning with adapted synthetic data)

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

Adapted data로 task model을 충분히 학습시키고, 학습된 모델은 unlabeled data에 pseudo labeling을 해준다. 어느정도 labeled eal data가 모이면 adapted data와 real data를 함께 입력으로 넣어 task model를 학습시키고, 점차 real data의 비율을 늘려 나감으로써 real world에서도 잘 동작하는 SSL 학습 루프를 구성한다.

### 연구 방법

![](/assets/images/21-09-04-my-paper-overview-2021-09-08-21-42-46.png)

1. Real data와 synthetic data를 사용해 GAN based DA 모델을 학습시킨다.
2. DA 모델의 Generator를 이용해 synthetic data로부터 adapted synthetic data를 생성한다.
3. Adapted synthetic data와 GT 데이터를 사용해 task model을 충분히 학습시킨다.
4. 학습된 task model을 teacher 모델로 사용하여, unlabeled real data에 pseudo-labeling 한다.
5. Adapted synthetic data와 pseudo labeling된 real data를 이용해 task model을 재학습시킨다.
6. 4, 5 과정을 반복한다.

위와 같은 학습 루프로 반복적으로 학습을 수행하며 synthetic data와 real data 간의 domain gap을 줄이고, 동시에 pseudo-labeling 모델의 성능을 함께 향상시킬 수 있는 시스템을 구성한다. 그리고 데이터에 다양한 Noise 기법 실험, unbalanced data 보강 등의 기법들을 이용해  synthetic data의 이점을 살리고 accuracy를 끌어올릴 수 있도록 한다.

Real dataset과 Synthetic dataset를 이용해 semantic segmentation을 수행하고 Class 별 IoU, mean IoU, pixel accuracy를 비교하여 제안한 방법으로 성능이 좋아짐을 확인한다.

# Method

### 데이터셋 확보 및 분석

|  Dataset   |   Type    | # of Labeled Data | # of Raw Data |
| :--------: | :-------: | :---------------: | :-----------: |
| Cityscaped |   Real    |      5, 000       |       -       |
|   Kitti    |   Real    |        400        |     4,236     |
|    GTA5    | Synthetic |      24,966       |       -       |
|  Synthia   | Synthetic |       2,224       |       -       |

Real dataset과 Synthetic dataset중 가장 많은 annotation data를 가지고 있는 GTA5와 Cityscapes로 우선 검증한다. 사용할 Class의 종류는 다음과 같다.
- road, sidewalk, building, wall, fence, pole, traffic light, traffic sign, vegetation, terrain, sky, person, rider, car, truck, bus, train, motorcycle, bicycle

### Semantic Segmentation 모델 학습

![](/assets/images/21-09-04-my-paper-overview-2021-09-08-21-49-47.png)

Real dataset 만 사용했을 때의 Semantic Segmentation 성능 비교를 위해, Cityscapes 데이터셋으로 task모델을 학습시켰다. 몇 가지 SOTA 모델로 학습시켰을 때 가장 안정적인 성능을 보이는 FCN과 DeepLab V3+ 를 이용해 실험을 진행하려고 한다. 

### Domain Adaptation 모델 학습

Labeled data가 있는 source domain (GTA)에서 unlabeled target domain (Cityscapes)로 Domain Adaptation 한 결과이다. Synthetic data와 real data 간의 domain gap을 줄이기 위해 CYCADA (Cycle-Consistent Adversarial Domain Adaptation) 모델을 사용했다. 

![](/assets/images/21-09-04-my-paper-overview-2021-09-08-21-50-06.png)

Pixel-level + feature-level로 adaptation 한 결과물이 Task model 성능에 얼마나 영향을 미치는지 확인하기 위한 모델이다. Domain Adaptation 모델의 Loss는 추후 Pseudo-labeling 하는 모델의 Loss와 함께 전체 Loss로 설정하여 실험을 진행할 예정이다.

|                                   | Pixel Accurach |  mIoU  |
| :-------------------------------: | :------------: | :----: |
|          Resnet50 + FCN           |     94.693     | 68.034 |
| Target Domain (GTA -> Cityscapes) |     95.826     | 74.979 |


### Task 모델의 Test 성능 비교

Real dataset으로 학습된 Semantic Segmentation(Task 모델)을 synthetic 데이터에 적용했을 때, synthetic data에서 real data로 adaptation 된 데이터에 적용했을 때 각각 어느 정도의 성능 차이가 발생하는지 비교한다.

|                                   | Pixel Accurach |  mIoU  |
| :-------------------------------: | :------------: | :----: |
|        Source Domain (GTA)        |     72.100     | 30.180 |
| Target Domain (GTA -> Cityscapes) |     79.077     | 36.265 |

이미 알려진 바와 같이 Domain Adaptation한 결과물이 Task 모델의 test에서 좋은 성능을 보이는 것을 확인했다. 

![](/assets/images/21-09-04-my-paper-overview-2021-09-08-21-52-01.png)

이후에는 Synthetic데이터로 학습된 모델을 Teacher 모델로 사용하여 Pseudo-Labeling을 진행하며, 동시에 Task 모델의 성능을 올릴 수 있는 방향으로 실험을 진행한다.

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

