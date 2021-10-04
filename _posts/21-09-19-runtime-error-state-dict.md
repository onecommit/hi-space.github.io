---
title: RuntimeError Error(s) in loading state_dict for ResNet
category: TROUBLESHOOTING
tags: troubleshooting pytorch
---

```py
model.load_state_dict(checkpoint['state_dict'], strict=False)
```

<!--more-->

## Problem

```py
saved_state_dict = torch.load(args.restore_from)

new_params = model.state_dict().copy()
for i in saved_state_dict:
    i_parts = i.split('.')
    if not args.num_classes == 19 or not i_parts[1] == 'layer5':
        new_params['.'.join(i_parts[1:])] = saved_state_dict[i]

model.load_state_dict(new_params)
```

Pytorch 에서 checkpoint로 저장한 동일한 모델을 다시 불러올 때 Error 발생.

## Solution

Pytorch와 Jupyter notebook의 버전이 맞지 않아 발생하는 문제. `load_state_dict(new_params)` 부분을 아래와 같이 수정해준다.

```py
model.load_state_dict(checkpoint['state_dict'], strict=False)
```

### References

- [RuntimeError: Error(s) in loading state_dict for ResNet:](https://stackoverflow.com/questions/54058256/runtimeerror-errors-in-loading-state-dict-for-resnet)
