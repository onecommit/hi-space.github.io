---
title: rsync 를 이용한 파일 Copy
category: ENV
tags: ubuntu
---

```sh
# Local -> Remote
rsync -vzhu --progress images/* ~/bk/
	
# Local -> Local
rsync -rhvP * ~/bk/
```

<!--more-->

rsnyc(Remote sync)는 디렉토리나 파일들을 로컬/원격으로 복사하는 툴이다. 동기화 해서 백업용으로 주로 사용되는 툴인 만큼 데이터 압축이나 변경된 파일 내용 파악, 전송속도 등 다양한 기능들을 제공한다.

# Usages

```sh
rsync [options ...] [source] [target]
```

- `-a`: 자주 사용하는 옵션을 묶어놓은 옵션 (= -rlptgoD)
- `-r`: 하위 디렉토리까지 복사
- `-l`: symbolic link 유지
- `-p`: permission 정보 유지
- `-t`: timestamp 유지
- `-g`: 그룹 소유권 유지
- `-o`: 소유자 속성을 유지
- `-n`: 실제 파일을 복사하지 않고, 처리될 대상 파일 목록만 출력
- `-h`: 사람이 읽기 쉬운 형태로 복사 결과들을 출력
- `-q`: 동기화 시 상세 정보를 표시하지 않음
- `-v`: 상세 정보 표시. 복사하는 과정을 더 자세하게 표시
- `-z`: 파일을 복사할 때 압축해서 복사
- `--devices`: root 권한이 필요하며 Device 관련된 파일들을 복사해서 생성
- `--specials`: named socket이나 fifo와 같은 특수한 파일들도 복사
- `--partial`: rsync는 전송중에 인터럽트가 발생하면 전송하던 파일을 삭제하는게 기본값인데, 이 옵션을 사용하면 전송된 부분파일을 남기고 다음부분부터 재전송 할 수 있게하여 속도를 빠르게 할 수 있다
- `--progress`: 전송 시 진행상황 표시
- `--delete`: 원본 소스에 없는 파일은 백업 서버에서 삭제
- `--exclude`: 제외할 파일 지정 (ex) `--exclude="*.txt"`
- `--include`: 포함할 파일 지정 (ex) `--include="*.png"`
- `-P`: (= `--partial --progress`)
- `-D`: 디바이스 파일 보존 (= `--devices --specials`)

### Example

#### Local -> Google Drive Folder

```sh
rsync -vzhu --progress images/* ~/bk/
```

로컬에서 Google drive 동기화 폴더로 많은 양의 파일을 옮겨야 할 일이 있었다. 그 경우 위와 같은 명령어를 사용했다.
확실히 cp 명령어 사용하는 것 보다 빠르고 안정적으로 copy 된다.

> 2.12M 100%  231.11kB/s    0:00:08 (xfr#757, to-chk=23039/24966)

이런 식으로 이동시킬 파일의 갯수와 현재 완료한 파일 갯수 정보를 볼 수 있는 것도 좋았다.

#### Local -> Local

```sh
rsync -rhvP * ~/bk/
```

