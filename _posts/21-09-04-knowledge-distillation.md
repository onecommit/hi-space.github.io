---
title: Knowledge Distillation
category: AI
tags: ai paper 🔥
---

Knowledge Distillation는 Distilling the Knowlege in a Neural Network (NIPS 2014 Workshop) 에서 처음 제안된 개념이다. 기존의 앙사블의 거대하고 큰 모델에서 예측된 확률을 Pseudo label로 사용하는 방법이다. 

<!--more-->

## Knowledge Distilation (지식 증류)

- 큰 모델 (Teacher Network)로부터 증류한 지식을 작은 모델 (Student Network)로  transfer 하는 일련의 과정
- Model deployment 측면에서 필요한 개념이다. 실제 모델을 어떤 하드웨어에 배포할 때, 처음 학습시킨 하드웨어에 비해 타겟 하드웨어의 성능은 좋지 않을거다. 그래서 모델을 좀 더 단순하게 만들기 위해 사용한다
- Teacher Network가 학습한 generalization 능력을 Student Network에 transfer 해주는 것이다

### Teacher Network

- Cumbersome model (ex, ensemble, a large generalized model)
- Pros : 성능이 좋다
- Cons : computationally 비싸다
- 제약이 있는 환경에 배포하기 어렵다

### Student Network

- Small model
- 배포 시에 적합하다
- Pros : inference가 빠르다
- Cons : Teacher network 보다는 성능이 떨어진다

### Soft Label

Knowledge Distiliation을 위해 Soft Label 을 사용한다. 

- 보통 Classification 학습을 할 때 one-hot encoding이 된 Hard Label을 이용해 학습한다. 여기서 hard를 discrete 라고 생각하면 된다. [0, 1, 0, 0]
- Soft label은 discrete한 값이 아닌 확률값을 label로 사용하는 것을 말한다. [.05, .3, .2, .005]

# Reference

- [Knowledge Distillation 리뷰](https://ezobear.github.io/model%20compression/2020/01/02/KD-post.html)