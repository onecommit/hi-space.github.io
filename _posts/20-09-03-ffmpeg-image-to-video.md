---
title: "[Flutter] ffmpeg을 이용해 images에서 video로 변환"
tags: flutter ffmpeg
---

<!--more-->

## 1. CameraImage 에서 imglib.Image로 변환

```dart
imglib.Image convertCameraImage(CameraImage image) {
  int width = image.width;
  int height = image.height;

  var img = imglib.Image(width, height); // Create Image buffer
  const int hexFF = 0xFF000000;
  final int uvyButtonStride = image.planes[1].bytesPerRow;
  final int uvPixelStride = image.planes[1].bytesPerPixel;
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      final int uvIndex =
          uvPixelStride * (x / 2).floor() + uvyButtonStride * (y / 2).floor();
      final int index = y * width + x;
      final yp = image.planes[0].bytes[index];
      final up = image.planes[1].bytes[uvIndex];
      final vp = image.planes[2].bytes[uvIndex];

      // Calculate pixel color
      int r = (yp + vp * 1436 / 1024 - 179).round().clamp(0, 255);
      int g = (yp - up * 46549 / 131072 + 44 - vp * 93604 / 131072 + 91)
          .round()
          .clamp(0, 255);
      int b = (yp + up * 1814 / 1024 - 227).round().clamp(0, 255);

      // color: 0x FF  FF  FF  FF
      //           A   B   G   R
      img.data[index] = hexFF | (b << 16) | (g << 8) | r;
    }
  }

  var img1 = imglib.copyRotate(img, -90);
  return img1;
}
```

## 2. ImageStream 데이터를 파일로 저장

```dart
_camera.startImageStream((CameraImage image) {
	imglib.Image img = convertCameraImage(image);
  String filePath = sprintf("$_rollviDir/frame_%d.jpg", [_frameNum++]);
  new File(filePath)..writeAsBytes(imglib.encodeJpg(img));
}
```

## 3. FFmpeg 명령어로 image sequence들로부터 video 생성

```dart
final FlutterFFmpeg _flutterFFmpeg = new FlutterFFmpeg();

//    String cmd = "-r 1/5 -start_number 1 -i ${tempDirectory.path}/test%d.jpg -c:v mpeg4 -pix_fmt yuv420p $outputPath";
String cmd = "-y -framerate 10 -i $rawDocumentPath/frame_%d.jpg -c:v mpeg4 $_outputPath";

await _flutterFFmpeg
    .execute(cmd)
    .then((rc) => print("FFmpeg process exited with rc $rc"));
```

Windows ffmpeg으로 테스트 했을 때
`ffmpeg -y -framerate 10 -i frame_%d.jpg output.mp4`
이렇게 default 설정으로 해주면 libx264로 인코딩됨.

삼성폰의 경우, libx264가 지원이 안되는 건지 `rc` 값은 `0` 으로 정상값이 나오지만, 실제 출력해보면 깨져서 나옴.
→ 인코딩 타입을 mpeg4으로 바꿔주니 제대로 동작

[참고] https://github.com/flutter/flutter/issues/18836

---

# jpg image sequence to video

```bash
ffmpeg -y -framerate 10 -i frame_%d.jpg -vcodec copy -vframes 20 -c:v mjpeg output.mp4
```

# png image sequence to video

```dart
ffmpeg -y -framerate 10 -i frame_%d.png -vcodec libx264 -pix_fmt yuv420p output.mp4
```
