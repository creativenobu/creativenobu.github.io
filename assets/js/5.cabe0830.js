(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{16:function(t,e,n){"use strict";var s=n(7);n.n(s).a},17:function(t,e,n){"use strict";var s=n(8);n.n(s).a},29:function(t,e,n){"use strict";var s={props:{showBanner:Boolean},data:function(){return{menuHide:!0,menuText:"Menu",primaryColor:"text-white",secondaryColor:"text-blue-600"}},computed:{displayBanner:function(){return this.showBanner}},methods:{onMenuClick:function(){this.menuHide=!this.menuHide,this.menuText=this.menuHide?"Menu":"Close"},onMouseHoverToggle:function(){var t=[this.secondaryColor,this.primaryColor];this.primaryColor=t[0],this.secondaryColor=t[1]}}},i=(n(16),n(0)),r=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"app__header font-open"},[n("div",{staticClass:"header__menu p-4 flex flex-row justify-between items-center bg-gray-900 shadow-md"},[n("a",{staticClass:"text-white no-underline md:hidden",attrs:{href:"#"},on:{click:t.onMenuClick}},[t._v(t._s(t.menuText))]),t._v(" "),n("ul",{staticClass:"menu__list bg-gray-900 hidden md:inline"},t._l(t.$site.themeConfig.nav,function(e){return n("li",{staticClass:"menu__item md:inline"},[n("a",{staticClass:"menu__link px-2 no-underline text-lg text-white hover:underline",attrs:{href:e.link}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),n("div",{staticClass:"header__menu--mobile text-center shadow-md md:hidden",class:{hidden:t.menuHide}},[n("ul",{staticClass:"menu__list--mobile bg-gray-900"},t._l(t.$site.themeConfig.nav,function(e){return n("li",{staticClass:"menu__item--mobile py-2"},[n("a",{staticClass:"menu__link--mobile px-2 no-underline text-lg text-white hover:underline",attrs:{href:e.link}},[t._v(t._s(e.text))])])}),0)]),t._v(" "),t.showBanner?n("div",{staticClass:"header__banner flex items-center justify-center banner-sm"},[n("div",{staticClass:"banner__block"},[n("h1",{staticClass:"banner__title text-4xl text-center md:text-6xl"},[n("a",{class:t.primaryColor,attrs:{href:"/"},on:{mouseover:t.onMouseHoverToggle,mouseout:t.onMouseHoverToggle}},[n("span",{class:t.secondaryColor},[t._v(t._s(t.$site.title.slice(0,8)))]),t._v(t._s(t.$site.title.slice(8))+"\n        ")])]),t._v(" "),n("p",{staticClass:"banner__subtitle text-sm text-center font-open-light md:text-xl"},[t._v(t._s(t.$site.description))])])]):t._e()])},[],!1,null,null,null);e.a=r.exports},30:function(t,e,n){"use strict";var s={},i=(n(17),n(0)),r=Object(i.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"app__footer text-white bg-black"},[e("div",{staticClass:"footer__block flex justify-center items-center px-3"},[e("h6",{staticClass:"footer__copyright text-xs"},[this._v("2019 Arnold Chand (creativenobu) | powered by "),e("a",{staticClass:"footer__link text-white underline",attrs:{target:"_blank",href:"https://vuepress.vuejs.org/"}},[this._v("vuepress")]),this._v(" & "),e("a",{staticClass:"footer__link text-white underline",attrs:{target:"_blank",href:"https://tailwindcss.com/"}},[this._v("tailwindcss")])])])])}],!1,null,null,null);e.a=r.exports},69:function(t,e,n){},7:function(t,e,n){},74:function(t,e,n){"use strict";var s=n(69);n.n(s).a},8:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var s=n(29),i=n(30),r={components:{Header:s.a,Footer:i.a}},a=(n(74),n(0)),o=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{showBanner:!1}}),this._v(" "),e("section",{staticClass:"app__body min-h-screen page font-noto container mx-auto px-2 md:px-5"},[e("Content")],1),this._v(" "),e("Footer")],1)},[],!1,null,null,null);e.default=o.exports}}]);