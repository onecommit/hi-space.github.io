---
title: "[Ubuntu] terminator"
category: ENV
tags: env ubuntu
article_header:
    type: overlay
    theme: dark
    background_color: "#123"
    background_image: false
cover: /assets/images/21-10-01-ubuntu-tweak-theme-2021-10-01-16-09-48.png
---

Ubuntu의 터미널 프로그램

<!--more-->

## 1. Install

```sh
sudo apt install terminator
```

## 2. Configure

![](/assets/images/21-09-04-ubuntu-terminator-terminator.png)

`~/.config/terminator/config` 에서 환경 설정이 가능

```sh
[global_config]
  title_transmit_bg_color = "#ad7fa8"
  inactive_color_offset = 0.75
[keybindings]
  split_vert = <Primary><Shift>l
[profiles]
  [[default]]
    background_color = "#282828"
    background_darkness = 0.9
    cursor_color = "#aaaaaa"
    foreground_color = "#ebdbb2"
    show_titlebar = False
    palette = "#073642:#dc322f:#859900:#b58900:#268bd2:#d33682:#2aa198:#eee8d5:#002b36:#cb4b16:#586e75:#657b83:#839496:#6c71c4:#93a1a1:#fdf6e3"
    copy_on_selection = True
  [[Ayu mirage]]
    background_color = "#212733"
    cursor_color = "#FFD580"
    foreground_color = "#d9d7ce"
    show_titlebar = False
    scroll_on_keystroke = False
    scrollback_infinite = True
    palette = "#212733:#ff3333:#bae67e:#ffd580:#5ccfe6:#d4bfff:#5ccfe6:#3d4752:#3e4b59:#ff3333:#bae67e:#ffd580:#5ccfe6:#d4bfff:#5ccfe6:#eeeeec"
    copy_on_selection = True
  [[OneHalfLight]]
    background_color = "#fafafa"
    background_darkness = 0.9
    cursor_color = "#bfceff"
    foreground_color = "#383a42"
    show_titlebar = False
    palette = "#383a42:#e45649:#50a14f:#c18401:#0184bc:#a626a4:#0997b3:#fafafa:#4f525e:#e06c75:#98c379:#e5c07b:#61afef:#c678dd:#56b6c2:#ffffff"
    copy_on_selection = True
  [[Relaxed]]
    background_color = "#353a44"
    cursor_color = "#d9d9d9"
    foreground_color = "#d9d9d9"
    show_titlebar = False
    palette = "#151515:#bc5653:#909d63:#ebc17a:#6a8799:#b06698:#c9dfff:#d9d9d9:#636363:#bc5653:#a0ac77:#ebc17a:#7eaac7:#b06698:#acbbd0:#f7f7f7"
    copy_on_selection = True
  [[Wombat]]
[layouts]
  [[default]]
    [[[child1]]]
      parent = window0
      profile = Ayu mirage
      type = Terminal
    [[[window0]]]
      parent = ""
      size = 1200, 1000
      type = Window
[plugins]
```
