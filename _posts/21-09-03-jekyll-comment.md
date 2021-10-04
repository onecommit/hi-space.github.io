---
title: Jekyll 댓글 시스템 (Disqus / Utterances)
tags: env jekyll
mode: immersive
header:
  theme: dark
article_header:
  type: overlay
  theme: dark
  background_color: '#123'
  background_image: false
cover: /assets/images/2021-09-04-jekyll-comment-disqus.png
---

Jekyll 은 정적 페이지이기 때문에 댓글 기능을 만들기 위해서는 별도 외부 플러그인 사용이 필요하다.  

<!--more-->

# 종류

## [Disqus](https://disqus.com/)

- 많이들 사용하는 댓글 시스템
- 로딩되는 데 시간이 좀 걸림

```js
<div id="disqus_thread" style="border: 0.5px solid #E5E5E5; padding: 15px;"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-hi-space-github-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

![](/assets/images/2021-09-04-jekyll-comment-disqus.png)

## [Utterances](https://github.com/apps/utterances)

- Github 로그인 필요
- Github id 로 댓글을 달면 `github.io` 레포의 issues 에 자동으로 등록된다

```js
<script src="https://utteranc.es/client.js"
    repo="hi-space/hi-space.github.io"
    issue-term="title"
    theme="github-light"
    crossorigin="anonymous"
    async>
</script>
```

![](/assets/images/2021-09-04-jekyll-comment-utterance.png)

# References

- [jekyll-blog-comments-with-utterances](https://madplay.github.io/post/jekyll-blog-comments-with-utterances)