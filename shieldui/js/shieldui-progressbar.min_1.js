/* Shield UI 1.7.17 Trial Version | Copyright 2013-2015 Shield UI Ltd. | http://www.shieldui.com/eula */
!function(a,b,x,w){"use strict";var i=b.ui.Widget,u=(b.Class,b.Constants),e=document,o=u.SVG_NS,m=!!e.createElementNS&&!!e.createElementNS(o,"svg").createSVGRect,j=(a.map,a.each,a.proxy,b.to["int"]),r=(b.is.func,b.error,Math.min),s=Math.max,g="disabled",d="px",n="float",f="left",k="right",h="horizontal",p="vertical",c="circular",q=function(c,d,a,e){var b=(e-90)*Math.PI/180;return{x:c+a*Math.cos(b),y:d+a*Math.sin(b)}},v=function(b,c,a,d,e){var f=q(b,c,a,e),g=q(b,c,a,d),h=180>=e-d?"0":"1";return["M",f.x,f.y,"A",a,a,0,h,0,g.x,g.y].join(" ")},t={cls:w,enabled:!0,min:0,max:100,value:0,layout:h,layoutOptions:{circular:{width:30,color:"#197BB5",colorDisabled:"#C4C4C4",borderColor:"#C4C4C4",borderWidth:1,backgroundColor:"#FFFFFF"}},reversed:!1,text:{enabled:!1,template:"{0}"},events:{}},l=i.extend({init:function(){i.fn.init.apply(this,arguments);var d,b=this,g=a(b.element),j=b.options,l=j.layout,o=j.cls;g.addClass("sui-progressbar"),l===p?g.addClass("sui-progressbar-vertical"):l===c&&g.addClass("sui-progressbar-circular"),l!==c&&(b.inner=a("<div/>").addClass("sui-progressbar-value").appendTo(g)),o&&g.addClass(o),l===h?(d=b.inner.css(n)||f,d=j.reversed?d===f?k:f:d===k?k:f,b.inner.css(n,d)):l==c&&(m||e.namespaces.scvprogressbar||e.namespaces.add("scvprogressbar","urn:schemas-microsoft-com:vml","#default#VML")),b._value=j.value,b._render(),b.enabled(j.enabled)},_render:function(){var B,G,N,f=this,r=f.options,y=r.layout,L=r.reversed,D=r.min,A=r.max,x=f._value,F=r.text,t=a(f.element),n=t.width(),k=t.height(),J=f.inner,I=A-D,P=j(100*(x-D)/I);if(y===p)B=j(P*k/100),J.css({width:"100%",height:B+d,"margin-top":(L?"0":k-B)+d});else if(y===h)J.css({width:P+"%",height:k+d});else{if(y!==c)return;var e="",s=r.layoutOptions[y],z=s.width,E=s.borderWidth,w=f._enabled?s.color:s.colorDisabled,K=s.borderColor,H=s.backgroundColor,g=n/2,i=k/2,u=(n>k?i:g)-z/2-1,l=2*u,M=j(360*(x-D)/I),C=L?360-M:0,O=C+M,q=z-2*E;m?(e='<svg xmlns="'+o+'" version="1.1" width="'+n+'" height="'+k+'">',E>0&&(e+='<circle cx="'+g+'" cy="'+i+'" r="'+u+'" stroke="'+K+'" stroke-width="'+z+'" fill="none" />'),x>=A?e+='<circle cx="'+g+'" cy="'+i+'" r="'+u+'" stroke="'+w+'" stroke-width="'+q+'" fill="none" />':(e+='<circle cx="'+g+'" cy="'+i+'" r="'+u+'" stroke="'+H+'" stroke-width="'+q+'" fill="none" />',e+='<path d="'+v(g,i,u,C,O)+'" stroke="'+w+'" stroke-width="'+q+'" fill="none" />'),e+="</svg>"):(e+='<scvprogressbar:group style="width:'+n+"px; height:"+k+'px;" coordsize="'+n+","+k+'">',E>0&&(e+='<scvprogressbar:oval style="width:'+l+"px; height:"+l+"px; position:relative; top:"+i+"px; left:"+g+'px;" strokeweight="'+z+'px" strokecolor="'+K+'" fill="false"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:oval>'),x>=A?e+='<scvprogressbar:oval style="width:'+l+"px; height:"+l+"px; position:relative; top:"+i+"px; left:"+g+'px;" strokeweight="'+q+'px" strokecolor="'+w+'" fill="false"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:oval>':(e+='<scvprogressbar:oval style="width:'+l+"px; height:"+l+"px; position:relative; top:"+i+"px; left:"+g+'px;" strokeweight="'+q+'px" strokecolor="'+H+'" fill="false"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:oval>',e+='<scvprogressbar:arc style="width:'+l+"px; height:"+l+"px; position:relative; top:"+i+"px; left:"+g+'px;" fill="false" strokeweight="'+q+'px" strokecolor="'+w+'" startangle="'+C+'" endangle="'+O+'"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:arc>'),e+="</scvprogressbar:group>"),t.html(e)}F.enabled&&(t.find(".sui-progressbar-text").remove(),f.text=a('<div class="sui-progressbar-text" />').appendTo(t).html(b.format.call(f,F.template,f._value)),G=f.text.width(),N=f.text.height(),f.text.css({top:(k-N)/2+d,left:(n-G)/2+d}))},value:function(){var b,a=this,c=a.options,d=[].slice.call(arguments);if(!(d.length>0))return a._value;if(a._enabled){b=s(r(d[0],c.max),c.min);var e=a.trigger("change",{value:b});e.isDefaultPrevented()||(a._value=b,a._render(),b>=c.max&&a.trigger("complete"))}},enabled:function(){var d,b=this,e=a(b.element),f=[].slice.call(arguments);return f.length>0?(d=!!f[0],d?e.removeAttr(g).removeClass("sui-progressbar-disabled"):e.attr(g,g).addClass("sui-progressbar-disabled"),b._enabled=d,b.options.layout==c&&b._render(),void 0):b._enabled},destroy:function(){var b=this,c=b.options.cls;a(b.element).removeClass("sui-progressbar sui-progressbar-disabled sui-progressbar-vertical sui-progressbar-circular"+(c?" "+c:"")).empty(),i.fn.destroy.call(b)}});l.defaults=t,b.ui.plugin("ProgressBar",l)}(jQuery,shield,this);