Document Object Model

document
#document
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a, a, a, a, a, a, a, a, a, a#toTop, toTop: a#toTop]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I am from Developer Funnel"
'I am from Developer Funnel'
document.getElementsByTagName('h1')[0].style.color="red"
'red'
document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5[[Prototype]]: HTMLCollection
document.getElementsByClassName('scroll')[1]
<a href=​"#youtube" class=​"scroll">​Youtube​</a>​
document.getElementsByClassName('scroll')[1].innerText="Videos"
'Videos'
document.getElementsByClassName('scroll')[1].style.visibility="hidden"
'hidden'