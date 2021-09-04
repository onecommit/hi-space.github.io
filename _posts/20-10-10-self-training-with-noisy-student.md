---
title: Self training with Noisy Student improves ImageNet classification
tags: ai paper
---

<!--more-->

# Paper

- 2020
- https://arxiv.org/pdf/1911.04252.pdf

---

# Methods

Noisy Student는 SOTA 모델에 unlabeled image를 활용하여 성능을 향상시키는 학습 방법입니다.

(1) labeled image로 teacher model을 학습합니다.

(2) unlabeled image의 pseudo label을 생성하기 위해 teacher model을 사용합니다.

(3) labeled image와 pseudo labeled image를 결합하여 student model을 학습합니다.

학습된 student model을 teacher로 사용하여 pseudo label을 다시 생성합니다.

생성된 pseudo labeled image로 다른 student를 학습합니다.

위 과정을 반복하는 것이 Noisy Student Training 입니다.

참고로 student를 학습할 때는 dropout, stochastic depth, data augmentation과 같은 노이즈를 추가합니다.

---

## Reference

[갈아먹는 Image Classification [1] Noisy Student](https://yeomko.tistory.com/42)

[[논문 읽기] Noisy Student(2020) 리뷰, Self-training with Noisy Student improves ImageNet classification](https://deep-learning-study.tistory.com/554)