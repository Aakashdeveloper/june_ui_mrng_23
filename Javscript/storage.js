localStorage
> Persitant storage
> We have to remove the data manully
> wrt to browser

localStorage.setItem('myCity','Delhi')
undefined
localStorage.getItem('myCity')
'Delhi'
localStorage.getItem('myCity')
'Delhi'
localStorage.removeItem('myCity')
undefined

sessionStorage
> Temp Storage
> Save wrt to tab
> Remove as soon as you close the tab

sessionStorage.setItem('TestKey','MyCodeKey')
undefined
sessionStorage.getItem('TestKey')
'MyCodeKey'
sessionStorage.removeItem('TestKey')


cookies
> Save wrt to websites
> Expires in time
document.cookie
document.cookie ="role=Admin; expires=Sun, 2 July 2023 13:00:00 UTC"