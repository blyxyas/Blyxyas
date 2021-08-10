# README ⚠️ ↓

Hi! This program helps you to write faster and better markdown files, and its written in Python, very simple.
Btw this actually writes in HTML syntax, but you can customize that for your needs, Everything is configurable.

# Usage

Write in the ***txt.txt*** file and save it, then execute the converter:

```python
python convert.py
```
↑ *or* ↓ (In `CMD`)
```python
convert.py
```

Now, open ***markdown.md*** and preview it, you'll see how the keywords were converted into Markdown (More HTML than markdown) syntax.

Unlike other "languages" like HTML, where you need to specify that, hey that's a keyword, here, simply with a space that's specified.

<b>HTML:</b>
```
<h1>This is a header</h1>
```

<b>(My) Text to Markdown:</b>
```
t1 This is a header ;t1
```

You can (even) customize the shortcuts by editing the ***config.json*** file.

But an example of a default configuration doesn't look ugly... <h6>I think.</h6>

```
t1 Hi 👋 ;t1
I'm bb Blyxyas ;bb And I'm just trying the cc beta ;cc version of my bbi NEW ;bbi text to markdown converter, so, 
it's very simple yet very bbi powerful and lightweight, ;bbi so it's very useful for weak devices!.

You can even have custom shortcuts and keywords for your text with this simple guidelines:

ol
. Write your shortcut / Custom syntax in the cc 'keywords' ;cc list
. Then write the html syntax for the same shortcut in the cc 'replacements' ;cc
. Then write the shortcut / custom syntax for the break in cc 'breakword' ;cc
. Then write the html syntax for the break in cc 'breakrepl' ;cc list
;ol

br If you want to write a global shortcut (for example a horizontal rule):
br br
ol
. Add the shortcut to the cc 'globalwords' ;cc list
. Then add the same shortcut, but in HTML syntax in the cc 'grepl' ;cc list.


;ol

Thanks for reading and bye!
br ii
btw you can even have unordered lists ;ii
ul
. bb First Element ;bb
. Second Element
;ul


hr
br

ii Blyxyas ;ii
```


## Keywords

`t1`: Title <br>
`t2`: Title 2<br>
`t3`: Title 3<br>
`t4`: Title 4<br>
`t5`: Title 5<br>
`t6`: Title 6<br><br>
`cc`: `Code`<br>
`bb`: <b>Bold</b><br>
`ii`: <i>Italic</i><br>
`bbi`: <b><i>Bold + Italic</b></i><br>
`bcq`: <blockquote>blockquote</blockquote><br><br>
`br`: Break<br>
`ol`: Ordered list<br>
`ul`: Unordered list<br>
`.`: List item<br>
`hr`: Horizontal rule<br><br>

If you want more syntax, you can create a pull request, or contact me in Discord, or create it by yourself
<br>
Yes, I know, is kinda ironic that Im not writing this using my own tool...</i>
