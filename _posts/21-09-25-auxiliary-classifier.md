---
title: Auxiliary Classifier GAN (AC-GAN)
category: AI
tags: ai
article_header:
    type: overlay
    theme: dark
    background_color: "#123"
    background_image: false
cover: /assets/images/21-09-25-auxiliary-classifier-2021-09-25-17-07-32.png
---

<!--more-->

# Auxiliary Classifier GAN 

![](/assets/images/21-09-25-auxiliary-classifier-2021-09-25-17-07-32.png)

- Discriminator 를 두개의 classifier로 구성한 구조
  - 데이터가 real 인지 fake 인지 판별
  - 데이터의 class 를 분류

## Objective Function

$$ L_S=E[logP(S=real|X_{real})]+E[logP(S=fake|X_{fake})] $$

$$ L_C=E[logP(C=c|X_{real})]+E[logP(C=c|X_{fake})] $$

- $$L_S$$ : 데이터가 real 인지 fake 인지 판별하기 위한 loss
- $$L_C$$ : 데이터의 class 를 판별하기 위한 loss
- D 는 $$L_S + L_C$$ 를 maximize 하도록, G 는 $$L_S - L_C$$를 maximize 하도록 training
- G 는 $$X_{fake} = G(c, z)$$ 를 생성

# References

- [Advanced GAN](https://ratsgo.github.io/generative%20model/2017/12/21/gans/)
- [GAN loss](https://velog.io/@mink555/GAN-loss-SGAN-ACGAN-PGGAN-StyleGAN1-CycleGAN)
- [How to Develop an Auxiliary Classifier GAN](https://machinelearningmastery.com/how-to-develop-an-auxiliary-classifier-gan-ac-gan-from-scratch-with-keras/)