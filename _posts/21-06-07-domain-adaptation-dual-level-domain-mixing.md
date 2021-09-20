---
title: Semi-supervised Domain Adaptation based on Dual-level Domain Mixing for Semantic Segmentation
category: AI
tags: ai paper 🔥
---

Multi teacher (Region-level teacher와 Sample-level teacher) 를 이용해 student model에게 각기 다른 도메인에 대한 정보를 학습시켜준다. (Domain Mixing)

<!--more-->

# Paper

- **CVPR2021**
- [Paper](https://arxiv.org/pdf/2103.04705.pdf)
- [Related Post](https://hi-space.github.io/ai/2021/09/19/semi-supervised-domain-adaptation-dual-level-domain-mixing.html)

# Method

![](/assets/images/21-09-04-domain-adaptation-dual-level-domain-mixing-SSDA%20framework.png)

Domin을 mixing 한 multi teache 를 이용해 student model에게 각기 다른 도메인에 대한 정보를 학습시켜준다.

- Region-level teacher
- Sample-level teacher

두개의 teacher model을 ensemble한 모델이 domain-mixed teachers 이다.  
Domain gap을 줄이기 위해 Region-level data mixing, sample-level data mixing 두가지 view를 이용한다.

### Region-level data mixing

Semantic segmentation은 dense pixel-wise prediction task로, 각 픽셀의 prediction 값 외에 주변 pixel의 regional 한 prediction 값도 필요하다. 한 이미지에 source, target 도메인 이미지가 함께 포함되어 있으면 모델은 domain-invariant representation을 배울 수 있다. 다른 feature distribution와 다른 region을 가진 값은 두가지를 동시에 배울 수 있기 때문이다. 이 아이디어는 CutMix 에서 영감을 받았다. (모델의 generalization 특성을 향상시키기 위해 각기 다른 이미지를 붙여서 augment 함) 그래서 본 논문에는 비슷한 형태로 source domain 이미지와 target domain 이미지를 섞어서 teacher model의 학습 데이터로 사용함으로써 domain gap을 줄인다. 

### Sample-level data mixing

Holistic view에서 다른 도메인의 데이터를 섞는다. Source와 target 데이터는 큰 distribution gap이 있을거다. Source 데이터 만으로만 학습을 하면 overfitting 모델이 만들어질 수 있기 때문에 source, target 데이터를 랜덤으로 샘플링해서 teacher model의 학습 데이터로 사용한다.

## Multi-teacher Knowledge Distillation

이제 pretrain된 domain-mixed teacher 모델을 두개 얻었다. 그 다음은 Knowledge Distillation(KD)를 이용해 두 모델간 KL-divergence를 최소화 해야한다. 

두개의 teacher 모델이 있고 비슷한 형태의 student 모델이 하나 있다. 두개의 teacher model을 앙상블해서 unlabeled data에 labeling 하고 그 데이터로 student 모델을 학습시킨다. 그리고 student model은 적은 양의 labeled data로 supervised learning  한다.

## Progressive Improving Scheme

일반적으로 teacher model의 성능이 더 좋은데 distilling knowledge를 이용해 studnet model도 teacher model의 성능으로 끌어올려보자. 

Labeled source data와 소량의 labeled target data를 통해 teacher model을 얻었다. 

이 framework는 iteratively 학습이 진행될거고 domain-mixed teacher와 student는 모두 knowledge distillation와 self-training 기법을 통해 모두 성능이 향상된다.