(()=>{"use strict";const e=function(){const e=document.querySelector(".mainBody");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menuList"),e.appendChild(t("Macarons",14.99,"Bite-sized clouds of deliciousness that will make you question how something so small can bring so much joy (and sugar) into your life.")),e.appendChild(t("Chocolate truffles",5.99,'Little balls of pure chocolate bliss that magically disappear faster than you can say "one more won\'t hurt."')),e.appendChild(t("Cupcakes",7.99,"Happiness in a handheld package, these mini cakes with delightful frosting are basically an excuse to eat dessert for breakfast, lunch, and dinner.")),e.appendChild(t("Doughnuts",12.99,"The torus-shaped wonders that prove life is better with a hole in the middle and a sweet glaze on top. Resistance is futile.")),e.appendChild(t("Cheesecake",14.5,"A slice of creamy heaven that whispers sweet nothings to your taste buds and has the power to turn any frown upside down (unless you're lactose intolerant).")),e.appendChild(t("Apple pie",8.5,"A warm embrace of spiced apples and flaky crust, this dessert has the audacity to make you believe that eating fruit is healthy (despite the buttery deliciousness).")),e}()),console.log("elooo")};function t(e,t,n){const a=document.createElement("div");a.classList.add("item");const s=document.createElement("img");s.classList.add("itemPic"),s.src=`../img/${e}.jpg`,s.alt=`${e}.jpg`,a.appendChild(s);const o=document.createElement("h3");o.innerHTML=e,a.appendChild(o);const d=document.createElement("h4");d.innerHTML=t+" EUR",a.appendChild(d);const c=document.createElement("p");return c.innerHTML=n,a.appendChild(c),a}!function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("h1");return t.innerHTML="Sweets Factory",e.appendChild(t),e}()),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("navBar");const n=document.createElement("button");n.classList.add("btn-home"),n.innerHTML="Home",t.appendChild(n);const a=document.createElement("button");a.classList.add("btn-menu"),a.innerHTML="Menu",a.addEventListener("click",e),t.appendChild(a);const s=document.createElement("button");return s.classList.add("btn-contact"),s.innerHTML="Contact",t.appendChild(s),t}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("mainBody");const t=document.createElement("h1");t.innerHTML="Sweets Factory",e.appendChild(t);const n=document.createElement("h2");n.innerHTML="Fancy sweetness overload?",e.appendChild(n);const a=document.createElement("p");return a.classList.add("bodyText"),a.innerHTML="If you are longing for a sweet place where you can spend some time to boost your energy (and sugar), look no further! Sweets Factory is here to fill cravings of each and every sweet tooth wandering around!",e.appendChild(a),e}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("h4");return t.innerHTML="Mateusz Kuruc 2023",e.appendChild(t),e}())}()})();