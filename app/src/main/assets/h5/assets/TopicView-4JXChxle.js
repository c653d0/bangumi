import{d as b,r as n,a as x,o as T,c,b as s,t as v,g as m,w as g,e as a,u as h,h as k,n as j,i as d}from"./index-KiD6n6db.js";import{c as r,R,E as D,_ as E,C as J,B as M,a as H,W as L}from"./BottomSpinnerView-_3O8hS20.js";const U={key:0,class:"topic",id:"topic"},A={class:"topic-title"},O=["onClick"],z={key:0,class:"topic-author"},F={class:"topic-time"},W=["innerHTML"],X={key:0,class:"emoji"},Y=s("div",{style:{flex:"1"}},null,-1),q={key:1,class:"divider"},y=10,Z=b({__name:"TopicView",setup(G){const o=n({}),w=n(),_=n(new Date().getDate()),u=n(1),p=n("desc"),l=x([]),C=n("哼！Bangumi老娘我是有底线的人"),V={loadTopicDetail:async e=>{o.value=e,await j(),r.optContentJs(w.value)}},S=async e=>{const t=window.android.onLoadComments(u.value,y,p.value),i=JSON.parse(t);i.length==0?e.complete():(await r.delay(200),l.push(...i),u.value++,await j(),i.length<y?e.complete():e.loaded())},f=e=>{var t;return{emojiParam:e.emojiParam,id:(t=e.emojiParam)==null?void 0:t.likeCommentId,gh:e.gh}},B=e=>{let t=f(o.value);window.android&&window.android.onClickCommentAction(JSON.stringify(t),e.clientX,e.clientY)},I=(e,t)=>{e==o.value.emojiParam.likeCommentId&&(o.value.emojis=t)},N=()=>{var t,i;const e=((t=o.value)==null?void 0:t.userId)||"";window.android&&e&&window.android&&window.android.onClickUser(e,(i=o.value)==null?void 0:i.id)};return T(()=>{window.robotSay=e=>{C.value=e},r.initComment(I,()=>l,e=>{p.value=e,u.value=1,l.length=0,_.value++}),window.topic=V,window.mounted=!0}),(e,t)=>{var i;return o.value.id?(d(),c("div",U,[s("div",A,v(o.value.title),1),s("div",{class:"topic-info",onClick:g(N,["stop"])},[o.value.userName?(d(),c("div",z,v(o.value.userName),1)):m("",!0),s("div",F,v(o.value.time),1)],8,O),a(R,{related:o.value.related},null,8,["related"]),s("div",{class:"topic-content",ref_key:"topicContentRef",ref:w,innerHTML:h(r).optText(o.value.content)},null,8,W),(i=o.value.emojiParam)!=null&&i.enable?(d(),c("div",X,[a(D,{class:"topic-emoji",emojis:o.value.emojis,comment:f(o.value)},null,8,["emojis","comment"]),Y,s("img",{class:"action",smileid:"",src:E,alt:"action",onClick:t[0]||(t[0]=g(P=>B(P),["stop"]))})])):m("",!0),o.value.content?(d(),c("div",q)):m("",!0),a(J,{target:"#topic",comments:l,sort:p.value},null,8,["comments","sort"]),a(h(L),{class:"loading",target:"#topic",identifier:_.value,distance:300,onInfinite:S},{spinner:k(()=>[a(M)]),complete:k(()=>[a(H,{message:C.value},null,8,["message"])]),_:1},8,["identifier"])])):m("",!0)}}});export{Z as default};