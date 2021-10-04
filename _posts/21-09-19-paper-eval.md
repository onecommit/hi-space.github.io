---
title: 💡 Paper 실험
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

```sh
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
- gta + citys

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
- gta + cyclegta + citys

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

### aagc_640x360_b2

- epoch: 40000
- crop_size: 640x360
- batch size: 2
- cyclegta + citys

```sh
===>road:       89.43
===>sidewalk:   26.21
===>building:   82.72
===>wall:       25.88
===>fence:      22.92
===>pole:       36.15
===>light:      40.42
===>sign:       38.88
===>vegetation: 84.1
===>terrain:    37.55
===>sky:        83.52
===>person:     59.09
===>rider:      26.71
===>car:        83.65
===>truck:      28.55
===>bus:        36.64
===>train:      0.14
===>motocycle:  14.6
===>bicycle:    26.76
===> mIoU: 44.42
```

# Augmentation

## aagc_640x360_b2_multiaug

- epoch: 20000
- crop_size: 640x360
- batch size: 2
- cyclegta + citys
- source augmentation + target augmentation

```sh
===>road:       85.94
===>sidewalk:   44.74
===>building:   74.49
===>wall:       22.06
===>fence:      23.57
===>pole:       35.94
===>light:      29.81
===>sign:       39.41
===>vegetation: 81.76
===>terrain:    34.36
===>sky:        80.23
===>person:     56.52
===>rider:      24.77
===>car:        76.53
===>truck:      7.43
===>bus:        22.8
===>train:      10.1
===>motocycle:  17.2
===>bicycle:    32.39
===> mIoU: 42.11
```


# Student (Pseudo Labeling한 데이터셋 추가)

## aagc_640x360_b2_student

- epoch: 20000
- crop_size: 640x360
- batch size: 2
- cyclegta + citys

```sh
===>road:       88.78
===>sidewalk:   44.98
===>building:   83.67
===>wall:       30.68
===>fence:      23.65
===>pole:       38.28
===>light:      40.38
===>sign:       42.62
===>vegetation: 84.86
===>terrain:    40.18
===>sky:        85.6
===>person:     57.97
===>rider:      20.89
===>car:        70.89
===>truck:      28.74
===>bus:        35.36
===>train:      6.36
===>motocycle:  28.98
===>bicycle:    29.1
===> mIoU: 46.42
```

## aagc_640x360_b2_student_autoaug

- epoch: 25000
- crop_size: 640x360
- batch size: 2
- cyclegta + citys
- source autoaug

```sh
===>road:       88.61
===>sidewalk:   36.18
===>building:   83.27
===>wall:       21.64
===>fence:      23.35
===>pole:       37.87
===>light:      34.18
===>sign:       44.43
===>vegetation: 83.93
===>terrain:    25.36
===>sky:        82.0
===>person:     58.68
===>rider:      29.58
===>car:        84.47
===>truck:      30.46
===>bus:        36.82
===>train:      0.22
===>motocycle:  20.42
===>bicycle:    36.56
===> mIoU: 45.16
```

# Target 데이터 수를 줄여가며 테스트

## gc_640x360_b2_d1000

- epoch: 10000
- crop_size: 640x360
- batch size: 2
- gta + citys
- cityscapes 데이터셋을 1000개만 사용

```sh
===>road:       38.07
===>sidewalk:   24.37
===>building:   51.74
===>wall:       11.07
===>fence:      18.88
===>pole:       33.92
===>light:      30.17
===>sign:       36.62
===>vegetation: 79.42
===>terrain:    6.25
===>sky:        61.99
===>person:     58.76
===>rider:      24.87
===>car:        70.17
===>truck:      13.29
===>bus:        32.75
===>train:      1.09
===>motocycle:  23.69
===>bicycle:    32.23
===> mIoU: 34.18
```

## aagc_640x360_b2_d1000

- epoch: 20000
- crop_size: 640x360
- batch size: 2
- cyclegta + citys
- cityscapes 데이터셋을 1000개만 사용

```sh
===>road:       85.81
===>sidewalk:   43.68
===>building:   78.32
===>wall:       22.36
===>fence:      18.93
===>pole:       37.12
===>light:      32.0 
===>sign:       42.13
===>vegetation: 76.79
===>terrain:    38.22
===>sky:        63.99
===>person:     57.86
===>rider:      23.76
===>car:        78.22
===>truck:      7.97 
===>bus:        18.39
===>train:      1.94 
===>motocycle:  15.45
===>bicycle:    39.07
===> mIoU: 41.16 
```

## aagc_640x360_b2_d500

- epoch: 20000
- crop_size: 640x360
- batch size: 2
- cyclegta + citys
- cityscapes 데이터셋을 500개만 사용

```sh
===>road:       89.78
===>sidewalk:   45.64
===>building:   82.37
===>wall:       24.37
===>fence:      23.86
===>pole:       37.2
===>light:      34.28
===>sign:       41.7
===>vegetation: 84.31
===>terrain:    40.03
===>sky:        80.6
===>person:     55.21
===>rider:      23.53
===>car:        81.14
===>truck:      18.97
===>bus:        32.25
===>train:      3.72
===>motocycle:  19.32
===>bicycle:    39.36
===> mIoU: 45.14
```

# Segmentation 모델만 데이터셋 줄여가며 테스트

## cityscapes_seg 

- epoch: 20000 (참고로 epoch 30000에서는 mIoU 69.12)
- crop_size: 640x360
- batch_size: 2
- cityscapes only (2975)

```sh
===>road:       96.45
===>sidewalk:   72.46
===>building:   88.62
===>wall:       48.61
===>fence:      46.65
===>pole:       46.26
===>light:      54.82
===>sign:       65.16
===>vegetation: 88.13
===>terrain:    50.95
===>sky:        89.02
===>person:     73.23
===>rider:      54.42
===>car:        91.93
===>truck:      72.11
===>bus:        75.82
===>train:      60.83
===>motocycle:  49.47
===>bicycle:    67.58
===> mIoU: 68.03
```

## cityscapes_seg_d1000

- epoch: 20000
- crop_size: 640x360
- batch_size: 2
- cityscapes only (1000)

```sh

```

## cityscapes_seg_d500

- epoch: 20000
- crop_size: 640x360
- batch_size: 2
- cityscapes only (500)

```sh
===>road:       94.48
===>sidewalk:   63.33
===>building:   85.77
===>wall:       22.97
===>fence:      29.15
===>pole:       42.14
===>light:      34.21
===>sign:       59.65
===>vegetation: 86.16
===>terrain:    43.79
===>sky:        84.85
===>person:     65.82
===>rider:      43.31
===>car:        87.9
===>truck:      41.4
===>bus:        51.61
===>train:      18.1
===>motocycle:  33.0
===>bicycle:    64.02
===> mIoU: 55.35
```

## cityscapes_seg_d100

- epoch: 20000
- crop_size: 640x360
- batch_size: 2
- cityscapes only (100)

```sh
===>road:       92.62
===>sidewalk:   56.93
===>building:   79.11
===>wall:       5.75
===>fence:      7.55
===>pole:       35.35
===>light:      3.63
===>sign:       40.23
===>vegetation: 84.5
===>terrain:    21.24
===>sky:        83.01
===>person:     59.26
===>rider:      1.35
===>car:        86.35
===>truck:      0.0
===>bus:        42.24
===>train:      0.0
===>motocycle:  10.89
===>bicycle:    59.52
===> mIoU: 40.5
```
