---
title: Ubuntu GPU 상태 모니터링
category: ENV
tags: env ubuntu
---

GPU 현 상태를 확인하기 위한 툴

<!--more-->

## nvidia-smi

![](/assets/images/21-09-18-ubuntu-deep-learning-env-nvidia-smi.png)

```sh
watch -d -n 0.5 nvidia-smi
```

## gpustat

```sh
# Install
pip install gpustat

# Usages
sudo nvidia-smi daemon
gpustat -i -P
```

![](/assets/images/21-09-18-ubuntu-deep-learning-env-gpustat.png)

# References

- [UBUNTU에서 GPU 모니터링 하는 4가지 방법](https://eungbean.github.io/2018/08/23/gpu-monitoring-tool-ubuntu/)
