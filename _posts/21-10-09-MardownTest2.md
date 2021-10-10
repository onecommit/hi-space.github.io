---
title: MarkdownTest
subtitle: 본문 내용 말고, 서브 타이틀 보이도록 변경
category: AI
tags: env 🔥
article_header:
    type: overlay
    theme: dark
    background_image: false
---
dddd
<!--more-->

# Markdown Test

Clipboard Test

``` kotlin
var test1 = ""
fun method() {
   test = "change it"
}
```

``` kotlin
var test2 = ""
fun method() {
   test = "change it"
}
```


%%<ul class="tooltip"> <li><tooltip>설명 <text>여기에 상세 설명을 적으면 말풍선 효과가 적용됨</text> </tooltip></li> <li><tooltip>그림 <text>여기에 상세설명을 적고, 아래에 이미지를 추가해주면 이미지와 같이 말풍선에 들어가게됨 <img src="https://jekyllrb.com/img/octojekyll.png" /> </text> </tooltip></li> </ul>%%


# Alignment


Using markdown on GitHub, you can't styling with CSS. It gets ignored. If you are using Jekyll or similar to process you markdown as HTML, then this page isn't as relevant, as you an use CSS there.

But, you can use the `align` attribute, on a `div` tag, `p` tag or `img` tag. With value as `"center"` or `"right"`.


## Examples

### Align center

#### Code

```markdown
<div align="center">
  
My _markdown_ text.

More text.

Some SVG images:

[![MichaelCurrin - dev-cheatsheets](https://img.shields.io/static/v1?label=MichaelCurrin&message=dev-cheatsheets&color=blue&logo=github)](https://github.com/MichaelCurrin/dev-cheatsheets)
[![stars - dev-cheatsheets](https://img.shields.io/github/stars/MichaelCurrin/dev-cheatsheets?style=social)](https://github.com/MichaelCurrin/dev-cheatsheets)

</div>
```

#### Result

<div align="center">
  
My _markdown_ text.

More text.

Some SVG images:


(`주의: 이건 이미지로 렌더링 안되고 있음!`)
[![MichaelCurrin - dev-cheatsheets](https://img.shields.io/static/v1?label=MichaelCurrin&message=dev-cheatsheets&color=blue&logo=github)](https://github.com/MichaelCurrin/dev-cheatsheets)
[![stars - dev-cheatsheets](https://img.shields.io/github/stars/MichaelCurrin/dev-cheatsheets?style=social)](https://github.com/MichaelCurrin/dev-cheatsheets)

</div>


### Align right

Note the text comes _after_ the image in the code, but the results shows the text as _before_ on the left.

Note that this only works because of the `width` attribute on the `img` tag. Something like the `div` tag won't have that. And using `style` to set width will work on a static site but not in plain GitHub markdown.

#### Code

```markdown
<img width="50%" align="right" src="https://github-readme-streak-stats.herokuapp.com/?user=michaelcurrin" />

Paragraph of text.

Next line.

Last line.
```

#### Result

<img width="50%" align="right" src="https://github-readme-streak-stats.herokuapp.com/?user=michaelcurrin" />

<p>
Paragraph of text.
</p>
<p>
Next line.
</p>
<p>
Last line.
</p>



# Codeblocks


## Code styling

If you just use backticks as below, you'll get a mono-spaced text all in one color. No language-specific colors.

**Code**:

```md
Example of `code` in a sentence.
```

**Result:**

Example of `code` in a sentence.


## Codeblocks

### Indent syntax

Indent the code by 4 spaces.

```markdown
    # Indenting this line in markdown turned it into preformatted mono-spaced text, without any particular code syntax.
    print('Hello world'!)
```

    # Indenting this line in markdown turned it into preformatted mono-spaced text, without any particular code syntax.
    print('Hello world'!)


### Backtick syntax

Use triple backtick also known as a fenced code block. You can optionally specify a language for format with - this works well in markdown on GitHub but you might need extra set up in a Jekyll theme to get it to work properly.

**Code:**

    ```python
    # Triple quotes are for code blocks and give more control over the language.
    print('Hello world'!)
    ```

**Result**:

```python
# Triple quotes are for code blocks and give more control over the language.
print('Hello world'!)
```

Triple backtickcs also works well under bullet points - see [Code snippets in lists][].

The short name works too. Note that outside of GitHub, other editing tools like an IDE or StackEdit might only support the long or the short form of a language.

**Code**:

	```py
	print("Hello, world!")
	```

**Result**:

```py
print("Hello, world!")
```


You can even nest them, provided you have a bullet point.

**Code**:

    ```md
    - Run the greeting.
        ```sh
        echo 'Hello'
        ```
    ```

**Result**:

```md
- Run the greeting.
    ```sh
    echo 'Hello'
    ```
```
    
    
## Supported languages

Some valid references for language-specific styling, focusing on the ones I use. There are many more available.

See also the [Jekyll Supported Languages][] page.


These are usually based on the file extension.

- `markdown` or `md`
	- The former shows better rendering in the GitHub editor view.
- `json`
- `json5`
	- Support comments without giving red errors when rendered.
- `python` or `py`
- `ruby` or `rb`
- `html`
- `javascript` or `js`
- `sh` or `shell`
- `bash`
- `powershell`
- `diff`
- `liquid`
- `yaml` or `yml`
- `regex` or `re`
	- The former actually provide more/better highlighting when viewing the rendered content.
- `mk`, `make`, `Makefile` (or lowercase).
	- These all work, I haven't compared how well though.
- `c`
- `c++`, `cpp`, `cplusplus`

### Examples

#### Shell

Content from [MDBook](https://github.com/rust-lang/mdBook/blob/master/README.md).

**sh**

```sh
$ cargo install mdbook-linkcheck
$ edit book.toml && cat book.toml
[book]
title = "My Awesome Book"
authors = ["Michael-F-Bryan"]

[output.html]

[output.linkcheck]  # enable the "mdbook-linkcheck" renderer

$ mdbook build
2018-10-20 13:57:51 [INFO] (mdbook::book): Book building has started
2018-10-20 13:57:51 [INFO] (mdbook::book): Running the html backend
2018-10-20 13:57:53 [INFO] (mdbook::book): Running the linkcheck backend
```

**shell**

```shell
$ cargo install mdbook-linkcheck
$ edit book.toml && cat book.toml
[book]
title = "My Awesome Book"
authors = ["Michael-F-Bryan"]

[output.html]

[output.linkcheck]  # enable the "mdbook-linkcheck" renderer

$ mdbook build
2018-10-20 13:57:51 [INFO] (mdbook::book): Book building has started
2018-10-20 13:57:51 [INFO] (mdbook::book): Running the html backend
2018-10-20 13:57:53 [INFO] (mdbook::book): Running the linkcheck backend
```

**bash**

```bash
$ cargo install mdbook-linkcheck
$ edit book.toml && cat book.toml
[book]
title = "My Awesome Book"
authors = ["Michael-F-Bryan"]

[output.html]

[output.linkcheck]  # enable the "mdbook-linkcheck" renderer

$ mdbook build
2018-10-20 13:57:51 [INFO] (mdbook::book): Book building has started
2018-10-20 13:57:51 [INFO] (mdbook::book): Running the html backend
2018-10-20 13:57:53 [INFO] (mdbook::book): Running the linkcheck backend
```

**console**

Note unlike the shell styles above, everything after a `$` entry is all one color (not trying to apply shell highlighting to something that could be plain text or _any_ program language). And it also separates output nicely in a different color to the input.

```console
$ cargo install mdbook-linkcheck
$ edit book.toml && cat book.toml
[book]
title = "My Awesome Book"
authors = ["Michael-F-Bryan"]

[output.html]

[output.linkcheck]  # enable the "mdbook-linkcheck" renderer

$ mdbook build
2018-10-20 13:57:51 [INFO] (mdbook::book): Book building has started
2018-10-20 13:57:51 [INFO] (mdbook::book): Running the html backend
2018-10-20 13:57:53 [INFO] (mdbook::book): Running the linkcheck backend
```

#### Diff

	```diff
	- a
	+ b
	```

```diff
- a
+ b
```

#### JSON

	```json
	{
	    "foo": "bar"
	}
	```

```json
{
    "foo": "bar"
}
```

With comments, use `json5` to avoid getting errors for invalid content on GitHub. Note some platforms like StackEdit don't recognized `json5` but is okay.

	```json5
	{
	    // This is a comment.
	    "foo": "bar"
	}
	```


```json5
{
    // This is a comment.
    "foo": "bar"
}
```

#### Regex

	```re
	[a-f]+
	```

```re
[a-f]+
```

Note - from limited testing, I found that `re` works better than `regex`.


## Code blocks in bullet points

It can look messy to alternate between bullet points and code blocks, especially if using numbered points.

But you can nest code blocks under bullet points, like this.

Code:

    - First point
        ```
        My code
        ```
    - Second point
        ```
        More code
        ```

Result:

- First point
    ```
    My code
    ```
- Second point
    ```
    More code
    ```

### Warning

You may **not** start a nested code block with a **dash**. Markdown gets confused and the formatting looks broken.

So don't do this:

- First point
    ```
    - My code
    ```

# Collapsible items

How to create sections which can expand and collapse again.

Use the `details` and `summary` HTML tags in markdown on GitHub, without any additional CSS.

Format:

    <details>
    <summary>TITLE</summary>

    BODY CONTENT

    </details>


See example below, which uses the bold tag in the titl

**HTML code:**

    <details>
    <summary><b>Preview title</b></summary>

    _Note that markdown is valid but you need empty lines to separate from the HTML tags._

    - Bullet
    - Points.

    ```json
    {
        "odeblock": "emo"
    }
    ```

    </details>

**Result:**

<details>
<summary><b>Preview e</b></summary>

_Note that markdown is valid but you need empty lines to separate from the HTML tags._

- Bullet
- Points.

```json
{
"codeblock": "demo"
}
```

</details>


## Jekyll

Example using Jekyll templating. In particular, putting a code block inside the expandable section.

**Sample Jekyll/Liquid code**

Here is the code:

```
<details>
<summary>
</summary>

{% highlight ruby %}
puts 'E
{% endhighlight %}

</details>
```

**Sample rendered HTML as codesult**

_Using the code above in a Jekyll site, here is the result after building to plain HTML._ndered result.

<details>
<summary>
Preview
</summary>

<figure class="highlight">
    <pre>
        <code class="language-ruby" data-lang="ruby">
        <span class="nb">puts</span> <span class="s1">'Expanded message'</span>
        </code>
    </pre>
</figure>

</details>

<br>

**Sample HTML for displayingoutput**

_Here is the rendered result above shown in a code block below, for clarity. The only change was wrapping, for readability._


```html
<details>
<summary>
Preview
</summary>

<figure class="highlight">
    <pre>
        <code class="language-ruby" data-lang="ruby">
        <span class="nb">puts</span> <span class="s1">'Expanded message'</span>
        </code>
    </pre>
</figure>
```


**Note**

To explain the approach here - if you want to use Jekyll templating, markdown does **not** get picked up here correctly. So if you want a code block in your expanded block, you need to use HTML or the `highlight` Liquid tag. Whether using triple backticks or indentation for a code block inside the details tag, those just end up being used literally.


---
title: Common formatting
description: A reference for Markdown basics you'll use daily
---


## Headings

```markdown
# Header 1

Content

## Header 2

Content

### Header 3

Content
```


Alternative below - note there is no whitespace and no `#`.

```markdown
Header 1
===

Content

Header 2
---

Content
```


## Horizontal rule

```markdown
See the triple dash with white space before it.

---

More content here.
```
See the triple dash with white space before it.

---

More content here.

## Styling

### Bold

```markdown
**Bold**

__Bold alternative__
```

**Bold**

__Bold alternative__

### Italics

```md
_Italics_
*Italtics alternative*
```

_Italics_
*Italtics alternative*

### Bold + Italics

```md
_**Nested styling**_
```

_**Nested styling**_

### Strikethrough

The following are equivalent, though GitHub's markdown editor and VS Code only shows a preview in the edit window for the latter (double).

```markdown
~Strikethrough~

~~Strikethrough~~
```

~Strikethrough~

~~Strikethrough~~

## Links

The target will be used for `href` attribute.

```markdown
[Label](target)
```

The target will be used for `src` attribute.

```markdown
![Label](target)
```


## Paragraph

If there are two paragraph lines with no break between, Markdown will show them on online. Therefore you can either add white space between, use a `<br>` tag, or use a double white space at the end of the line (not practical if your IDE trims whitespace).

```markdown
Line 1

Line 2

Line 3 and
continuation of line 3.
```


## Quote block

### Single line

```markdown
> Quote message.
```

> Quote message.

### Multi-line

Note that the line break rule from the previous section applies to quotes as below.

```md
> Multi-line quote.
>
> Note the empty line above.

> This quote
> actually appears on one line.
```

> Multi-line quote.
>
> Note the empty line above.

> This quote
> actually appears on one line.
>

### Nested

```markdown
> How to nest a quote.
> > Repeat the quote symbol.
```

> How to nest a quote.
> > Repeat the quote symbol.

### List

Quote a single bullet list from another source.

```markdown
> - Point A
> - Point B
> - Point C
```
> - Point A
> - Point B
> - Point C

Add multiple quotes as separate points.

```markdown
- > Point A
- > Point B
- > Point C
```
- > Point A
- > Point B
- > Point C


# Contact


## Email

- Markdown
	```markdown
	<foo@bar.com>
	```
- HTML
	```html
	<a href="mailto:foo@bar.com">foo@bar.com</a>
	```
- Result
	- <foo@bar.com>


## Phone number

- Markdown
	```markdown
	[+44 20 7123 4567](tel:+442071234567)
	```
- Rendered HTML
	```html
	<a href="tel:+442071234567">+44 20 7123 4567</a>
	```
- Result
	- [+44 20 7123 4567](tel:+442071234567)

# HTML

{% raw %}

> How to add HTML tags to your markdown files

This page is aimed at both markdown docs files on GitHub as well as markdown pages in a Jekyll site.

HTML will render in markdown, so you can do things not possible with plain markdown syntax. Such as add an ID or class or resize and align images. HTML doesn't care about whitespace so much so it is also easier to build a bullet list or table using a if statements and for loops when using HTML rather than markdown.

Related - see [HTML Cheatsheet]({{ site.baseurl }}{% link cheatsheets/web/html/index.md %}).


## Button

Add a strong call to action with a button. Useful for an external link or a button to Get Started or Downloaded.

_Note: The `button` element will not render in plain markdown but it does work on static sites_.

Example below, with a link.


**Code:**

```html
<a href="https://example.com">
    <button>Click me</button>
</a>
```

**Result:**

<a href="https://example.com">
    <button>Click me</button>
</a>


Add styling on the button or on your site with CSS.


## Comments

HTML comments will not be visible when viewed as HTML. So they are good for notes to yourself.

```html
<!-- TODO: Something to do. -->
```

<!-- TODO: Something to do. -->

Especially good for a static website where you don't want your TODO items to show up on the site. Though you might want to use the Jekyll `comment` filter if you want to avoid your comment from being rendered as HTML source.

```liquid
{% comment %}
Message here
{% endcomment %}
```


## Formatting

The `kbd` HML tag can be used for keyboard commands.


**Code:**

```html
Press <kbd>Esc</kbd>
```

**Result:**

Press <kbd>Esc</kbd>


**Code:**

```html
Press <kbd>CTRL</kbd>+<kbd>C</kbd>
```

**Result:**

Press <kbd>CTRL</kbd>+<kbd>C</kbd>


## Mixing

### Rendering markdown as plain HTML

Node that the markdown here gets ignored inside HTML tags. So you can use a dash or underscore without getting styling.

Code:

```html
<p>
    This is a paragraph with **markdown bold** which will be IGNORED.
    This is the next line but there was no break tag so it is on the same line.
</p>
```

Result:

<p>
    This is a paragraph with **markdown bold** which will be IGNORED.
    This is the next line but there was no break tag so it is on the same line.
</p>

If you actually want to show markdown as code, consider a markdown or Liquid code block instead.

### Rendering markdown in HTML

Be careful when putting markdown instead HTML tags when you do actually want the markdown to be used.

This will work as are open lines between HTML and markdown.

```html
<div>

- A
- B
- C

</div>
```

<div>

- A
- B
- C

</div>

This will not work as expected - the markdown will be treated as plain text and without line breaks.

```html
<div>
- A
- B
- C
</div>
```

<div>
- A
- B
- C
</div>


Indenting 4 spaces causes a code block rather than text. That might be unexpected here:

```html
<div>

    A
    B
    C
    D

</div>
```

<div>

    A
    B
    C
    D

</div>

Solve it with spaces removed. And break tags if neeeded.

```html
<div>
    A<br>
    B<br>
    C<br>
    D
</div>
```

<div>
    A<br>
    B<br>
    C<br>
    D
</div>

Or use ensure every line starts with an opening tag.

```html
<div>

    <p>A</p>
    <p>B</p>
    <p>C</p>
    <p>D</p>

</div>
```

<div>
    <p>A</p>
    <p>B</p>
    <p>C</p>
    <p>D</p>
</div>

{% endraw %}

# Images

Images in markdown as similar to a hyperlink, except it starts with an **exclamation mark**.

The following apply, as with standard links:

- The target can point to a **local** file in the repo or a **remote** URL, as with standard links.
- The text in the first part is alternative text shown while the image is loading (or if fails to load).
- Optional text can be included at the end, to show on hover over.


## General format

```md
![ALT_TEXT](IMG_SRC)

![ALT_TEXT](IMG_SRC "HOVER TEXT")
```

Example code:

```md
![My foo](foo.jpg)

![My foo](foo.jpg "A message about foo")
```

### Notes

- For local paths, the target is **case sensitive**. GitHub will show an error otherwise. Some IDE extensions are case-insensitive and so hide errors that will appear on GitHub.
- You can include multiple images on one line.
    ```md
    ![foo](foo.png) ![bar](bar.png)
    ```


## Linked images 

Wrap an image a link so you navigate somewhere by clicking the image.

By default, an image tag alone will lead to a large version of the image (maybe not on static sites). But you can add a link around an image so clicking it goes somewhere.

```md
[![ALT_TEXT](IMG_SRC)](CLICK_TARGET)

With whitespace for demonstration:

[ ![ALT_TEXT](IMG_SRC) ](CLICK_TARGET)
```

e.g.

```md
[![Photo of me](/photo.png)](/about.html)
```

### Building it up

Image:
```md
![Alt text for broken image link](assets/logo.png)
```

Link:
```md
[Alt text for broken link](httsp://example.com)
```

Image with link:
```md
[![Alt text for broken image link](assets/logo.png)](https://example.com)
```

Note the link on the outside doesn’t have alt text anymore but the link still wraps the image.

Yes it is hard to read and edit but you get used to it as a pattern in Markdown.


## Example of inline vs reference style

### Inline-style

Example:

**Code**:

```md
![Alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "This text shows on hover")
```

**Result:**

![Alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "This text shows on hover")


### Reference-style

**Code**:

```markdown
![Alt text][logo]

Some more text.

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "This text shows on hover"

There is a logo above but this element but it is not visible in the rendered HTML.
```

**Result**:

![Alt text][logo]

Some more text.

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "This text shows on hover"

There is a logo above but this element but it is not visible in the rendered HTML.


## Plain HTML

For more control, you can use HTML for your images.

```html
<img src="foo.jpg">
```

Here we make the image clickable, to emulate what a markdown image does.

```html
<a href="https://example.com/foo/">
    <img src="https://example.com/bar.png">
</a>
```


## Styled HTML

Resize and center an image using HTML attributes.

GitHub also sets max-width to `100%` on the CSS when rendering the page, so that means your image can take up a lot of space.

A good way to do this is set the exact height - letting the pixel width change based on desktop or mobile. Fine-tune the value per image.

```html
<p align="center">
    <img height="300px" src="foo.png">
</p>
```

Or use a relative width value:

- `width="80%"`

<!-- Does that work ^ ? -->

Notes:

- Centering and resizing as above **cannot** be achieved by setting CSS (inline or in a style tag) on GitHub, so you must update attributes of the tags. The `align` attribute works for now in HTML5 but will eventually stop as it is deprecated.
- The resizing above works for _HTML_ tags in markdown, but resizing cannot be done for _markdown_ image. At least in GitHub-flavored implementation of markdown - some other systems support resizing e.g. `![Alt](img.jpg =60x50)`.
- The image will be hyperlinked to the full size version of the image, unless you add an anchor tag.


### Add elements

You can use other elements in the outer tag.

In the case of a badge image as a second element, that will only be centered if the outer element is a `div` and not a `p`. I don't know why.

Example:


```html
<div align="center">
    <a href="https://michaelcurrin.github.io/unicron/">

![GitHub Pages site](https://img.shields.io/badge/docs-GitHub_Pages-f967f9?style=for-the-badge)
    </a>

</div>
```

<div align="center">
    <a href="https://michaelcurrin.github.io/unicron/">

![GitHub Pages site](https://img.shields.io/badge/docs-GitHub_Pages-f967f9?style=for-the-badge)
    </a>

</div>

Note the lack of a space before the closing `a` tag otherwise that is just indented text. Or it has to have no indentation.

The badge could also be converted to an `img` tag for consistency. Then a line break is needed to keep the images on separate lines.

```html
<div align="center">
    <a href="https://michaelcurrin.github.io/unicron/">
        <br>
        <img src="https://img.shields.io/badge/docs-GitHub_Pages-f967f9?style=for-the-badge" alt="GitHub Pages site"/>
    </a>
</div>
```
<div align="center">
    <a href="https://michaelcurrin.github.io/unicron/">
        <br>
        <img src="https://img.shields.io/badge/docs-GitHub_Pages-f967f9?style=for-the-badge" alt="GitHub Pages site"/>
    </a>
</div>

## SVGs

Format:

```md
![Alt text](foo.svg)

![Alt text](https://example.com/foo.svg)
```

Example

**Code:**:

```md
![Alt text](https://placeholder.pics/svg/200x60/DEDEDE/555555/Sample%20SVG)
```

**Result**

![Alt text](https://placeholder.pics/svg/200x60/DEDEDE/555555/Sample%20SVG)


### GitHub links

#### Using raw.githubusercontent.com

If you reference an image on GitHub through the _Raw_ button, you get a link for `raw.githubusercontent.com`. You must add this to the URL to avoid getting an error: `?sanitize=true`.

Example of the above. This could be Markdown too, but with HTML to set the width.

```html
<img width="100px"
     src="https://raw.githubusercontent.com/graphql/graphql-spec/master/resources/GraphQL%20Logo.svg?sanitize=true" />
```

<img width="100px"
     src="https://raw.githubusercontent.com/graphql/graphql-spec/master/resources/GraphQL%20Logo.svg?sanitize=true" />

Image link from Wikipedia icon [here](https://en.wikipedia.org/wiki/GraphQL).

If you use a different domains below, though you do **not** need the `sanitize` parameter.

### Using github.io

An asset hosted on a GitHub Pages site.

```md
![Alt text](https://potherca-blog.github.io/StackOverflow/question.13808020.include-an-svg-hosted-on-github-in-markdown/controllers_brief.svg)
```

![Alt text](https://potherca-blog.github.io/StackOverflow/question.13808020.include-an-svg-hosted-on-github-in-markdown/controllers_brief.svg)


# Indentation

## Spaces

Note that while using indentation of `2` spaces is allowed in general, it will cause unexpected styling in some cases, when using GitHub-Flavored Markdown.

So `4` spaces is preferred.

#### When 4 spaces works well

Numbered and bullets mixed.

	1. A
	2. B.
	    - Bullet
	    - Bullet
	3. C

1. A
2. B.
    - Bullet
    - Bullet
3. C

Numbered and code blocks mixed.

	1. A
	2. B
	    ```sh
	    $ echo 'Code block'
	    ```
	3. C

5. A
6. B
    ```sh
    $ echo 'Code block'
    ```
7. C

#### When 2 spaces breaks

Here using 2 spaces only and mix numbered and bullet points. The inner list is **not** nested.

	1. A
	2. B.
	  - Bullet
	  - Bullet
	3. C

1. A
2. B
  - Bullet
  - Bullet
3. C

Nesting code in a numbered list also does not work.

	1. A
	2. B
	  ```sh
	  $ echo 'Code block'
	  ```
	3. C

1. A
2. B
  ```sh
  $ echo 'Code block'
  ```
3. C

## Tabs

Using tabs also works fine.

	1. A
	2. B.
		- Bullet
		- Bullet

1. A
2. B.
	- Bullet
	- Bullet


# Links


## Format

A markdown link's format is:


```markdown
[Link text](target)
```

The link text is what will be shown on error or while the image is loading. It can also help with SEO. It can be left blank.

The target should be either a **local** file path in the repo, or a **remote** URL. The target should **not** be blank, otherwise it will just link to the current page.


## File

The path is by default **relative** to the current path.

```markdown
[link text](bar.txt) - File name.

[link text](./bar.txt) - Equivalent to the above, but more verbose, so not common.

[link text](foo/bar.txt) - Path to file.
```

You can ascend in the directory, using the double dots.

```markdown
[link text](../fizz/buzz.txt)
```

Use a forward slash to indicate a path relative to the **root**, ignoring the current path.

```markdown
[link text](/app/file.txt)
```

Use an encoded space as **%20** to escape a space in a path, to avoid an error in rendering markdown. Using a backspace in front of a space does **not** work.

```markdown
[link text](/Foo%20Bar/baz.txt)
```

Additionally, you can use IDs in your target to you can jump to an element with that ID, typically a heading.

```markdown
## My first heading

Content

## My second heading

More content.

Click to go to [My first heading](#my-first-heading).
```

The target could go to another page.

```markdown
[Foo bar](foo#bar)

[Foo bar](https://example.com#bar)
```


## URL

### Inline links

Set the target as a full URL, requiring protocol, domain and optional path.

```markdown
[link text](https://example.com/foo/bar)
```

Regarding protocol - the URL **must** start with `http` or `https`, otherwise the link will in invalid.

For example, this will link add `/example.com` to the current path.

```markdown
[Bad example](example.com)
```

Add optional alternative text. You can hover over the link to see the alt text.

**Code:**

```markdown
[link text](https://example.com "alt text")
```

**Result:**

[link text](https://example.com "alt text")


## Reference-style links

Use text or a number or reference a link in the next paragraph or at the end of the page.

This helps keep use of links within paragraphs very readable, as you are able to as alias/shortcut to the full link and reuse it across a page.

The full link will **not** be visible.

### Text alias

Use arbitrary case-insensitive reference text in target.

And case-sensitive link alias in the link and in the reference. You might prefer dashes and lowercase for predictabilty. The alias is not seen by the end-user.

**Code:**

```markdown
Here is my [Homepage][MichaelCurrin home]

I'm using another link to my site [here][MichaelCurrin home] in case you missed it.

[MichaelCurrin home]: https://michaelcurrin.github.io/
```

**Result:**

Here is my [Homepage][MichaelCurrin home]

I'm using another link to my site [here][MichaelCurrin home] in case you missed it.

[MichaelCurrin home]: https://michaelcurrin.github.io/

### Numbered reference links

Use can use number aliases for your links.

Example:

**Code:**

```markdown
Here is my [Homepage][1] with a numbered reference.

[1]: https://michaelcurrin.github.io/
```

**Result:**

Here is my [Homepage][1] with a numbered reference.

[1]: https://michaelcurrin.github.io/

### Link text

Similar to [Text alias](#text-alias) but using hard brackets with no text. Or not using hard brackets at all. This then takes on the alias from the link text.

Using hard brackets.

**Code:**

```md
Here is my [Homepage][].

And here is my [Homepage][] again.

[Homepage]: https://michaelcurrin.github.io/
```

**Result:**

Here is my [Homepage][].

And here is my [Homepage][] again.

[Homepage]: https://michaelcurrin.github.io/

Leave out hard brackets.

**Code:**

```md
Here is my [Homepage].

And here is my [Homepage] again.

[Homepage]: https://michaelcurrin.github.io/
```

**Result:**

Here is my [Homepage].

And here is my [Homepage] again.

[Homepage]: https://michaelcurrin.github.io/


## HTML in links

```md
[<img src="abc.png" width="100px"/>](https://example.com)
```

Or

```md
[<img src="abc.png" width="100px"/>][hello-world]

[hello-world]: https://example.com
```


---
title: Lists
description: Bullet points and numbered lists
---


## Bulleted list

### Basic

The hyphen is preferred.

Code:

    - First item.
    - Second item.

Result:

- First item.
- Second item.

### Nested

The convention hyphen on the outside, then a star within that and a plus sign within that. Though this doesn't actually effect the result.

Code:

    - Nested
        * Bullet
            + List
    - Nested
        - Bullet
            - List

Result:

- Nested
    * Bullet
        + List
- Nested
    - Bullet
        - List

### Multi-line text

You can use line breaks in a bullet list (but not a numbered list).

Code:

    - First point starts here.

        Next line of same point.

        And a third line.
    - Second point starts here.

        And keeps going here.

Result:

- First point starts here.

    Next line of same point.

    And a third line.
- Second point starts here.

    And keeps going here.


## Numbered list

Code:

    1. Numbered
    2. List

Result:

1. Numbered
2. List

Note that numbering can be left as all `1.` and it will still work.

Code:

    1. Foo
    1. Bar
    1. Baz

Result:

1. Foo
1. Bar
1. Baz

Note the number formatting style will change by itself at each indentation level.

Code:

    1. Nested
        1. Bullet
            1. List

Result:

1. Nested
    1. Bullet
        1. List


## Mixed list

Code:

    1. Number
    2. Number
        * Bullet
        * Bullet
    3. Number

Result:

1. Number
2. Number
    * Bullet
    * Bullet
3. Number


## Quotes in lists

### Quote under a bullet point

Code:

    - Top-level
        - Point A
            > Indented, so shows **within** the point neatly.

Result:

- Top-level
    - Point A
        > Indented, so shows **within** the point neatly.

### Multi-line quote under a bullet point

Code:

    - Top-level
        - Point A
            > First line.
            > 
            > Next line.

Result:

- Top-level
    - Point A
        > First line.
        > 
        > Next line.

### Quote as a bullet point

Code:

    - Top-level
        - > Point A, which is a quote.

Result:

- Top-level
    - > Point A, which is a quote.

### Bad formatting

Make sure not to mix a quote and bullet at the same level.

Code:

    - Top-level
        - Point A
        > There is no indent here, probably not what you want.
        - Point B

Result:

- Top-level
    - Point A
    > There is no indent here, probably not what you want.
    - Point B


## Code blocks in lists

### Basic

Code:

    - Top-level
        - Foo
        - Here is some code, indented so it shows under the point.
            ```python
            print("Hello, world!")
            ```
        - Bar

Result:

- Top-level
    - Foo
    - Here is some code, indented so it shows under the point.
        ```python
        print("Hello, world!")
        ```
    - Bar

### Multi-line

Code:

    - Here is some code, indented so it shows under the point.
        ```python
        print("Hello, world!")
        ```
    More text in the same point.
        ```python
        print("Hello again, world!")
        ```
    - Bar.

Result:

- Here is some code, indented so it shows under the point.
    ```python
    print("Hello, world!")
    ```
    More text in the same point.
    ```python
    print("Hello again, world!")
    ```
- Bar.


## Tables inside a bullet point

I've discovered this by accident and not seen it in practice, but anyway in case it is useful. Note that standard markdown doesn't support this (like on GitHub), but Jekyll does support it.

### Single row tables

Not that you can't have a table span multiple bullet points. So these are bullet points with one table each.

    - abc | def
    - ghi | jkl
    - first | second | third | fourth

- abc | def
- ghi | jkl
- first | second | third | fourth

### Multi-row table

    - abc | def
      def | ghj

- abc | def
  def | ghj


## Images in lists

Note that HTML gives you more control like resizing the image, but you can use HTML or Markdown for the image.

### Same line

```markdown
- My text <img src="abc.png">
```

### Indent

Add 4 (or 2) spaces to indent an image under a bullet point, without making another bullet point.

As HTML

```markdown
- My text
    <img src="abc.png">
```

This works with text too. At least in a PR description. In GitHub directly, it wraps to one line.

```markdown
- My text
    More text
    Yet more text
        Another level
```

- My text
    More text
    Yet more text
        Another level


# Menu

A one-line menu with dashes. Copied from [threejs](https://github.com/mrdoob/three.js/blob/dev/README.md).

	[Examples](https://threejs.org/examples/) &mdash;
	[Documentation](https://threejs.org/docs/) &mdash;
	[Wiki](https://github.com/mrdoob/three.js/wiki) &mdash;
	[Migrating](https://github.com/mrdoob/three.js/wiki/Migration-Guide) &mdash;
	[Questions](https://stackoverflow.com/questions/tagged/three.js) &mdash;
	[Forum](https://discourse.threejs.org/) &mdash;
	[Slack](https://join.slack.com/t/threejs/shared_invite/enQtMzYxMzczODM2OTgxLTQ1YmY4YTQxOTFjNDAzYmQ4NjU2YzRhNzliY2RiNDEyYjU2MjhhODgyYWQ5Y2MyZTU3MWNkOGVmOGRhOTQzYTk) &mdash;
	[Discord](https://discordapp.com/invite/HF4UdyF)

[Examples](https://threejs.org/examples/) &mdash;
[Documentation](https://threejs.org/docs/) &mdash;
[Wiki](https://github.com/mrdoob/three.js/wiki) &mdash;
[Migrating](https://github.com/mrdoob/three.js/wiki/Migration-Guide) &mdash;
[Questions](https://stackoverflow.com/questions/tagged/three.js) &mdash;
[Forum](https://discourse.threejs.org/) &mdash;
[Slack](https://join.slack.com/t/threejs/shared_invite/enQtMzYxMzczODM2OTgxLTQ1YmY4YTQxOTFjNDAzYmQ4NjU2YzRhNzliY2RiNDEyYjU2MjhhODgyYWQ5Y2MyZTU3MWNkOGVmOGRhOTQzYTk) &mdash;
[Discord](https://discordapp.com/invite/HF4UdyF)


# Tables


## Recommended

Note there are VS Code extension which help with table formatting such as making cells in a column all the same width.

There are also online tools such as [Markdown tables generator](https://www.tablesgenerator.com/markdown_tables).


## Headers and no headers

### With header

Here we have first row as the header and followed by a row of triple dashes.

    Name | Description
    ---  | ---
    abc  | def
    ghi  | jkl
    ABC  | DEF

Name | Description
---  | ---
abc  | def
ghi  | jkl
ABC  | DEF

### No header

Here we leave off the header or field names and use data rows only.

    abc | def
    ghi | jkl
    ABC | DEF

abc | def
ghi | jkl
ABC | DEF


## Mixed column count

The number of columns for row will be determined by the longest row.

    abc | def
    ghi | jkl
    ABC | DEF | XYZ

abc | def
ghi | jkl
ABC | DEF | XYZ


## Borders vs no borders

These two examples give equivalent output.

### No borders style

**Code:**

    A   | B   | C   
    --- | --- | --- 
    Foo | 1   |
    Bar | 2   |
    Baz | 3   |

**Result**:

A   | B   | C   
--- | --- | --- 
Foo | 1   |
Bar | 2   |
Baz | 3   |

### With borders style

**Code:**

    | A   | B   | C   |
    | --- | --- | --- |
    | Foo | 1   |     |
    | Bar | 2   |     |
    | Baz | 3   |     |

**Result**:

| A   | B   | C   |
| --- | --- | --- |
| Foo | 1   |     |
| Bar | 2   |     |
| Baz | 3   |     |


## Alignment

The output table will set optimal width for each column. So it is optional to keep a cells in a column the same width in markdown. It helps for readability.

Use optional colons for alignment. You can also add a border to the markdown, which does not affect the output. See the following example. [source](https://www.tablesgenerator.com/markdown_tables)

**Code:**

    | Tables   |      Are      |  Cool |
    | -------- | :-----------: | ----: |
    | col 1 is | left-aligned  | $1600 |
    | col 2 is |   centered    |   $12 |
    | col 3 is | right-aligned |    $1 |

**Result:**

| Tables   |      Are      |  Cool |
| -------- | :-----------: | ----: |
| col 1 is | left-aligned  | $1600 |
| col 2 is |   centered    |   $12 |
| col 3 is | right-aligned |    $1 |


## Markdown in cells

You can use styling (bold, italics, code, links). 

    Name       | Description
    ---        | ---
    **abc**    | _def_
    <b>abc</b> | <i>def</i>
    ghi        | [jkl](#)
    ABC        | `DEF`

Name       | Description
---        | ---
**abc**    | _def_
<b>abc</b> | <i>def</i>
ghi        | [jkl](#)
ABC        | `DEF`


## Breaks

Cells with long sentences will wrap automatically. You can force a break though with the HTML `br` tag.

    Name     | Description
    ---      | ---
    abc      | def<br>ghi

Name     | Description
---      | ---
abc      | def<br>ghi


# Todo list

Use hard brackets. With either a space or lowercase `x`.

```markdown
- [ ] not done.
- [x] done
```

- [ ] not done
- [x] done


# Dashes

When using [Kramdown](https://github.com/gettalong/kramdown) in Jekyll and maybe others, you can write an en dash of em dash using plain hyphens.

You can escape this conversion by using code formatting.

Examples below

- en dash
    - `A -- B`
    - A -- B
- em dash
    - `A --- B`
    - A --- B


