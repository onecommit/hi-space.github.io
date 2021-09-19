---
title: Ubuntu Deep learning 개발환경 세팅
category: ENV
tags: env ubuntu
---

Deep learning 개발을 위해 Ubuntu에서 cuda, cuDNN 설치

<!--more-->

## 1. Nvidia driver install

### Check the graphic devices

```sh
ubuntu-drivers devices
```

### Install the graphic driver

```sh
sudo apt install nvidia-driver-470
sudo reboot
```

### Check the graphic driver version

```sh
nvidia-smi
```

## 2. [Install the Cuda toolkit](https://developer.nvidia.com/cuda-toolkit-archive)

### Set the environment path

```sh
sudo sh -c "echo 'export PATH=$PATH:/usr/local/cuda-11.2/bin' >> /etc/profile"

sudo sh -c "echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-11.2/lib64' >> /etc/profile"

sudo sh -c "echo 'export CUDADIR=/usr/local/cuda-11.2' >> /etc/profile"

source /etc/profile
```

### Check the cuda tookit version

```sh
nvcc -V
```

## 3. [Install the cuDNN](https://developer.nvidia.com/cudnn)

## Download & Set the files

```sh
tar xvzf cudnn-11.2-linux-x64-v8.1.0.77.tgz
sudo cp cuda/include/cudnn* /usr/local/cuda/include
sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64
sudo chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*
```

## Linking

```sh
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_adv_train.so.8.1.0 /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_adv_train.so.8
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_ops_infer.so.8.1.0  /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_ops_infer.so.8
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_cnn_train.so.8.1.0  /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_cnn_train.so.8
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_adv_infer.so.8.1.0  /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_adv_infer.so.8
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_ops_train.so.8.1.0  /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_ops_train.so.8
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_cnn_infer.so.8.1.0 /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn_cnn_infer.so.8
sudo ln -sf /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn.so.8.1.0  /usr/local/cuda-11.2/targets/x86_64-linux/lib/libcudnn.so.8
```

### Check the linking path

```sh
ldconfig -N -v $(sed 's/:/ /' <<< $LD_LIBRARY_PATH) 2>/dev/null | grep libcudnn

# libcudnn_adv_train.so.8 -> libcudnn_adv_train.so.8.1.0
# libcudnn_adv_infer.so.8 -> libcudnn_adv_infer.so.8.1.0
# libcudnn_ops_infer.so.8 -> libcudnn_ops_infer.so.8.1.0
# libcudnn.so.8 -> libcudnn.so.8.1.0
# libcudnn_ops_train.so.8 -> libcudnn_ops_train.so.8.1.0
# libcudnn_cnn_train.so.8 -> libcudnn_cnn_train.so.8.1.0
# libcudnn_cnn_infer.so.8 -> libcudnn_cnn_infer.so.8.1.0
```

## 3. [Anaconda](https://www.anaconda.com/products/individual-d#Downloads)

## 4. Tensorflow / Pytorch

### [Pytorch](https://pytorch.org/get-started/locally/)

#### Install

```sh
# pip 를 이용해 CUDA 11.1에 설치
pip3 install torch==1.9.0+cu111 torchvision==0.10.0+cu111 torchaudio==0.9.0 -f https://download.pytorch.org/whl/torch_stable.html
```

#### Check

```py
import torch
import torchvision

print(torch.__version__)                #  1.9.0+cu102
print(torch.cuda.is_available())        # True
print(torch.cuda.device_count())        # 1
print(torch.cuda.current_device())      # 0
print(torch.cuda.get_device_name(0))    # Tesla K80
```

### Tensorflow

#### Install

```sh
pip install tensorflow
```

#### Check

```py
import tensorflow as tf

print(tf.__version__)

tf.config.list_physical_devices('GPU')
```

# References

- [Ubuntu 20.04에 CUDA Toolkit 11.2, cuDNN 8.1.0, Tensorflow 설치하기](https://webnautes.tistory.com/1428)
