---
title: Domain Adaptation for Structured Output via Discriminative Patch Representations
category: AI
tags: ai paper 🔥
article_header:
    type: overlay # 포스트 내부에서 헤더 오버레이 적용여부
    theme: dark
    background_color: "#123"
    background_image: false
cover: /assets/images/20-10-03-domain-adaptation-structured-output-2021-09-04-18-45-52.png
---

<!--more-->

# Paper

- 2019
- https://arxiv.org/pdf/2006.14611.pdf

---

# Introduction

특정 도메인에서 학습된 데이터는 다른 domain에서 test 했을 때 generalize 하지 않을 수 있다. Unsupervised Domain Adaptation (UDA)는 labled data를 사용할 수 있는 Source domain과 그렇지 않은 Target domain 사이의 gap 해소하기 위해 제안되었다. 수많은 Classification task 가 UDA 를 이용해 성공적으로 적용되었다. 

UDA는 pixel-level로 annotation이 들어가야 하기 때문에 BBox annotation보다 훨씬 어렵고 비싸다. Semantic Segmentation의 domain adaptation으로 괜찮은 approach는 adversarial learning을 통한 distribution alignment 가 있다. 여기서 말하는 alignment의 대상으로는 pixel-level, feature-level, output-level 과 같이 각기 다른 계층이 있을 수 있다.

data distribution 을 발견하는 것은 domain adaptation을 위한 주요 과제이다. Adversarial Training은 source나 target으로 분류하는 convolutional discriminator가 주요한 작업이다. 하지만 discriminator는 도메인 간 톤, 질감 과 같은 low level의 차이만 학습할 수 있다. semantic segmentation 작업을 위해서는 구조화된 공간 (structured output)에서 high-level pattern을 캡쳐해 내는 것이 필요하다. 

본 논문에서는 Unsupervised domain adaptation 방법을 제안한다.  명시적으로 구분할 수 있는 structured output space에서 두 도메인 간 semantic segmentation의 discriminator를 learning 하고, 궁극적으로는 더 나은 domain alignment를 찾고자 한다.

---

# Methods

![](/assets/images/20-10-03-domain-adaptation-structured-output-2021-09-04-18-45-52.png)

목적은 output distribution alignment를 개선하는 것이다.

- **[Patch Mode]** source patch annotation에서 clustered space를 구성하고, feature space에 project 한다.
- **[Patch Alignment]** target patch representation (unfilled symbol) 에서 source distribution (solid symbols) 으로 patch를 align 한다.

---

# Contribution

- 구조화된 예측을 위한 adversarial adaptation framework 제안. 
- 기존의 3가지 Domain adaptation 방법들을 통합
- semantic segmentation을 위한 다양한 domain adaptation 접근 방식들을 분석 및 공유
- 
![](/assets/images/20-10-03-domain-adaptation-structured-output-2021-09-04-18-46-27.png)

Category distribution이 clustered space (source domain에서 K -patch mode를 통해 구성됨)를 통해  patch distribution에 projected 된다.

![](/assets/images/20-10-03-domain-adaptation-structured-output-2021-09-04-18-46-32.png)
