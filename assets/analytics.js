window.trackAnalytics=function(e,t,n){if(!isStaging()){var o=function(e){e.v=Date.now()+Math.floor(1e3*Math.random());var t="//www.yext-pixel.com/store_pagespixel?product=sites";for(var n in e)e.hasOwnProperty(n)&&e[n]&&(t+="&".concat(n,"=").concat(encodeURIComponent(e[n])));return t}({pagesReferrer:window.document.referrer,pageurl:window.location.pathname,eventType:"pageview",businessids:e,siteId:t,ids:n}),i=document.createElement("img");i.src=o,i.style.width="0",i.style.height="0",i.style.position="absolute",i.alt="",document.body.appendChild(i)}};
//# sourceMappingURL=analytics.js.map