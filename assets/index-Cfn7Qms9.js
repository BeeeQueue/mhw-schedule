var Se=Object.defineProperty;var Pe=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>Pe(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function k(){}function me(e){return e()}function ae(){return Object.create(null)}function Y(e){e.forEach(me)}function ge(e){return typeof e=="function"}function ye(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let X;function L(e,t){return e===t?!0:(X||(X=document.createElement("a")),X.href=t,e===X.href)}function We(e){return Object.keys(e).length===0}function w(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function Oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function M(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function q(){return j(" ")}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function xe(e){return Array.from(e.childNodes)}function be(e,t){t=""+t,e.data!==t&&(e.data=t)}function H(e,t,n){e.classList.toggle(t,!!n)}let ee;function T(e){ee=e}const P=[],ie=[];let O=[];const oe=[],$e=Promise.resolve();let G=!1;function Ce(){G||(G=!0,$e.then(we))}function Z(e){O.push(e)}const Q=new Set;let S=0;function we(){if(S!==0)return;const e=ee;do{try{for(;S<P.length;){const t=P[S];S++,T(t),Fe(t.$$)}}catch(t){throw P.length=0,S=0,t}for(T(null),P.length=0,S=0;ie.length;)ie.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];Q.has(n)||(Q.add(n),n())}O.length=0}while(P.length);for(;oe.length;)oe.pop()();G=!1,Q.clear(),T(e)}function Fe(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function Te(e){const t=[],n=[];O.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),O=t}const V=new Set;let D;function Ne(){D={r:0,c:[],p:D}}function je(){D.r||Y(D.c),D=D.p}function W(e,t){e&&e.i&&(V.delete(e),e.i(t))}function z(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),D.c.push(()=>{V.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function se(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function _e(e){e&&e.c()}function te(e,t,n){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),Z(()=>{const s=e.$$.on_mount.map(me).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...s):Y(s),e.$$.on_mount=[]}),a.forEach(Z)}function ne(e,t){const n=e.$$;n.fragment!==null&&(Te(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(P.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,r,a,s,u=null,i=[-1]){const f=ee;T(e);const o=e.$$={fragment:null,ctx:[],props:s,update:k,not_equal:a,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ae(),dirty:i,skip_bound:!1,root:t.target||f.$$.root};u&&u(o.root);let c=!1;if(o.ctx=n?n(e,t.props||{},(l,d,...g)=>{const h=g.length?g[0]:d;return o.ctx&&a(o.ctx[l],o.ctx[l]=h)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](h),c&&Ae(e,l)),d}):[],o.update(),c=!0,Y(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const l=xe(t.target);o.fragment&&o.fragment.l(l),l.forEach(x)}else o.fragment&&o.fragment.c();t.intro&&W(e.$$.fragment),te(e,t.target,t.anchor),we()}T(f)}class Me{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){ne(this,1),this.$destroy=k}$on(t,n){if(!ge(n))return k;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ye);function m(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function A(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function pe(e,t){const n=m(e);return isNaN(t)?A(e,NaN):(t&&n.setDate(n.getDate()+t),n)}const Ee=6048e5,R=43200,ue=1440;let De={};function $(){return De}function Ie(e){De=e}function B(e,t){var i,f,o,c;const n=$(),r=(t==null?void 0:t.weekStartsOn)??((f=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:f.weekStartsOn)??n.weekStartsOn??((c=(o=n.locale)==null?void 0:o.options)==null?void 0:c.weekStartsOn)??0,a=m(e),s=a.getDay(),u=(s<r?7:0)+s-r;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}function ce(e){const t=m(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function le(e,t){const n=t*7;return pe(e,n)}function J(e,t){const n=m(e),r=m(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function Xe(e){return A(e,Date.now())}function Le(e,t){const n=m(e),r=m(t),a=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return a*12+s}function He(e){return t=>{const r=(e?Math[e]:Math.trunc)(t);return r===0?0:r}}function Re(e,t){return+m(e)-+m(t)}function qe(e){const t=m(e);return t.setHours(23,59,59,999),t}function Ve(e){const t=m(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ze(e){const t=m(e);return+qe(t)==+Ve(t)}function Je(e,t){const n=m(e),r=m(t),a=J(n,r),s=Math.abs(Le(n,r));let u;if(s<1)u=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*s);let i=J(n,r)===-a;ze(m(e))&&s===1&&J(e,r)===1&&(i=!1),u=a*(s-Number(i))}return u===0?0:u}function Be(e,t,n){const r=Re(e,t)/1e3;return He(n==null?void 0:n.roundingMethod)(r)}const Ue={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qe=(e,t,n)=>{let r;const a=Ue[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function K(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Ke={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ge={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ze={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},et={date:K({formats:Ke,defaultWidth:"full"}),time:K({formats:Ge,defaultWidth:"full"}),dateTime:K({formats:Ze,defaultWidth:"full"})},tt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nt=(e,t,n,r)=>tt[e];function C(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const u=e.defaultFormattingWidth||e.defaultWidth,i=n!=null&&n.width?String(n.width):u;a=e.formattingValues[i]||e.formattingValues[u]}else{const u=e.defaultWidth,i=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[i]||e.values[u]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}const rt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},at={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},it={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ot={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},st={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ut={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ct=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},lt={ordinalNumber:ct,era:C({values:rt,defaultWidth:"wide"}),quarter:C({values:at,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:it,defaultWidth:"wide"}),day:C({values:ot,defaultWidth:"wide"}),dayPeriod:C({values:st,defaultWidth:"wide",formattingValues:ut,defaultFormattingWidth:"wide"})};function F(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const u=s[0],i=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(i)?dt(i,l=>l.test(u)):ft(i,l=>l.test(u));let o;o=e.valueCallback?e.valueCallback(f):f,o=n.valueCallback?n.valueCallback(o):o;const c=t.slice(u.length);return{value:o,rest:c}}}function ft(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function dt(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ht(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],s=t.match(e.parsePattern);if(!s)return null;let u=e.valueCallback?e.valueCallback(s[0]):s[0];u=n.valueCallback?n.valueCallback(u):u;const i=t.slice(a.length);return{value:u,rest:i}}}const mt=/^(\d+)(th|st|nd|rd)?/i,gt=/\d+/i,yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bt={any:[/^b/i,/^(a|c)/i]},wt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_t={any:[/1/i,/2/i,/3/i,/4/i]},vt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},kt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},St={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pt={ordinalNumber:ht({matchPattern:mt,parsePattern:gt,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),quarter:F({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),day:F({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:kt,defaultMatchWidth:"any",parsePatterns:St,defaultParseWidth:"any"})},Wt={code:"en-US",formatDistance:Qe,formatLong:et,formatRelative:nt,localize:lt,match:Pt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ot(e,t){var c,l,d,g;const n=m(e),r=n.getFullYear(),a=$(),s=(t==null?void 0:t.firstWeekContainsDate)??((l=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??a.firstWeekContainsDate??((g=(d=a.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??1,u=A(e,0);u.setFullYear(r+1,0,s),u.setHours(0,0,0,0);const i=B(u,t),f=A(e,0);f.setFullYear(r,0,s),f.setHours(0,0,0,0);const o=B(f,t);return n.getTime()>=i.getTime()?r+1:n.getTime()>=o.getTime()?r:r-1}function xt(e,t){var i,f,o,c;const n=$(),r=(t==null?void 0:t.firstWeekContainsDate)??((f=(i=t==null?void 0:t.locale)==null?void 0:i.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((c=(o=n.locale)==null?void 0:o.options)==null?void 0:c.firstWeekContainsDate)??1,a=Ot(e,t),s=A(e,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),B(s,t)}function $t(e,t){const n=m(e),r=+B(n,t)-+xt(n,t);return Math.round(r/Ee)+1}function Ct(e,t,n){const r=$(),a=(n==null?void 0:n.locale)??r.locale??Wt,s=2520,u=J(e,t);if(isNaN(u))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:u});let f,o;u>0?(f=m(t),o=m(e)):(f=m(e),o=m(t));const c=Be(o,f),l=(ce(o)-ce(f))/1e3,d=Math.round((c-l)/60);let g;if(d<2)return n!=null&&n.includeSeconds?c<5?a.formatDistance("lessThanXSeconds",5,i):c<10?a.formatDistance("lessThanXSeconds",10,i):c<20?a.formatDistance("lessThanXSeconds",20,i):c<40?a.formatDistance("halfAMinute",0,i):c<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):d===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",d,i);if(d<45)return a.formatDistance("xMinutes",d,i);if(d<90)return a.formatDistance("aboutXHours",1,i);if(d<ue){const h=Math.round(d/60);return a.formatDistance("aboutXHours",h,i)}else{if(d<s)return a.formatDistance("xDays",1,i);if(d<R){const h=Math.round(d/ue);return a.formatDistance("xDays",h,i)}else if(d<R*2)return g=Math.round(d/R),a.formatDistance("aboutXMonths",g,i)}if(g=Je(o,f),g<12){const h=Math.round(d/R);return a.formatDistance("xMonths",h,i)}else{const h=g%12,p=Math.trunc(g/12);return h<3?a.formatDistance("aboutXYears",p,i):h<9?a.formatDistance("overXYears",p,i):a.formatDistance("almostXYears",p+1,i)}}function fe(e,t){return Ct(e,Xe(e),t)}function Ft(e,t,n){let r;return Tt(t)?r=t:n=t,new Intl.DateTimeFormat(n==null?void 0:n.locale,r).format(m(e))}function Tt(e){return e!==void 0&&!("locale"in e)}function Nt(e,t,n){var l,d,g,h;const r=$(),a=(n==null?void 0:n.weekStartsOn)??((d=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((h=(g=r.locale)==null?void 0:g.options)==null?void 0:h.weekStartsOn)??0,s=m(e),u=s.getDay(),f=(t%7+7)%7,o=7-a,c=t<0||t>6?t-(u+o)%7:(f+o)%7-(u+o)%7;return pe(s,c)}function jt(e){const t={},n=$();for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]===void 0?delete t[r]:t[r]=e[r]);Ie(t)}function At(e,t){const n=m(e);return n.setHours(t),n}function Yt(e,t){const n=m(e);return n.setMinutes(t),n}function Et(e){let t,n=fe(e[1],{addSuffix:!0})+"",r;return{c(){t=j("Starts "),r=j(n)},m(a,s){N(a,t,s),N(a,r,s)},p(a,s){s&2&&n!==(n=fe(a[1],{addSuffix:!0})+"")&&be(r,n)},d(a){a&&(x(t),x(r))}}}function It(e){let t;return{c(){t=j("Current")},m(n,r){N(n,t,r)},p:k,d(n){n&&x(t)}}}function Xt(e){let t,n,r,a,s,u,i,f,o,c,l=e[5](e[1])+"",d,g,h,p,E;function re(y,_){return y[0]?It:Et}let I=re(e),v=I(e);return{c(){t=M("div"),n=M("img"),s=q(),u=M("div"),i=M("div"),f=M("div"),v.c(),o=q(),c=M("div"),d=j(l),g=q(),h=M("img"),b(n,"alt",r=e[4].slice(1).replace(".webp","")),L(n.src,a=e[4])||b(n,"src",a),b(n,"class","absolute -top-2 w-100% h-120% object-cover object-l blur-3"),b(c,"class","text-2xl text-amber-1"),b(i,"class","flex flex-col justify-between w-full p-3 font-sans text-outline-1-black"),b(h,"alt",p=e[3].slice(1).replace(".webp","")),L(h.src,E=e[3])||b(h,"src",E),b(h,"class","h-full ml-auto object-cover drop-shadow-md drop-shadow-color-#00000066"),H(h,"saturate-150",e[2]==="kulve"),H(h,"saturate-250",e[2]==="safi"),b(u,"class","flex w-full h-full z-1 text-4xl font-bold text-amber-2"),b(t,"class","relative w-full h-50 flex b-0 b-b-2 b-warmgray-9 b-solid overflow-hidden")},m(y,_){N(y,t,_),w(t,n),w(t,s),w(t,u),w(u,i),w(i,f),v.m(f,null),w(i,o),w(i,c),w(c,d),w(u,g),w(u,h)},p(y,[_]){_&16&&r!==(r=y[4].slice(1).replace(".webp",""))&&b(n,"alt",r),_&16&&!L(n.src,a=y[4])&&b(n,"src",a),I===(I=re(y))&&v?v.p(y,_):(v.d(1),v=I(y),v&&(v.c(),v.m(f,null))),_&2&&l!==(l=y[5](y[1])+"")&&be(d,l),_&8&&p!==(p=y[3].slice(1).replace(".webp",""))&&b(h,"alt",p),_&8&&!L(h.src,E=y[3])&&b(h,"src",E),_&4&&H(h,"saturate-150",y[2]==="kulve"),_&4&&H(h,"saturate-250",y[2]==="safi")},i:k,o:k,d(y){y&&x(t),v.d()}}}function Lt(e,t,n){let r,a,s,u,{current:i=!1}=t,{date:f}=t;const o=c=>Ft(c,{year:"numeric",month:"2-digit",day:"2-digit"},{locale:"sv-SE"});return e.$$set=c=>{"current"in c&&n(0,i=c.current),"date"in c&&n(1,f=c.date)},e.$$.update=()=>{e.$$.dirty&2&&n(6,r=$t(f)),e.$$.dirty&64&&n(2,a=r%4===1?"kulve":"safi"),e.$$.dirty&4&&n(4,s=a==="kulve"?"/dorado.webp":"/valley.webp"),e.$$.dirty&4&&n(3,u=a==="kulve"?"/kulve.webp":"/safi.webp")},[i,f,a,u,s,o,r]}class ke extends Me{constructor(t){super(),ve(this,t,Lt,Xt,ye,{current:0,date:1})}}function de(e,t,n){const r=e.slice();return r[3]=t[n],r}function he(e){let t,n;return t=new ke({props:{date:e[3]}}),{c(){_e(t.$$.fragment)},m(r,a){te(t,r,a),n=!0},p:k,i(r){n||(W(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function Ht(e){let t,n,r,a,s;r=new ke({props:{current:!0,date:e[0]}});let u=se(e[1]),i=[];for(let o=0;o<u.length;o+=1)i[o]=he(de(e,u,o));const f=o=>z(i[o],1,1,()=>{i[o]=null});return{c(){t=M("main"),n=M("div"),_e(r.$$.fragment),a=q();for(let o=0;o<i.length;o+=1)i[o].c();b(t,"class","h-full overflow-y-scroll")},m(o,c){N(o,t,c),w(t,n),te(r,n,null),w(t,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null);s=!0},p(o,[c]){if(c&2){u=se(o[1]);let l;for(l=0;l<u.length;l+=1){const d=de(o,u,l);i[l]?(i[l].p(d,c),W(i[l],1)):(i[l]=he(d),i[l].c(),W(i[l],1),i[l].m(t,null))}for(Ne(),l=u.length;l<i.length;l+=1)f(l);je()}},i(o){if(!s){W(r.$$.fragment,o);for(let c=0;c<u.length;c+=1)W(i[c]);s=!0}},o(o){z(r.$$.fragment,o),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)z(i[c]);s=!1},d(o){o&&x(t),ne(r),Oe(i,o)}}}function Rt(e){jt({weekStartsOn:5});const t=Yt(At(Nt(new Date,5,{weekStartsOn:1}),0),0),n=le(t,-2),r=[];for(let a=0;a<15;a++)r.push(le(t,a*2));return[n,r]}class qt extends Me{constructor(t){super(),ve(this,t,Rt,Ht,ye,{})}}new qt({target:document.getElementById("root")});
