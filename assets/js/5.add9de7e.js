(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{294:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){"use strict";var s=n(294);n.n(s).a},297:function(e,t,n){"use strict";var s=n(295);n.n(s).a},298:function(e,t,n){"use strict";var s={props:{showBanner:Boolean},data:function(){return{menuHide:!0,menuText:"Menu",primaryColor:"text-white",secondaryColor:"text-blue-600"}},computed:{displayBanner:function(){return this.showBanner}},methods:{onMenuClick:function(){this.menuHide=!this.menuHide,this.menuText=this.menuHide?"Menu":"Close"},onMouseHoverToggle:function(){var e=[this.secondaryColor,this.primaryColor];this.primaryColor=e[0],this.secondaryColor=e[1]}}},i=(n(296),n(39)),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app__header font-open"},[n("div",{staticClass:"header__menu p-4 flex flex-row justify-between items-center bg-gray-900 shadow-md"},[n("a",{staticClass:"text-white no-underline md:hidden",attrs:{href:"#"},on:{click:e.onMenuClick}},[e._v(e._s(e.menuText))]),e._v(" "),n("ul",{staticClass:"menu__list bg-gray-900 hidden md:inline"},e._l(e.$site.themeConfig.nav,(function(t){return n("li",{staticClass:"menu__item md:inline"},[n("a",{staticClass:"menu__link px-2 no-underline text-lg text-white hover:underline",attrs:{href:t.link}},[e._v("\n          "+e._s(t.text)+"\n        ")])])})),0)]),e._v(" "),n("div",{staticClass:"header__menu--mobile text-center shadow-md md:hidden",class:{hidden:e.menuHide}},[n("ul",{staticClass:"menu__list--mobile bg-gray-900"},e._l(e.$site.themeConfig.nav,(function(t){return n("li",{staticClass:"menu__item--mobile py-2"},[n("a",{staticClass:"menu__link--mobile px-2 no-underline text-lg text-white hover:underline",attrs:{href:t.link}},[e._v("\n          "+e._s(t.text)+"\n        ")])])})),0)]),e._v(" "),e.showBanner?n("div",{staticClass:"header__banner flex items-center justify-center banner-sm"},[n("div",{staticClass:"banner__block"},[n("h1",{staticClass:"banner__title text-4xl text-center md:text-6xl"},[n("a",{class:e.primaryColor,attrs:{href:"/"},on:{mouseover:e.onMouseHoverToggle,mouseout:e.onMouseHoverToggle}},[n("span",{class:e.secondaryColor},[e._v(e._s(e.$site.title.slice(0,8)))]),e._v(e._s(e.$site.title.slice(8))+"\n        ")])]),e._v(" "),n("p",{staticClass:"banner__subtitle text-sm text-center font-open-light md:text-xl"},[e._v(e._s(e.$site.description))])])]):e._e()])}),[],!1,null,null,null);t.a=r.exports},299:function(e,t,n){"use strict";var s={},i=(n(297),n(39)),r=Object(i.a)(s,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"app__footer text-white bg-black"},[t("div",{staticClass:"footer__block flex justify-center items-center px-3"},[t("h6",{staticClass:"footer__copyright text-xs"},[this._v("\n      2019 Arnold Chand (creativenobu) | powered by "),t("a",{staticClass:"footer__link text-white underline",attrs:{rel:"noreferrer",target:"_blank",href:"https://vuepress.vuejs.org/"}},[this._v("vuepress")]),this._v(" & "),t("a",{staticClass:"footer__link text-white underline",attrs:{rel:"noreferrer",target:"_blank",href:"https://tailwindcss.com/"}},[this._v("tailwindcss")])])])])}],!1,null,null,null);t.a=r.exports},314:function(e,t,n){"use strict";n.r(t);var s=n(298),i=n(299),r={components:{Header:s.a,Footer:i.a}},a=n(39),o=Object(a.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Header",{attrs:{showBanner:!1}}),this._v(" "),this._m(0),this._v(" "),t("Footer")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"app__body container mx-auto min-h-screen flex justify-center items-center text-center px-2"},[t("h1",{staticClass:"text-2xl"},[this._v("Four'o Four. You would think I'm hiding something, but I'm not I promise! >_>")])])}],!1,null,null,null);t.default=o.exports}}]);