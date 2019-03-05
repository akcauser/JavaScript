# use strict


* Bazen kod yazarken unuttuğumuz ifadeler oluyor ve tarayıcılar bu ifadeleri otomatik düzeltiyor.
Ama bazı tarayıcılarda hata verebiliyor.
* Bu hataların kodumuzda olmaması kodun daha temiz olmasını sağlar.
* use strict ifadesi tam bu işi yapıyor. Kodumuzun başında bu ifadeyi yazdığımızda kod derlenirken bütün hatalar
kullanıcıya raporlanıyor ve kod hata veriyor.


~~~javascript
  "use strict";

  var data = 2;
  console.log(data);
~~~
