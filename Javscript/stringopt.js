var city = "lonDOn"
undefined
city.toUpperCase()
'LONDON'
city.toLowerCase()
'london'

var city = "lonDOn"
undefined
city.length
6
city.charAt(0)
'l'
city.charAt(1)
'o'
city.slice(1)
'onDOn'
city.slice(2)
'nDOn'
city.slice(1,4)
'onD'


var city = "amSterDAm"
city.charAt(0).toUpperCase()
'A'
city.slice(1)

var city = "amSterDAm"
city.charAt(0).toUpperCase()
'A'
city.slice(1)
'mSterDAm'
city.slice(1).toLowerCase()
'msterdam'

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()