---
title: Jekyll 설치
tags: env jekyll
mode: immersive
header:
  theme: dark
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
---

Jekyll 설치

<!--more-->

# Install

```sh
sudo apt-get install ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
gem update --system
```
