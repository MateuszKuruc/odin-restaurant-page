(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var c=a.length-1;c>-1&&!t;)t=a[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"3c9c88c2b2709cc67b56.jpg",n=e.p+"f28079afe641065c7b4f.jpg",a=e.p+"64a88cf74ce0981ddbb5.jpg",c=e.p+"53ac18d1e5c0f0d5db27.jpg",d=e.p+"066f9078e36bfb9a0d5d.jpg",o=e.p+"587378dad1fd6a4c56b2.jpg",s=function(){const e=document.querySelector(".mainBody");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menuList"),e.appendChild(i(c,"Macarons",14.99,"Bite-sized clouds of deliciousness that will make you question how something so small can bring so much joy (and sugar) into your life.")),e.appendChild(i(a,"Chocolate truffles",5.99,'Little balls of pure chocolate bliss that magically disappear faster than you can say "one more won\'t hurt."')),e.appendChild(i(d,"Cupcakes",7.99,"Happiness in a handheld package, these mini cakes with delightful frosting are basically an excuse to eat dessert for breakfast, lunch, and dinner.")),e.appendChild(i(o,"Doughnuts",12.99,"The torus-shaped wonders that prove life is better with a hole in the middle and a sweet glaze on top. Resistance is futile.")),e.appendChild(i(n,"Cheesecake",14.5,"A slice of creamy heaven that whispers sweet nothings to your taste buds and has the power to turn any frown upside down (unless you're lactose intolerant).")),e.appendChild(i(t,"Apple pie",8.5,"A warm embrace of spiced apples and flaky crust, this dessert has the audacity to make you believe that eating fruit is healthy (despite the buttery deliciousness).")),e}())};function i(e,t,n,a){const c=document.createElement("div");c.classList.add("item");const d=document.createElement("img");d.classList.add("itemPic"),d.src=e,d.alt=`${e}.jpg`,c.appendChild(d);const o=document.createElement("h3");o.innerHTML=t,c.appendChild(o);const s=document.createElement("h4");s.innerHTML=n+" EUR",c.appendChild(s);const i=document.createElement("p");return i.innerHTML=a,c.appendChild(i),c}const r=e.p+"b3c40b3d0a64358c1fd1.png",l=function(){const e=document.querySelector(".mainBody");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.innerHTML="☎️ 555 555 555";const n=document.createElement("p");n.innerHTML="🏠 Plebiscytowa HQ, Katowice, 40-035";const a=document.createElement("img");return a.classList.add("map"),a.src=r,e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())},p=e.p+"04be58c17b3d5e974442.svg",u=e.p+"bfd1f8745ceedd8cec30.png";function h(){const e=document.querySelector(".mainBody");e.innerHTML="";const t=document.createElement("div");t.classList.add("homeText");const n=document.createElement("h1");n.innerHTML="Sweets Factory";const a=document.createElement("h2");a.innerHTML="Fancy sweetness overload?";const c=document.createElement("p");c.classList.add("bodyText"),c.innerHTML="If you are longing for a sweet place where you can spend some time to boost your energy (and sugar), look no further! Sweets Factory is here to fill cravings of each and every sweet tooth wandering around!",t.appendChild(n),t.appendChild(a),t.appendChild(c),e.appendChild(t)}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("img");t.src=u;const n=document.createElement("h1");return n.innerHTML="Sweets Factory",e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("navBar");const t=document.createElement("button");t.classList.add("btn-home"),t.innerHTML="Home",t.addEventListener("click",h);const n=document.createElement("button");n.classList.add("btn-menu"),n.innerHTML="Menu",n.addEventListener("click",s);const a=document.createElement("button");return a.classList.add("btn-contact"),a.innerHTML="Contact",a.addEventListener("click",l),e.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("mainBody"),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("h4");t.innerHTML="Mateusz Kuruc 2023";const n=document.createElement("img");n.src=p;const a=document.createElement("a");return a.href="https://github.com/MateuszKuruc?tab=repositories",a.target="blank",a.appendChild(n),e.appendChild(t),e.appendChild(a),e}()),h()}()})();