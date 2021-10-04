---
title: "[Flutter] Screenshot"
tags: flutter
---

```dart
takeScreenShot() async {
    RenderRepaintBoundary boundary =
        previewContainer.currentContext.findRenderObject();
    var image = await boundary.toImage();
    var byteData = await image.toByteData(format: ui.ImageByteFormat.png);
    var pngBytes = byteData.buffer.asUint8List();
    print(pngBytes);
  }
```

<!--more-->
