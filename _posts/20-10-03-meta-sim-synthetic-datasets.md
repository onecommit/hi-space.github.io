---
title: Meta-Sim - Learning to Generate Synthetic Datasets
category: AI
tags: ai paper 🔥
---

<!--more-->

# Paper

- 2019
- https://arxiv.org/pdf/1904.11621.pdf

---

# Abstract

- training model 을 위해서는 상당히 많응 양의 labled dataset이 필요하다.
- 특정 downstream task 에 대하여 자동으로 synthesize labeled dataset을 생성하는 것이 이 논문의 목표이다.
    - `downstream task` : 풀고자 하는 target problem
- synthetic scenes으로 부터 generative model을 학습하고, 그래픽 엔진으로부터 그에 맞는 GT 데이터를 얻어내는 meta-sim을 제안한다.
- render된 output과 target data 간의 distribution gap을 최소화 하기 위해 scene graph로 부터 각 속성을 변형할 수 있는 parameter들을 학습한다.
- 약간의 labeled validation set이 존재할 때, meta-objective 의 성능을 최대화 한다. (downstream task 성능)

---

# 1. Introduction

- 데이터 수집은 어려운 문제이다. virtual environments에서 synthetic 데이터를 생성하고 GT 데이터를 얻을 수 있다.  하지만 synthetic과 real-world간의 domain gap이 여전히 문제이다.
- Domain gap을 해결하기 위한 synthetic-to-real domain adaptaiton 방법이 있다. synthetic image를 real world 데이터와 비슷하도록 스타일을 변형하는 방식이다. domain gap이 appearnace gap이라고 생각하고 low level에서 다르다고 판단하여 푼 문제이다.
- 본 논문에서는 domain gap이 content gap으로 부터 온다고 가정한다. scene에서 각 물체들의 배치 등을 모사하는 것이 중요하다고 판단한 것이다.  Virtual KITTI 의 경우도 engieer와 artist 그룹이 Karlsruhe, Germany 가 녹화된 영상을 보고 obejct의 방향이나 위치를 매칭시켜 만들었다. 하지만 도시가 달라질 경우, traffic이나 여러가지 요소들은 변형될 거다. synthetic world를 만드는 것 또한 상당한 effort가 될 거다.
- 본 논문에서 real 이미지로부터 컨텐츠의 구성을 캡쳐해, synthetic scene을 만들어내는 generative model 학습한다. probabilistic 한 scene grammar에 기반하여 게임 그래픽 엔진으로 다양하고 의미있는 virtual environment를 만들어 낼거다.
- 객체들의 위치, 방향 등의 attribute를 수정함으로써 real data의 distribution과 더 잘 일치하도록 학습한다. 또한 downstream task를 개선하기 위해 시뮬레이터의 parameter들을 조정하는 meta task를 최적화 한다.

---

# 2. Related Work

## Synthetic Content Generation and Simulation

- Driving Scene, Indoor Navigation, Household Robotics, Robotic Control, Optical flow estimation 등의 영역에서 synthetic 켄텐츠를 사용한다.
- Domain Randomization은 photo-realistic simulation 환경의 가장 싼 대안이다. 다양한 씬에서 object 들을 random 한 위치와 방향으로 놓음으로써 많은 데이터를 쉽게 얻을 수 있다.  결과적으로 이 데이터들은 real world scene의 데이터와는 매우 상이하다. 이 방법과는 반대로, 본 논문은 synthetic과 real world scene의 갭을, downstream task의 성능을 최대화로 하기 위해 직접적으로 맞추려고 한다.

## Procedural modeling and probabilisic scene grammars

- 다양한 3D scene 을 모사하여 content를 생성하는 approach. 이 approach는 생성하려는 scene에 대한 distribution이 parameter화 되어 있어야 한다. 이 과정은 지루하고 error가 발생하기 쉽다. 그리고 이렇게 pameter화 되어있다고 해도, 이것이 real world의 distribution을 반영한다고 확신할 수 없다. 본 논문은 real data로 부터 스스로 generative process를 학습한다.

## Domain Adaptation

- train model 과 실제 동작하는 model 사이의 data distribution의 차이를 해결하기 위한 방법이다. synthetic에서 real로 domain이 달라질 때 appearnace (style) gap과 content (layout) gap 두가지 문제가 있을 수 있다.
- 이러한 문제를 해결하기 위해 주로 GAN 을 이용해 synthetic image를 real image와 비슷하게 변형하는 방법이 있었다. stylized된 이미지의 layout이 동일하게 유지되도록 신경써서 GAN을 사용했다.
- 다른 방법으로는 sel learning에 기반한 pseudo label을 사용하거나 student-teacher network를 사용하는 domain adaptation 방법이 있다.
- 본 논문에서는 content gap을 해결하려고 한다.

## Optimizing Simulators

- 본 논문은 low level scene parameter를 최적화 하는 동시에, downstream task 의 성능을 최대화 할ㄹ 수 있는 방향으로 distribution을 맞출 수 있게 학습한다.

# 3. Meta-Sim