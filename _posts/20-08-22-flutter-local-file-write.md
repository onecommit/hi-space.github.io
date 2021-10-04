---
title: "[Flutter] Local device 경로에 file 쓰고 읽기"
tags: flutter
---

```dart
localFileRead() async {
    final directory = (await getApplicationDocumentsDirectory()).path;
    final filepath = '$directory/test.txt';

    File imgFile = new File(filepath);

    imgFile.writeAsStringSync('aaaa');

    print("Finish writing ${imgFile.path}");

    String contetns = await imgFile.readAsString();
    print(contetns);
  }
```

<!--more-->
