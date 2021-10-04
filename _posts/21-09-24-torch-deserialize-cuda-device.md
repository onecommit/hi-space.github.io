---
title: Attempting to deserialize object on CUDA device 1 but torch.cuda.device_count() is 1
category: TROUBLESHOOTING
tags: troubleshooting pytorch
---

Attempting to deserialize object on CUDA device 1 but torch.cuda.device_count() is 1. Please use torch.load with map_location to map your storages to an existing device.

<!--more-->

## Problem

```py
saved_state_dict = torch.load(args.restore_from)
```

training 한 cuda device 와 load 하는 cuda device 가 다를 때 발생하는 에러

## Solution

```py
saved_state_dict = torch.load(args.restore_from, map_location="cuda:0")
```

`map_location` 인자값을 사용해 모델을 어떤 GPU device 에 로드할 지 지정해준다.

## Reference

- [장치(device)간 모델 저장하기 & 불러오기](https://tutorials.pytorch.kr/beginner/saving_loading_models.html#device)

