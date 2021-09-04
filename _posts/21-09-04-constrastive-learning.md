---
title: Contrastive Learning
tags: ai
---

여러 이미지들 중 비슷한 이미지(positive pair)를 서로 가깝게 하면서, 동시에 이 둘을 비슷하지 않은 이미지(negative pair)와 멀리 떨어지게 하는 것

<!--more-->

# Concept

Contrastive Learning은 Positive pair와 Negative Pair로 구성된다. Positive pair 끼리는 거리를 좁히고, Negative pair 끼리는 거리를 멀리 띄워놓는 것이 학습 원리이다.

- 같은 image에 서로 다른 augmentation을 가한 뒤, 두 positive pair의 feature representation은 거리가 가까워지도록 학습을 하고
- 다른 image에 서로 다른 augmentation을 가한 뒤, 두 negative pair의 feature representation 은 거리가 멀어지도록 학습을 한다.

![](/assets/images/21-09-04-self-supervised-learning-2021-09-04-16-01-14.png)

위의 예시를 봤을 때, 강아지와 의자를 각각 augmentation 취한 후,

동일한 image로 augmentation 된 것 끼리는 각각 positive pair로 학습시키고, 

다른 image의 augmentation된 것과는 negative pair로 학습시킨다.

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

## BYOL (Bootstrap Your Own Latent)

[TBD]

# Reference

- [https://github.com/google-research/simclr](https://github.com/google-research/simclr)
- [https://brunch.co.kr/@synabreu/76](https://brunch.co.kr/@synabreu/76)