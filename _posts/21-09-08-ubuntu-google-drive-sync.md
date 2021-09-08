---
title: Ubuntu - Google Drive 동기화
tags: env ubuntu
---

학습 데이터셋을 구글 드라이브에 올리고 colab에서 mount 하여 사용하려고 한다. 
웹으로 올리기엔 너무 많은 시간이 소요되고 그마저도 오랫동안 활동이 없으면 로그인이 자동으로 해제되어 데이터 업로드에 어려움이 있었다. 
그래서 ubuntu의 특정 폴더를 동기화 하는 방법이 없나 찾아보게 되었다.

<!--more-->

# [Grive](https://github.com/vitalif/grive2)

Grive라는 Google Drive API를 이용해 로컬 디스크와 동기화 할 수 있다. 

1. Grive2 설치

### Dependencies

```sh
sudo apt-get install git cmake build-essential libgcrypt20-dev libyajl-dev \
    libboost-all-dev libcurl4-openssl-dev libexpat1-dev libcppunit-dev binutils-dev \
    debhelper zlib1g-dev dpkg-dev pkg-config
```

### Build

```sh
git clone https://github.com/vitalif/grive2.git
cd grive2
dpkg-buildpackage -j4 --no-sign
sudo dpkg -i grive_0.5.2+git20210315_amd64.deb 
```

빌드를 해주면 `.deb` 파일이 생성되는데, 해당 파일을 설치해준다.

2. 구글 드라이브 권한 획득

```sh
mkdir google-drive
cd google-drive
grive -a
```

`-a` 파라미터와 함께 입력하게 되면 인증을 할 수 있도록 권한 획득 URL 이 뜬다. 해당 링크로 접속해 Google 계정에 로그인한다. 계정에 로그인 하고 인증을 하면 code가 뜨는데 그 code를 다시 붙여주면 된다.

3. 동기화

```sh
cd google-drive
grive
```

# [google-drive-ocamlfuse](https://github.com/astrada/google-drive-ocamlfuse)

구글 드라이브를 fuse 형태로 마운트 하는 방식이다.

### Install

```sh
sudo add-apt-repository ppa:alessandro-strada/ppa
sudo apt update
sudo apt install google-drive-ocamlfuse
```

### Setup

```sh
mkdir google-drive
google-drive-ocamlfuse google-drive
```

위 명령어를 입력하면 구글 계정 로그인 창이 뜬다. 웹에서 권한 설정만 하고 나면 아래와 같은 메세지가 뜬다.

> The application was successfully granted access. Please wait for the client to retrieve the authorization tokens.

그리고 `google-drive` 폴더에 들어가보면 구글 드라이브가 mount 되어 모든 파일/폴더들을 확인할 수 있다.
`df -h` 명령어로 mount 여부를 확인할 수도 있다.
   
부팅 시 매번 mount 명령어를 입력하는 것이 번거로울 수 있으니, 자동으로 수행되도록 세팅해두는 편이 편하다.

1. `/usr/bin` 에 쉘 스크립트 추가

```sh
# sudo vi /usr/bin/gdfuse
su $USERNAME -l -c "google-drive-ocamlfuse -label $1 $*"
exit 0
```

2. 스크립트 권한 설정

```sh
sudo chmod +x /usr/bin/gdfuse
```

3. 부팅 시 자동 mount

`/etc/fstab` 은 부팅 시 자동으로 mount 할 내용을 정의하고 있는 파일이다. 하단 라인에 아래 내용을 추가하자.

```sh
# sudo vi /etc/fstab
gdfuse#default  /home/$USERNAME/google-drive     fuse    uid=1000,gid=1000,user     0       0
```

4. Mount

```sh
mount ~/google-drive
```

### Usage

#### Mount

```sh
google-drive-ocamlfuse google-drive
```

#### Unmount

```sh
fusermount -u google-drive
```

# Conclusion

검색해보면 `grive`가 많이 나오는데 apt로 바로 설치가 안되기도 하고 셋업면에서도 `google-drive-ocamlfuse` 로 mount 하는 방식이 더 깔끔한 것 같다.
