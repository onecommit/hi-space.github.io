---
title: "[Ubuntu] 원격 접속 (VNC)"
category: ENV
tags: env ubuntu
---

Mac에서 Ubuntu로 원격 접속

<!--more-->

# xrdp

## Install

```sh
sudo apt install vino dconf-editor
```

1. Screen 공유 옵션 켜기

![](/assets/images/21-09-11-ubuntu-remote-2021-09-11-19-36-46.png)

Ubuntu의 `Settings` - `Sharing` 메뉴에서 `Screen Sharing`을 Active 시켜준다.

2. dconf-editor

```sh
dconf-editor
```

![](/assets/images/21-09-11-ubuntu-remote-2021-09-11-19-45-30.png)

`remote-access`를 검색해서 `require-encryption`을 off 해준다.

# 크롬 원격데스크탑

## Install

### 1. [headless 설치](https://remotedesktop.google.com/headless)

- deb package 설치
  
```sh
sudo dpkg -i chrome-remote-desktop_current_amd64.deb
sudo apt-get -f install
```


### 2. Ubuntu에서 xfce4 

```sh
sudo apt install xfce4 dbus-x11
```


## References

- [medium](https://medium.com/@vsimon/how-to-install-chrome-remote-desktop-on-ubuntu-18-04-52d99980d83e)
- [Setting Chrome Remote Desktop for Ubuntu 18.04](https://gist.github.com/joyk50/a5aa0518928874589988c5900639fb5e)