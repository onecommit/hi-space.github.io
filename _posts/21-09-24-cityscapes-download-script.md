---
title: Cityspcaes 데이터셋 다운로드 script
tags: ai shell
---

<!--more-->

# [Cityscapes](https://www.cityscapes-dataset.com/downloads/)

![](/assets/images/21-09-24-cityscapes-download-script-2021-09-25-01-32-55.png)

Cityscapes dataset 사이트에서 로그인 후 다양한 형태의 데이터셋을 다운받을 수 있다.  
용량이 굉장히 큰데 브라우저에서 직접 다운로드 받는 것은 불안하니 wget 으로 받으려고 한다.

```sh
wget --keep-session-cookies --save-cookies=cookies.txt --post-data 'username=myusername&password=mypassword&submit=Login' https://www.cityscapes-dataset.com/login/

wget --load-cookies cookies.txt --content-disposition https://www.cityscapes-dataset.com/file-handling/?packageID=1
```

각 데이터셋의 packageID는 다운로드 링크를 봐서 알 수 있다.  
예를 들어 `gtFine-trainvaltest.zip` 데이터셋의 다운로드 링크는 `https://www.cityscapes-dataset.com/file-handling/?packageID=1` 로, packageID = 1 이다.

> **1**: gtFine_trainvaltest.zip (241MB)  
> **2**: gtCoarse.zip (1.3GB)  
> **3**: leftImg8bit_trainvaltest.zip (11GB)  
> **4**: leftImg8bit_trainextra.zip (44GB)  
> **8**: camera_trainvaltest.zip (2MB)  
> **9**: camera_trainextra.zip (8MB)  
> **10**: vehicle_trainvaltest.zip (2MB)  
> **11**: vehicle_trainextra.zip (7MB)  
> **12**: leftImg8bit_demoVideo.zip (6.6GB)  
> **28**: gtBbox_cityPersons_trainval.zip (2.2MB)  
