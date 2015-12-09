/* Shield UI 1.7.17 Trial Version | Copyright 2013-2015 Shield UI Ltd. | http://www.shieldui.com/eula */
!function(a,c,P,d){"use strict";var w,t,z,u,n,r,h=c.ui.Widget,I=(c.Class,c.DataSource),H=c.ui.Position,l=c.Constants.KeyCode,q=document,e=a.proxy,F=a.grep,y=a.extend,J=c.error,N=c.format,b=c.is.defined,v=c.is["boolean"],M=c.is.integer,i="horizontal",p="vertical",L="click",x="focus",E="blur",A="change",K="keydown",B="tabindex",C="disabled",D="sui-menu-item-level",j="sui-menu-item-expanded",s="sui-menu-item-disabled",g="sui-menu-item-selected",G="sui-menu-item-index",m="sui-menu-item-hover",f="sui-menu-item-data-item",o="sui-menu-item-parent",k="sui-menu-item-cc",O="sui-menu-item-cc-parent";w={cls:d,width:d,height:d,dataSource:d,readDataSource:!0,orientation:i,delay:100,animation:{enabled:!0,openDelay:100,closeDelay:50},contentTemplate:"{content}",overflow:"flipfit",events:{}},t=h.extend({init:function(){h.fn.init.apply(this,arguments);var i,l,m,k,j,d=this,g=a(d.element),f=d.options,r=f.dieOnError,n=f.dataSource,o=f.cls,p=f.renderToINTERNAL,q=f.wrapOriginalINTERNAL,s=b(q)?q:!0;if(d._original=i=a(d.element),d._tagname=m=i.prop("tagName").toLowerCase(),d._isContext=f.isContextINTERNAL,j=d._eventNS=".shieldMenu"+d.getInstanceId(),s?(d.wrapper=i.wrap("<div/>").parent(),d._isWrapped=!0):d._isWrapped=!1,i.hide(),d.element=g=a('<ul class="sui-menu sui-menu-top sui-menu-'+f.orientation+(o?" "+o:"")+'"/>').on(x+j,e(d._focus,d)).on(E+j,e(d._blur,d)).on(K+j,e(d._keydown,d)),a(p).length>0?a(p).append(g):i.after(g),b(f.width)&&g.css("width",f.width),b(f.height)&&g.css("height",f.height),l=i.attr(B),g.attr(B,b(l)?l:"0"),d._isRtl=c.support.isRtl(g),n)d.dataSource=I.create(n);else{if("ul"!==m)return d.destroy(),void J("shieldMenu: No dataSource or underlying UL element found.",r);k=function(d){var c=[];return a(d).children("li").each(function(){var d=a(this),e=d.children("ul").length>0,f={cls:d.attr("data-class"),content:e?d.children().not("ul").first().html():d.html(),href:d.attr("data-href")?d.attr("data-href"):d.children().not("ul").first().attr("href"),disabled:d.attr("data-disabled")?d.attr("data-disabled"):b(d.attr(C))&&null!==d.attr(C),separator:"separator"===d.attr("data-role"),iconUrl:d.attr("data-icon-url"),iconCls:d.attr("data-icon-cls")};e&&(f.items=k(d.children("ul")[0])),c.push(f)}),c},d.dataSource=I.create({data:i,schema:{parse:k}})}d.dataSource.on(A+j,e(d._dsChange,d)),f.readDataSource&&d.dataSource.read()},refresh:function(a){this.refreshWithElement(this._original,a)},_isFocused:function(){return a(this.element).hasClass("sui-menu-focus")},_focus:function(c){var b=this;b._blurTimeout&&(clearTimeout(b._blurTimeout),b._blurTimeout=null),b._isFocused()||(a(b.element).addClass("sui-menu-focus"),b.trigger(x))},_blur:function(c){var b=this;b._isFocused()&&(b._blurTimeout&&clearTimeout(b._blurTimeout),b._blurTimeout=setTimeout(function(){a(b.element).removeClass("sui-menu-focus"),b._collapseAll(),b._deselectAll(),b.trigger(E)},100))},_dsChange:function(){var a=this;a._renderItems(a.dataSource.view,a.element,0,null)},_getItemIcon:function(b){var c=a('<span class="sui-menu-item-icon"/>');return b.iconUrl?c.append('<img src="'+b.iconUrl+'"/>'):b.iconCls&&c.addClass(b.iconCls),c},_renderItems:function(r,A,m,B){var h,b,u,w,n,i,g,j,v,t,l,y,d=this,z=d.options,C=(r||[]).length,E=F(r||[],function(a){return a.iconUrl||a.iconCls}).length>0;for(h=0;C>h;h++)b=r[h],u=!!b.disabled,n=b.href,i=b.separator,t=!i&&b.items&&b.items.length>0,v=b.iconUrl||b.iconCls,w=i?"&nbsp;":N.call(d,z.contentTemplate,b),j=a('<a class="sui-menu-item-link" '+(n?'href="'+n+'"':"")+' tabindex="-1"/>').append('<span class="sui-menu-item-text'+(t?" sui-menu-item-text-hc":"")+'">'+w+"</span>"),g=a('<li class="sui-menu-item sui-unselectable'+(u?" sui-menu-item-disabled":"")+(i?" sui-menu-item-separator":"")+(b.cls?" "+b.cls:"")+'"/>').on("selectstart",function(){return!1}).appendTo(A).data(f,b).data(o,B).data(D,m).data(s,u).data(G,h).append(j),j.click(e(d._itemClicked,d,g)).on(x,e(d.focus,d)),!i&&E&&(m>0||v||z.orientation===p)&&j.prepend(d._getItemIcon(b)),t&&(j.append('<span class="sui-menu-item-children-caret"/>'),l=a('<div class="sui-menu-submenu"/>').hide().data(O,g).appendTo(g),l.css("z-index",c.ui.Util.GetMaxZIndex(".sui-menu, .sui-menu-submenu",q.body)+1),y=a('<ul class="sui-menu sui-menu-vertical"/>').appendTo(l),d._renderItems(b.items,y,m+1,g),g.data(k,l).hover(e(d._itemMouseEnter,d,g,!0),e(d._itemMouseLeave,d,g,!0)))},_itemMouseEnter:function(a,c){var b=this;a.addClass(m),setTimeout(function(){a.hasClass(m)&&b._itemExpand(a,c)},b.options.delay)},_itemMouseLeave:function(a,b){var c=this;a.removeClass(m),c._itemCollapse(a,!0,b)},_itemExpand:function(a,m,p){var l,c=this,d=c.options,g=d.animation,n=a.data(D),b=a.data(k),h=0===n&&d.orientation===i,q=a.data(f),e=a.data(o);c._isExpandable(a)&&c._canHaveFocus(a)&&b&&(b.stop(!0,!0),e&&!c._isExpanded(e)&&c._itemExpand(e,!1,!0,!0),m&&(l=c.trigger("expand",{element:a,item:q})),h&&b.css("min-width",a.outerWidth()),b.show(),H.Set(b,a,{source:"left top",target:h?"left bottom":"right top",overflow:d.overflow}),!p&&g&&g.enabled?b.hide().slideDown(g.openDelay,function(){a.data(j,!0)}):a.data(j,!0))},_itemCollapse:function(d,c,l,n){var p,e=this,i=e.options.animation,h=d.data(k),q=d.data(f),g=d.data(o);h&&(h.stop(!0,!0),l&&(p=e.trigger("collapse",{element:d,item:q})),c=b(c)?!!c:!0,a(h).find("ul").first().children().each(function(){var b=a(this);e._isExpanded(b)&&e._itemCollapse(b,c,!1,!0)}),!n&&i&&i.enabled?h.slideUp(i.closeDelay,function(){d.data(j,!1),c&&g&&!g.hasClass(m)&&e._itemCollapse(g,!0,!1,!0)}):(h.hide(),d.data(j,!1),c&&c&&g&&!g.hasClass(m)&&e._itemCollapse(g,!0,!1,!0)))},_collapseAll:function(){var b=this;a(b.element).children("li").each(function(){var c=a(this);b._isExpanded(c)&&b._itemCollapse(c,!1,!1,!0)})},_isExpandable:function(a){return!!a.data(k)},_isExpanded:function(a){return a.data(j)===!0},_hasExpanded:function(b){var c=this,d=b.data(k);return b.data(j)!==!0?!1:F(a(d).find("ul").first().children(),function(b){return c._isExpanded(a(b))||c._hasExpanded(a(b))}).length>0},_canHaveFocus:function(a){return!a.data(s)&&!a.data(f).separator},_keydown:function(c){var d,a=this,e=!0;switch(c.keyCode){case l.UP:a._move("up",c);break;case l.DOWN:a._move("down",c);break;case l.LEFT:a._move("left",c);break;case l.RIGHT:a._move("right",c);break;case l.SPACE:case l.ENTER:d=a._getSelected(),b(d)&&(a._isExpanded(d)||a._itemExpand(d,!0),a._itemClicked(d));break;default:e=!1}e&&c.preventDefault()},_getFirstSelectableItem:function(c){var b,d=this;return a(c).children("li").each(function(){var c=a(this);return d._canHaveFocus(c)?(b=c,!1):void 0}),b},_getNextSelectableItem:function(e){var c,b,g=this,i=e.parent(),d=e.index(),f=i.children("li"),h=f.length;if(h-1>d)for(b=d+1;h>b;b++)if(c=a(f[b]),g._canHaveFocus(c))return c;if(d>0)for(b=0;d>b;b++)if(c=a(f[b]),g._canHaveFocus(c))return c;return e},_getPrevSelectableItem:function(e){var c,b,g=this,i=e.parent(),d=e.index(),f=i.children("li"),h=f.length;if(d>0)for(b=d-1;b>=0;b--)if(c=a(f[b]),g._canHaveFocus(c))return c;if(h-1>d)for(b=h-1;b>d;b--)if(c=a(f[b]),g._canHaveFocus(c))return c;return e},_move:function(g,l){var k,h,j,a,e=this,c=e._getSelected();e._isRtl;if(b(c))if(k=c.parent().hasClass("sui-menu-vertical")?p:i,h=c.data(o),j=h?h.parent().hasClass("sui-menu-vertical")?p:i:d,k===i){if("up"===g)return void e._itemCollapse(c,!1,!0);if("down"===g){if(!e._isExpandable(c))return;e._itemExpand(c,!0),a=e._getFirstSelectableItem(c.find(".sui-menu-submenu > .sui-menu").first())}else if("left"===g){if(a=e._getPrevSelectableItem(c),a===c)return}else{if("right"!==g)return;if(a=e._getNextSelectableItem(c),a===c)return}}else if("up"===g){if(0===c.index()){if(h&&j===i)a=h,e._itemCollapse(a,!1,!0);else if(a=e._getPrevSelectableItem(c),a===c)return}else if(a=e._getPrevSelectableItem(c),a===c)return}else if("down"===g){if(a=e._getNextSelectableItem(c),a===c)return}else if("left"===g){if(!h||j!==p)return;a=h,e._itemCollapse(a,!1,!0)}else{if("right"!==g)return;if(!e._isExpandable(c))return;e._itemExpand(c,!0),a=e._getFirstSelectableItem(c.find(".sui-menu-submenu > .sui-menu").first())}else a=e._getFirstSelectableItem(e.element);b(a)&&(e._setSelected(a,!0),e.trigger("select",{element:a,item:a.data(f)}))},_deselectAll:function(){var b=this;a(b.element).find("."+g).each(function(){a(this).removeClass(g)})},_setSelected:function(b,d){var c=this;c._canHaveFocus(b)&&(d?(c._deselectAll(),a(b).addClass(g)):a(b).removeClass(g))},_getSelected:function(){var c=this,b=a(c.element).find("."+g).first();return a(b).length>0?b:d},_isSelected:function(b){return a(b).hasClass(g)},_itemClicked:function(d,a){var e,c,b=this,g=d.data(f);a&&a.isPropagationStopped()||(b._focus(),b._canHaveFocus(d)&&(c={item:g},b._isContext&&(c.element=r),e=b.trigger(L,c),a&&(a.stopPropagation(),e.isDefaultPrevented()&&a.preventDefault())))},_getItemByIndex:function(){var c,b,g=this,f=[].slice.call(arguments),e=d;if(f.length>0)for(b=0;b<f.length;b++){if(c=f[b],!M(c))return d;if(e=0===b?a(g.element).children("li:eq("+c+")"):a(a(e).data(k)).children("ul").first().children("li:eq("+c+")"),a(e).length<=0)return d}return e},_getItemIndex:function(a){var b=[];do b.unshift(a.data(G)),a=a.data(o);while(a);return b},enabled:function(){var c,g=this,e=[].slice.call(arguments),f=v(e[0])?e.shift():d;if(c=g._getItemByIndex.apply(this,e),b(c)){if(!b(f))return!c.data(s);c.data(s,!f),a(c)[f?"removeClass":"addClass"]("sui-menu-item-disabled")}},expanded:function(){var c,a=this,e=[].slice.call(arguments),f=v(e[0])?e.shift():d;if(c=a._getItemByIndex.apply(this,e),b(c)){if(!b(f))return a._isExpanded(c);f?(a._collapseAll(),a._itemExpand(c,!1)):a._itemCollapse(c,!1,!1)}b(f)&&f===!1&&0===e.length&&a._collapseAll()},selected:function(){var a,c=this,e=[].slice.call(arguments),f=v(e[0])?e.shift():d;if(a=c._getItemByIndex.apply(this,e),b(a)){if(!b(f))return c._isSelected(a);c._setSelected(a,f)}b(f)&&f===!1&&0===e.length&&c._deselectAll()},selectedIndex:function(){var a=this,c=a._getSelected();return b(c)?a._getItemIndex(c):void 0},selectedData:function(){var d=this,c=d._getSelected();return b(c)?a(c).data(f):void 0},selectedItem:function(){return this._getSelected()},destroy:function(){var b=this,c=b._eventNS;b.dataSource&&b.dataSource.off(A+c),a(b.element).off(c).remove(),b._isWrapped&&b._original.unwrap(),b._original.show(),b._original=null,h.fn.destroy.call(b)}}),t.defaults=w,c.ui.plugin("Menu",t),z=y({},w,{orientation:p,target:d,filter:d,focusOnOpen:!0}),u=h.extend({init:function(){h.fn.init.apply(this,arguments);var d,f,b=this,g=a(b.element),e=b.options;d=b._eventNS=".shieldContextMenu"+b.getInstanceId(),b.menuElement=f=a('<div class="sui-context-menu"/>').hide().appendTo(q.body),b._menu=new t(g,y({},e,{renderToINTERNAL:f,wrapOriginalINTERNAL:!1,isContextINTERNAL:!0})),b._mouseTracker=new c.MouseTracker,a(e.target).on("contextmenu"+d,e.filter,function(c){return c.preventDefault(),b._open(b._mouseTracker.getPosition(c),a(c.currentTarget),!0,!1),!1}),a(q).on("mousedown"+d,function(c){a(c.target).closest(".sui-context-menu").length<=0&&b._closeOpen(!0)})},_open:function(g,d,j,k){var h,a=this,b=a.menuElement,e=a.options,f=e.animation,i=e.focusOnOpen;a._closeOpen(!1),j&&(h=a.trigger("open",{element:d}),h.isDefaultPrevented())||(b.stop(!0,!0),b.show(),H.Set(b,new c.Event({pageX:g.x,pageY:g.y}),{source:"left top",target:"left top",overflow:e.overflow}),f&&f.enabled?b.hide().slideDown(f.openDelay,function(){n=a,r=d,i&&a.focus()}):(n=a,r=d,i&&a.focus()))},_close:function(e){var d,a=this,b=a.menuElement,c=a.options.animation;e&&(d=a.trigger("close"),d.isDefaultPrevented())||(n=r=null,b.stop(!0,!0),c&&c.enabled?b.slideUp(c.closeDelay):b.hide())},_closeOpen:function(a){n&&n.closeINTERNAL(!0)},closeINTERNAL:function(a){this._close(a)},focus:function(){a(this.menuElement).find(".sui-menu").first().focus()},visible:function(){var c,d,a=this,b=[].slice.call(arguments);return b.length>0?(c=!!b[0],d=b[1]?b[1]:a._mouseTracker.getPosition(),c?a._open(d,b[2],!1,!1):a._close(!1),a._visible=c,void 0):a._visible},enabled:function(){return this._menu.enabled.apply(this._menu,arguments)},expanded:function(){return this._menu.expanded.apply(this._menu,arguments)},selected:function(){return this._menu.selected.apply(this._menu,arguments)},selectedIndex:function(){return this._menu.selectedIndex.apply(this._menu,arguments)},selectedData:function(){return this._menu.selectedData.apply(this._menu,arguments)},selectedItem:function(){return this._menu.selectedItem.apply(this._menu,arguments)},destroy:function(){var b=this,c=b._eventNS;a(q).off(c),a(b.options.target).off(c),b._mouseTracker&&(b._mouseTracker.destroy(),b._mouseTracker=null),b._close(),b._menu&&(b._menu.destroy(),b._menu=null),a(b.menuElement).remove(),h.fn.destroy.call(b)}}),u.defaults=z,c.ui.plugin("ContextMenu",u)}(jQuery,shield,this);