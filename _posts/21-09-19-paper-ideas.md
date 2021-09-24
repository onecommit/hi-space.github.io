---
title: 💡 Paper Idea
tags: paper 💡 🔥
---

Paper ideas

<!--more-->

### Idea 

label 정보들이 있으니까 이 정보들을 이용하는 건 어떨까? previous knowledge와 함께 학습하는 거. 
Contrastive learning 을 도입하는거지. 한 이미지 당 class 분포를 보고 비슷한 이미지들을 뽑아내고, 전혀 다른 class 가 있는 이미지들끼리는 비슷하지 않다고 알려주는거.

> 도메인 이동은 일반적으로 조명 변경과 같은 이미징 프로세스에 의해 발생하므로 [26] 사전 지식을 적응 프로세스에 통합하면 성능이 향상될 수 있습니다. 적대적 방법의 경우 낮은 수준의 모양, 중간 수준의 기능 및 높은 수준의 의미와 같은 적응에서 공동으로 다중 수준 제약을 부과하면 원본 데이터의 구조와 속성을 더 잘 보존할 수 있으므로 더 나은 성능을 발휘할 수 있습니다. 대상 도메인에서 성능을 테스트하는 대신 적응의 품질을 평가하기 위해 효과적이고 직접적인 메트릭을 설계하면 GAN의 교육 프로세스를 가속화할 수 있습니다.

Semantic segmentation은 image classification / detection 에 비해 구조가 중요함


---



## Eval

### cityspcaes 데이터셋으로 학습된 deeplab v3+ (backbone: resnet101) 로 cityscapes 데이터셋에 대해 test

```py
python -u ./tools/eval.py \
--config-file configs/cityscapes_deeplabv3_plus_resnet.yaml \
--input-img /home/yoo/data/cityscapes/leftImg8bit/test/ \
TEST.TEST_MODEL_PATH /home/yoo/workspace/SSL-Synthetic-Segmentation/seg/checkpoints/deeplabv3_plus_resnet101_segmentron.pth
```

```sh
2021-09-20 11:56:41,733 Segmentron INFO: End validation pixAcc: 96.043, mIoU: 78.271
2021-09-20 11:56:41,734 Segmentron INFO: Category iou: 
 +------------+---------------+----------+
|  class id  |  class name   |   iou    |
+============+===============+==========+
|     0      |     road      | 0.97999  |
+------------+---------------+----------+
|     1      |   sidewalk    | 0.839992 |
+------------+---------------+----------+
|     2      |   building    | 0.92879  |
+------------+---------------+----------+
|     3      |     wall      | 0.583538 |
+------------+---------------+----------+
|     4      |     fence     | 0.605864 |
+------------+---------------+----------+
|     5      |     pole      | 0.665058 |
+------------+---------------+----------+
|     6      | traffic light | 0.731235 |
+------------+---------------+----------+
|     7      | traffic sign  | 0.797456 |
+------------+---------------+----------+
|     8      |  vegetation   | 0.927313 |
+------------+---------------+----------+
|     9      |    terrain    | 0.642276 |
+------------+---------------+----------+
|     10     |      sky      | 0.952313 |
+------------+---------------+----------+
|     11     |    person     | 0.833831 |
+------------+---------------+----------+
|     12     |     rider     | 0.656327 |
+------------+---------------+----------+
|     13     |      car      | 0.949435 |
+------------+---------------+----------+
|     14     |     truck     | 0.712475 |
+------------+---------------+----------+
|     15     |      bus      | 0.860635 |
+------------+---------------+----------+
|     16     |     train     | 0.712133 |
+------------+---------------+----------+
|     17     |  motorcycle   | 0.700857 |
+------------+---------------+----------+
|     18     |    bicycle    | 0.79189  |
+------------+---------------+----------+
```

## AdaptSegNet

### multi_640x360_lsgan_b2 

- epoch: 120000
- input size: 512,256
- batch size: 2
- lsgan

```sh
===>road:       65.35
===>sidewalk:   17.71
===>building:   65.1
===>wall:       6.13
===>fence:      8.04
===>pole:       6.6
===>light:      0.98
===>sign:       0.19
===>vegetation: 75.62
===>terrain:    17.64
===>sky:        65.49
===>person:     9.4
===>rider:      0.04
===>car:        44.67
===>truck:      7.29
===>bus:        0.46
===>train:      0.0
===>motocycle:  1.13
===>bicycle:    0.0
===> mIoU: 20.62
```

## multi_640x360_lsgan_b1

- epoch: 150000
- input size: 640 x 360
- batch size: 1
- lsgan

```sh
===>road:       53.36
===>sidewalk:   5.41
===>building:   60.38
===>wall:       2.67
===>fence:      5.73
===>pole:       13.99
===>light:      1.6
===>sign:       0.09
===>vegetation: 55.12
===>terrain:    7.85
===>sky:        43.61
===>person:     6.45
===>rider:      0.3
===>car:        30.93
===>truck:      6.03
===>bus:        0.72
===>train:      0.0
===>motocycle:  0.61
===>bicycle:    0.0
===> mIoU: 15.52
```

![](/assets/images/21-09-19-paper-ideas-2021-09-25-02-12-27.png)
![](/assets/images/21-09-19-paper-ideas-2021-09-25-02-12-57.png)

## Seg-Uncertanity

![](/assets/images/21-09-19-paper-ideas-2021-09-25-02-15-00.png)
![](/assets/images/21-09-19-paper-ideas-2021-09-25-02-15-40.png)

### GTA_TO_CITY_CO

- epoch: 2040000
- crop_size: 384,192
- batch_size: 2

```sh
===>road:       82.42
===>sidewalk:   2.32
===>building:   74.17
===>wall:       7.1
===>fence:      0.89
===>pole:       22.48
===>light:      1.04
===>sign:       1.41
===>vegetation: 84.74
===>terrain:    22.89
===>sky:        75.19
===>person:     23.59
===>rider:      0.0
===>car:        81.18
===>truck:      10.41
===>bus:        2.81
===>train:      0.0
===>motocycle:  0.0
===>bicycle:    0.0
===> mIoU: 25.93
```

### gc_640x360_b1

- epoch: 110000
- crop_size: 640x360
- batch size: 1
- only gta

```sh
===>road:       83.99
===>sidewalk:   10.25
===>building:   74.36
===>wall:       4.47
===>fence:      3.08
===>pole:       10.36
===>light:      11.83
===>sign:       11.46
===>vegetation: 84.24
===>terrain:    15.83
===>sky:        68.71
===>person:     39.09
===>rider:      0.15
===>car:        79.1
===>truck:      26.16
===>bus:        17.3
===>train:      0.0
===>motocycle:  2.78
===>bicycle:    0.01
===> mIoU: 28.59
```

### agc_640x360_b1

- epoch: 110000
- crop_size: 640x360
- batch size: 1
- gta + cyclegta

```sh
===>road:       88.92
===>sidewalk:   37.42
===>building:   81.08
===>wall:       27.72
===>fence:      18.86
===>pole:       36.92
===>light:      32.2
===>sign:       42.05
===>vegetation: 83.82
===>terrain:    37.89
===>sky:        74.95
===>person:     58.1
===>rider:      25.46
===>car:        82.14
===>truck:      25.67
===>bus:        27.35
===>train:      0.0
===>motocycle:  21.13
===>bicycle:    38.66
===> mIoU: 44.23
```
