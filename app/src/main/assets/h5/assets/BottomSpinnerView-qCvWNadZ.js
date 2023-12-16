import{d as I,q as S,r as M,o as G,h as g,c as f,b as d,t as h,u as b,p as R,l as L,_ as T,F as V,f as q,j as K,k as _,e as C,m as O,g as x,s as Q,x as X,i as Z,y as tt,z as B,n as W}from"./index-MsVO6JuG.js";import{I as U}from"./RelativeItemView-4iw7B7w_.js";const et=t=>(R("data-v-3540c0b3"),t=t(),L(),t),st={class:"robot"},ot=et(()=>d("div",{style:{flex:"1"}},null,-1)),nt={class:"message"},it=I({__name:"BottomRobotView",props:{message:{type:String,required:!0}},setup(t){const o=t,{message:s}=S(o),e=M(),n=["robot-1","robot-2","robot-3","robot-4","robot-5","robot-6"];return G(()=>{var i;const r=Math.floor(Math.random()*n.length);return(i=e.value)==null?void 0:i.classList.add(n[r])}),(r,i)=>(g(),f("div",st,[ot,d("div",{class:"robot-pic",ref_key:"robot",ref:e},null,512),d("div",nt,h(b(s)),1)]))}}),ne=T(it,[["__scopeId","data-v-3540c0b3"]]),P="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1702628742133'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='7098'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='24'%20height='24'%3e%3cpath%20d='M863.701333%20202.965333a256%20256%200%200%201%2010.069334%20351.402667l-346.709334%20347.221333a21.333333%2021.333333%200%200%201-30.208%200l-346.624-347.221333a256%20256%200%200%201%20361.813334-361.130667%20255.914667%20255.914667%200%200%201%20351.658666%209.728zM220.672%20263.338667a170.666667%20170.666667%200%200%200-8.192%20232.576L512%20795.904l299.52-299.946667a170.666667%20170.666667%200%200%200-240.896-240.64L421.504%20404.48a42.666667%2042.666667%200%200%201-60.373333-60.373333l90.368-90.410667-3.498667-2.944a170.666667%20170.666667%200%200%200-227.328%2012.586667z'%20fill='%23000000'%20p-id='7099'%3e%3c/path%3e%3c/svg%3e";function rt(t){if(!t)return;const o=t.querySelectorAll("img"),s=[];for(let e=0;e<o.length;e++){const n=o[e],r=n.src;r!=null&&r.length>0&&r.indexOf("/img/smiles")==-1&&(s.push(r),n.onclick=()=>{window.android&&window.android.onPreviewImage(r,s)})}t.querySelectorAll("span.text_mask").forEach(e=>{const n=e;n.onclick=r=>{r.preventDefault(),F(r.currentTarget)}})}const lt=t=>{if(F(t))return!0;const o=t.tagName.toLowerCase();if(o=="a")return!0;if(o=="img"&&window.android){const s=t;return s.getAttribute("smileid")==null&&window.android.onPreviewImage(s.src,[s.src]),!0}return!1},F=t=>{const o=A(t,".text_mask");return o?(o.classList.contains("show")?o.classList.remove("show"):o.classList.add("show"),!0):!1},A=(t,o,s=3,e=0)=>!t||e>s?null:t.matches(o)?t:A(t.parentElement,o,s,e+1),ct=(t,o,s)=>{const e=t.currentTarget;if(e&&o){const n=e.getBoundingClientRect();o.scrollTo({top:o.scrollTop+n.top-(s?40:10),behavior:"smooth"});const r=A(e,".comment-item",5);if(r!=null){const i=()=>{r.classList.remove("blinking"),r.removeEventListener("animationend",i)};r.classList.add("blinking"),r.addEventListener("animationend",i)}}},at=(t,o)=>{let s=o.replace(/<div class="quote">([^^]*?)<\/div>/,"").replace(/<span class="text_mask" style="([^^]*?)">([^^]*?)<\/span>/,"").replace(/<\/?[^>]+>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\B@([^\W_]\w*)\b/g,"＠$1");return s.length>100&&(s=s.slice(0,100)+"..."),"[quote][b]"+t+"[/b] 说: "+s+"[/quote]"},dt=t=>"　　"+(t||"").trim().replace(/&nbsp;/g," ").trim();async function pt(t){return new Promise(o=>setTimeout(o,t))}const ut=t=>{const o=e=>{for(const n in e){const r=e[n];let i=!1;if(t().forEach(l=>{l.id==n&&(i=!0)}),!i){const l=r.pst_id,m=r.pst_uid,w=H(r,l,m,!1);t().unshift(w)}}},s=e=>{for(const n in e){const r=e[n];let i=null;if(t().forEach(l=>{l.id==n&&(i=l)}),i!=null){const l=i,m=l.id,w=l.userId,k=l.topicSubReply.map(p=>p.id),u=r.map(p=>H(p,m,w,!0)).filter(p=>!k.includes(p.id));l.topicSubReply.push(...u)}}};window.addComment=e=>{var i,l;const n=(i=e.posts)==null?void 0:i.main;n!=null&&o(n);const r=(l=e.posts)==null?void 0:l.sub;r!=null&&s(r)},window.refreshCommentEmoji=e=>{console.log("刷新贴贴："+JSON.stringify(e,null,2));for(const n in e){const r=e[n];t().forEach(i=>{i.id==n&&(i.emojis=r||[]),i.topicSubReply.forEach(l=>{l.id==n&&(l.emojis=r||[])})})}}},H=(t,o,s,e=!1)=>{const n={},r=e?1:0,i=e?t.pst_id:0,l=t.pst_uid,m=t.avatar||"";return n.id=t.pst_id,n.time=t.dateline,n.userAvatar=m.startsWith("//")?"https:"+m:m,n.userName=t.nickname,n.userId=t.username,n.replyContent=t.pst_content,n.replyJs=`subReply('${t.model}', ${t.pst_mid}, ${o}, ${i}, ${l}, ${s}, ${r})`,n.topicSubReply=[],n},E={optContentJs:rt,optText:dt,optReplyItemClick:lt,optReplyContent:at,scrollIntoView:ct,delay:pt,initComment:ut},mt={class:"emoji-container"},gt=["onClick"],ft=["src"],vt={class:"user-count"},_t=I({__name:"EmojiView",props:{emojis:{type:Array,required:!0},comment:{type:Object,required:!0}},setup(t){const o=t,{emojis:s,comment:e}=S(o),n=i=>({0:"https://bgm.tv/img/smiles/tv/44.gif",79:"https://bgm.tv/img/smiles/tv/40.gif",54:"https://bgm.tv/img/smiles/tv/15.gif",140:"https://bgm.tv/img/smiles/tv/101.gif",62:"https://bgm.tv/img/smiles/tv/23.gif",122:"https://bgm.tv/img/smiles/tv/83.gif",104:"https://bgm.tv/img/smiles/tv/65.gif",80:"https://bgm.tv/img/smiles/tv/41.gif",141:"https://bgm.tv/img/smiles/tv/102.gif",88:"https://bgm.tv/img/smiles/tv/49.gif",85:"https://bgm.tv/img/smiles/tv/46.gif",90:"https://bgm.tv/img/smiles/tv/51.gif"})[i.toString()],r=i=>{const l=e==null?void 0:e.value;window.android.onToggleSmile(l.id,l.gh,JSON.stringify(i))};return(i,l)=>(g(),f("div",mt,[(g(!0),f(V,null,q(b(s),m=>(g(),f("div",{class:K(["emoji",{selected:m.selected}]),key:m.value,onClick:_(w=>r(m),["stop"])},[d("img",{class:"smile",src:n(m.value),alt:"smile"},null,8,ft),d("span",vt,h(m.users.length),1)],10,gt))),128))]))}}),z=T(_t,[["__scopeId","data-v-5c617fdd"]]),j=t=>(R("data-v-9b6f33e8"),t=t(),L(),t),ht={class:"comment"},wt={class:"comment-title"},yt=j(()=>d("div",{class:"title"},"用户讨论",-1)),kt=["onClick"],Ct=j(()=>d("div",{style:{flex:"1"}},null,-1)),bt={class:"comment-content"},xt=["onClick"],It=["onClick"],St={class:"time"},$t={class:"floor"},Et=j(()=>d("div",{style:{flex:"1"}},null,-1)),Rt=["onClick"],Lt=["innerHTML","onClick"],Tt=["onClick"],jt={class:"info"},Nt=["onClick"],Bt={class:"time"},Mt={class:"floor"},Vt=j(()=>d("div",{style:{flex:"1"}},null,-1)),qt=["onClick"],At=["innerHTML"],Jt=I({__name:"CommentView",props:{target:{type:String,required:!0},comments:{type:Array,default:[],required:!0},sort:{type:String,required:!0}},setup(t){const o=t,{target:s,comments:e,sort:n}=S(o),r=u=>{switch(u){case"desc":return"最新";case"hot":return"最热";default:return"时间"}},i=u=>{window.android&&u.userId&&window.android&&window.android.onClickUser(u.id,u.userId)},l=(u,p,c)=>{const a=u.target;if(E.optReplyItemClick(a))return;E.scrollIntoView(u,document.querySelector(s==null?void 0:s.value),c==null);const v=(c==null?void 0:c.replyJs)||"",y=p.replyJs||"",$=v.length>0,J=$?v:y,N=c||p;if(window.android){if(J.length>0){$&&(N.replyQuote=E.optReplyContent(N.userName,N.replyContent)),window.android.onReplyUser(v.length>0?v:J,JSON.stringify(c||p));return}window.android.onNeedLogin()}},m=()=>{window.android&&window.android.onClickCommentSort()},w=(u,p)=>{window.android&&window.android.onClickCommentAction(JSON.stringify(p),u.clientX,u.clientY)},k=u=>{E.scrollIntoView(u,document.querySelector(s==null?void 0:s.value),!0),window.android&&window.android.onReplyNew()};return(u,p)=>(g(),f("div",ht,[d("div",wt,[yt,d("div",{class:"sort",onClick:_(m,["stop"])},"排序："+h(r(b(n))),9,kt),Ct,d("div",{class:"write",onClick:p[0]||(p[0]=_(c=>k(c),["stop"]))},"写留言")]),(g(!0),f(V,null,q(b(e),c=>(g(),f("div",{class:"comment-item",key:c.id},[C(U,{class:"avatar",width:"36px",height:"36px",src:c.userAvatar,onClick:_(a=>i(c),["stop"])},null,8,["src","onClick"]),d("div",bt,[d("div",{class:"info",onClick:_(a=>l(a,c,null),["stop"])},[d("div",{class:"user-name",onClick:_(a=>i(c),["stop"])},h(c.userName),9,It),d("div",St,[O(h(c.time),1),d("span",$t,h(c.floor),1)]),Et,c.emojiParam?(g(),f("img",{key:0,class:"action",smileid:"",src:P,alt:"action",onClick:_(a=>w(a,c),["stop"])},null,8,Rt)):x("",!0)],8,xt),d("div",{class:"topic-html",innerHTML:c.replyContent,onClick:_(a=>l(a,c,null),["stop"])},null,8,Lt),C(z,{emojis:c.emojis,comment:c,style:{"margin-top":"16px"}},null,8,["emojis","comment"]),(g(!0),f(V,null,q(c.topicSubReply||[],a=>(g(),f("div",{class:"comment-item",key:a.id},[C(U,{class:"avatar",height:"24px",width:"24px",src:a.userAvatar,onClick:_(v=>i(a),["stop"])},null,8,["src","onClick"]),d("div",{class:"comment-content",onClick:_(v=>l(v,c,a),["stop"])},[d("div",jt,[d("div",{class:"user-name sub",onClick:_(v=>i(a),["stop"])},h(a.userName),9,Nt),d("div",Bt,[O(h(a.time),1),d("span",Mt,h(a.floor),1)]),Vt,a.emojiParam?(g(),f("img",{key:0,class:"action",smileid:"",src:P,alt:"action",onClick:_(v=>w(v,a),["stop"])},null,8,qt)):x("",!0)]),d("div",{class:"topic-html",innerHTML:a.replyContent},null,8,At),C(z,{emojis:a.emojis,comment:c,style:{"margin-top":"16px"}},null,8,["emojis","comment"])],8,Tt)]))),128))])]))),128))]))}}),ie=T(Jt,[["__scopeId","data-v-9b6f33e8"]]);function Ot(t,o){const s=t.getBoundingClientRect();if(!o)return s.top>=0&&s.bottom<=window.innerHeight;const e=o.getBoundingClientRect();return s.top>=e.top&&s.bottom<=e.bottom}async function Ut(t){return await W(),t.value instanceof HTMLElement?t.value:t.value?document.querySelector(t.value):null}function D(t){let o=`0px 0px ${t.distance}px 0px`;t.top&&(o=`${t.distance}px 0px 0px 0px`);const s=new IntersectionObserver(e=>{e[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:o});return s.observe(t.infiniteLoading.value),s}const Y=(t,o)=>{const s=t.__vccOpts||t;for(const[e,n]of o)s[e]=n;return s},Pt={},Ht=t=>(R("data-v-d3e37633"),t=t(),L(),t),zt={class:"container"},Dt=Ht(()=>d("div",{class:"spinner"},null,-1)),Gt=[Dt];function Wt(t,o){return g(),f("div",zt,Gt)}const Ft=Y(Pt,[["render",Wt],["__scopeId","data-v-d3e37633"]]),Yt={class:"state-error"},Kt=I({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(t,{emit:o}){const s=t;let e=null,n=0;const r=M(null),i=M(""),{top:l,firstload:m,distance:w}=s,{identifier:k,target:u}=S(s),p={infiniteLoading:r,top:l,firstload:m,distance:w,parentEl:null,emit(){n=(p.parentEl||document.documentElement).scrollHeight,c.loading(),o("infinite",c)}},c={loading(){i.value="loading"},async loaded(){i.value="loaded";const a=p.parentEl||document.documentElement;await W(),l&&(a.scrollTop=a.scrollHeight-n),Ot(r.value,p.parentEl)&&p.emit()},complete(){i.value="complete",e==null||e.disconnect()},error(){i.value="error"}};return Q(k,()=>{e==null||e.disconnect(),e=D(p)}),G(async()=>{p.parentEl=await Ut(u),e=D(p)}),X(()=>{e==null||e.disconnect()}),(a,v)=>(g(),f("div",{ref_key:"infiniteLoading",ref:r,style:{"min-height":"1px"}},[Z(d("div",null,[B(a.$slots,"spinner",{},()=>[C(Ft)],!0)],512),[[tt,i.value=="loading"]]),i.value=="complete"?B(a.$slots,"complete",{key:0},()=>{var y;return[d("span",null,h(((y=a.slots)==null?void 0:y.complete)||"No more results!"),1)]},!0):x("",!0),i.value=="error"?B(a.$slots,"error",{key:1,retry:p.emit},()=>{var y;return[d("span",Yt,[d("span",null,h(((y=a.slots)==null?void 0:y.error)||"Oops something went wrong!"),1),d("button",{class:"retry",onClick:v[0]||(v[0]=(...$)=>p.emit&&p.emit(...$))},"retry")])]},!0):x("",!0)],512))}}),re=Y(Kt,[["__scopeId","data-v-a7077831"]]),Qt=t=>(R("data-v-18fb154c"),t=t(),L(),t),Xt={key:0,class:"spinner-container"},Zt=Qt(()=>d("div",{class:"spinner"},null,-1)),te=[Zt],ee=I({__name:"BottomSpinnerView",props:{show:{type:Boolean,default:!0}},setup(t){const o=t,{show:s}=S(o);return(e,n)=>b(s)?(g(),f("div",Xt,te)):x("",!0)}}),le=T(ee,[["__scopeId","data-v-18fb154c"]]);export{le as B,ie as C,z as E,re as W,ne as a,E as c};
