---
title: Contrastive Learning
category: AI
tags: ai 🔥
---

여러 이미지들 중 비슷한 이미지(positive pair)를 서로 가깝게 하면서, 동시에 이 둘을 비슷하지 않은 이미지(negative pair)와 멀리 떨어지게 하는 것

<!--more-->

# Introduction

human supervision 없이 un-supervision으로만 visual representation 학습하기 위해 많은 approach 가 있었다.

### Generative approaches

- image translation 하면서 (unet  같은..) pixel level로 generation 하는 방식.
- pixel level 연산이 들어가기 때문에 매우 비싸고, representation learning 하는 데에 꼭 필요하지 않을 수도 있다.
- 응용하여 연구가 많이 나오긴 하지만 성능이 아주 좋지 않다
- pixel level generation is **computationally expensive** and **may not be necessary** for representation learning

### Discriminative Approches

- pretext task 를 이용하여 representation learning 을 한다.
- generalization 성능에 한계가 있을 수 있다.
- learn representations using objective function like supervised learning but **pretext tasks have relied on somewhat ad-hoc heuristics**, which **limits the generality of learn representations**

### Contrastive Learning

![](/assets/images/21-09-04-constrastive-learning-2021-09-04-19-04-39.png)

- N개의 input data 가 들어왔을 때 데이터 간에 유사한지, 유사하지 않은지를 학습하는 방식

---

# Concept

Contrastive Learning은 Positive pair와 Negative Pair로 구성된다. Positive pair 끼리는 거리를 좁히고, Negative pair 끼리는 거리를 멀리 띄워놓는 것이 학습 원리이다.

- 같은 image에 서로 다른 augmentation을 가한 뒤, 두 positive pair의 feature representation은 거리가 가까워지도록 학습을 하고
- 다른 image에 서로 다른 augmentation을 가한 뒤, 두 negative pair의 feature representation 은 거리가 멀어지도록 학습을 한다.

![](/assets/images/21-09-04-self-supervised-learning-2021-09-04-16-01-14.png)

위의 예시를 봤을 때, 강아지와 의자를 각각 augmentation 취한 후,

동일한 image로 augmentation 된 것 끼리는 각각 positive pair로 학습시키고, 

다른 image의 augmentation된 것과는 negative pair로 학습시킨다.

---

# Related Paper

## SimCLR

![](https://camo.githubusercontent.com/5ab5e0c019cdd8129b4450539231f34dc028c0cd64ba5d50db510d1ba2184160/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d2d764834504b704539596f2f586f3461324259657276492f414141414141414146704d2f766146447750584f79416f6b4143385868383532447a4f67457332324e68625877434c63424741735948512f73313630302f696d616765342e676966)

- 하나의 이미지로부터 transformation 해서 변환된 뷰의 이미지들을 뽑아낸다. 변환된 뷰 간의 일치를 최대화하고 다른 이미지의 변환된 뷰 간의 일치를 최소하며 학습해간다.
- 대응하는 뷰: attract
- 대응하지 않는 뷰: repel
- 원본 데이터셋에서 sample을 무작위로 추출하고 두번의 transformation을 통해 이미지를 만들어낸다
    - transformation 종류: random cropping, random color distortion, gaussian blur, sobel filtering, etc.
    - transform 시 동일한 이미지의 일관된 representation을 장려한다

> **My Insight**: synthetic data의 특정 class와 real data의 동일한 class 간에는 attract 하다고 하고, 다른 class에 대해 repel 하다고 학습하면 gap을 줄일 수 있지 않을까?

- batch size 가 엄청 크다 (8192)
- 후속 논문: Big Self-Supervised Models are Strong Semi-Supervised Learners

### Experiments

#### **Augmentation**

- Random crop and resize (with random flip)
- Color distortions
- Gaussian blur

#### Encoder

- Representation 을 하기 위해 ResNet50 사용 → 2048 dimension

#### Projection

- similarity를 계산하기 좋은 domain 으로 옮겨주기 위해 2-layer MLP 사용 → 128 dimensional latent space

#### No negative Sampling

- Batch 사이즈가 충분히 크면 본인 외의 값들은 negative sample이 되기 때문에 따로 negative sampling 작업을 해주지 않음

#### Similarity Metric

- Cosine similarity function

#### Loss

- Normalized temperature-scaled cross entropy(NT-Xent) loss

#### Evaluation Metric

- linear evaluation protocol
- random init 후 freeze 시킨 feature extractor에 1개의 linear layer를 붙여서 ImageNet 데이터셋로 학습시킨 뒤 정확도를 측정
- self supervised learning 으로 학습된 pretrain 을 freeze 해서 더이상 학습이 안되게 막고, linear layer 하나만 추가해서 성능이 어떻게 되나 측정

---

## BYOL (Bootstrap Your Own Latent)

[TBD]

---

# Reference

- [https://github.com/google-research/simclr](https://github.com/google-research/simclr)
- [https://brunch.co.kr/@synabreu/76](https://brunch.co.kr/@synabreu/76)
- [PR-231: A Simple Framework for Contrastive Learning of Visual Representations](https://www.youtube.com/watch?v=FWhM3juUM6s)
- [The Illustrated SimCLR Framework](https://amitness.com/2020/03/illustrated-simclr/)
- [SimCLR을 이용한 향상된 자기주도 및 반주도 학습](https://brunch.co.kr/@synabreu/76)
- [고려대학교 DMQA 연구실](http://dmqm.korea.ac.kr/activity/seminar/284)
