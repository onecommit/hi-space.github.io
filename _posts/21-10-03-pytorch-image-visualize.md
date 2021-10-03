---
title: Pytorch Tensor 이미지 시각화 (make_grid)
tags: pytorch
article_header:
    type: overlay
    theme: dark
    background_color: "#123"
    background_image: false
cover: /assets/images/21-10-03-pytorch-image-visualize-2021-10-03-23-41-37.png
---

<!--more-->

# [make_grid](https://pytorch.org/vision/stable/utils.html#torchvision.utils.make_grid)

![](/assets/images/21-10-03-pytorch-image-visualize-2021-10-03-23-15-38.png)

```python
import torchvision
import matplotlib.pyplot as plt

plt.imshow(torchvision.utils.make_grid(images.cpu(), normalize=True).permute(1,2,0))
plt.show()
```

`make_grid`는 image grid를 포함한 tensor를 반환해준다. batch의 갯수만큼 포함해서 하나의 이미지로 출력해준다.

## Multiple Images

![](/assets/images/21-10-03-pytorch-image-visualize-2021-10-03-23-41-37.png)

```python
import torchvision
import matplotlib
import matplotlib.pyplot as plt

matplotlib.use('TkAgg')

fig = plt.figure('dataloader')

ax1 = fig.add_subplot(2, 1, 1)
ax2 = fig.add_subplot(2, 1, 2)

ax1.imshow(torchvision.utils.make_grid(images.cpu(), normalize=True).permute(1,2,0))
ax2.imshow(torchvision.utils.make_grid(images_t.cpu(), normalize=True).permute(1,2,0))

ax1.axis('off')
ax2.axis('off')

ax1.set_title('GTA')
ax2.set_title('Cityscapes')

# non-blocking 하게 plt를 그리고 update 하기 위함
plt.draw()
plt.pause(0.001)
```

`make_grid` 함수가 Tensor를 List로 받을 수도 있지만 matplot의 figure를 사용해 따로 출력해줄 수도 있다.

## Troubleshooting

```
<stdin>:1: UserWarning: Matplotlib is currently using agg, which is a non-GUI backend, so cannot show the figure.
```

matplot으로 show 했을 때 위와 같은 에러가 발생할 수 있다. 

```sh
sudo apt install python3-tk
```

```python
import matplotlib
matplotlib.use('TkAgg')
```

GUI backend 로 사용할 모듈을 설치해주고, backend 모듈로 `TkAgg`를 사용한다고 명시해주면 된다.