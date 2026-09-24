import { itinerary } from "./data/itinerary.js";

const KEY="tokyo_trip_expenses_v1";
const checkedKey="tokyo_trip_checks_v1";
const state={expenses:JSON.parse(localStorage.getItem(KEY)||"[]"),checks:JSON.parse(localStorage.getItem(checkedKey)||"{}")};

const $=s=>document.querySelector(s);
const yen=n=>`¥${Number(n||0).toLocaleString("ja-JP")}`;
const nt=n=>`NT$${Math.round(Number(n||0)*0.21).toLocaleString()}`;

function eventHtml(e){
  const maps=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.place)}`;
  return `<div class="event"><span class="dot"></span><h3>${e.time}　${e.icon} ${e.title}</h3><p>${e.duration||""}${e.note?` · ${e.note}`:""}</p>
  ${e.place?`<a class="btn secondary" href="${maps}" target="_blank" rel="noopener">🗺️ 導航</a>`:""}
  ${e.transport?`<span class="tag">🚇 ${e.transport}</span>`:""}</div>`;
}

function renderHome(){
 const today=new Date(); const tripStart=new Date("2026-10-06T00:00:00+08:00");
 const diff=Math.max(0,Math.ceil((tripStart-today)/86400000));
 const d1=itinerary[0];
 $("#home").innerHTML=`<div class="hero"><div class="eyebrow">10/06 — 10/11</div><h2>東京 6天5夜</h2><p class="white-muted">${today<tripStart?`距離出發 ${diff} 天`:"旅行進行中 ✈️"}</p></div>
 <div class="grid"><div class="stat">📅 行程日<b>6 DAYS</b></div><div class="stat">🗓️ 下一站<b>${d1.events[0].title}</b></div></div>
 <div class="section-title">行程總覽</div>
 <div class="card"><div class="route">${itinerary.map(d=>`<span>DAY ${d.day}</span>`).join("")}</div></div>
 <div class="section-title">今日 / 最近行程</div>
 <div class="card timeline">${d1.events.slice(0,4).map(eventHtml).join("")}</div>
 <div class="notice">💡 旅行小提醒：把這個網站加入手機主畫面，旅途中會更方便。</div>`;
}

function renderItinerary(){
 $("#itinerary").innerHTML=`<div class="section-title">📅 6天行程</div>${itinerary.map(d=>`<div class="card day-card" data-day="${d.day}"><h3>DAY ${d.day}｜${d.title}</h3><p class="muted">${d.date} · ${d.summary}</p><div>${d.events.slice(0,3).map(e=>`<span class="tag">${e.icon} ${e.title}</span>`).join("")}</div></div>`).join("")}
 <div id="dayDetail"></div>`;
 document.querySelectorAll(".day-card").forEach(c=>c.onclick=()=>renderDay(Number(c.dataset.day)));
}
function renderDay(day){
 const d=itinerary.find(x=>x.day===day);
 $("#dayDetail").innerHTML=`<div class="section-title">DAY ${d.day}｜${d.title}</div><div class="card"><p>${d.summary}</p><div class="timeline">${d.events.map(eventHtml).join("")}</div></div>`;
 window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
}

function renderMap(){
 const places=itinerary.flatMap(d=>d.events.filter(e=>e.place).map(e=>({...e,day:d.day})));
 $("#map").innerHTML=`<div class="section-title">🗺️ 東京景點</div><div class="card"><p class="muted">點擊「導航」會開啟 Google Maps。實際電車班次與路線請以當日 Google Maps / 官方交通資訊為準。</p>${places.map(p=>`<div class="expense-row"><div><b>${p.icon} ${p.title}</b><div class="muted">DAY ${p.day} · ${p.place}</div></div><a class="btn secondary" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.place)}">導航</a></div>`).join("")}</div>`;
}

function save(){localStorage.setItem(KEY,JSON.stringify(state.expenses))}
function renderExpense(){
 const total=state.expenses.reduce((s,x)=>s+Number(x.amount),0);
 $("#expense").innerHTML=`<div class="section-title">💴 旅行記帳</div><div class="hero"><div class="eyebrow">TOTAL</div><div class="money">${yen(total)}</div><div class="white-muted">${nt(total)} · 匯率預設 ¥1 = NT$0.21</div></div>
 <div class="card"><input id="amount" type="number" inputmode="numeric" placeholder="日幣金額" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:10px;margin-bottom:8px"><input id="memo" placeholder="例如：午餐" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:10px"><button class="btn" id="addExpense">＋ 新增支出</button></div>
 <div class="card">${state.expenses.length?state.expenses.map((x,i)=>`<div class="expense-row"><span>${x.memo}</span><b>${yen(x.amount)}</b></div>`).join(""):"目前還沒有記帳紀錄。"}</div>`;
 $("#addExpense").onclick=()=>{const amount=$("#amount").value,memo=$("#memo").value||"未分類";if(!amount)return;state.expenses.unshift({amount:Number(amount),memo});save();renderExpense()};
}

function renderMore(){
 const items=[["🎫","票券 / 預約","集中放航班、飯店、迪士尼與景點票券"],["🎒","行李清單","護照、現金、充電器、行動電源等"],["🛍️","購物清單","東京伴手禮與採買項目"],["🇯🇵","日本攻略","Suica、交通、免稅、緊急電話"],["🌤️","天氣","旅途中查看即時天氣，必要時調整戶外行程"]];
 $("#more").innerHTML=`<div class="section-title">☰ 旅行工具</div>${items.map(x=>`<div class="card"><h3>${x[0]} ${x[1]}</h3><p class="muted">${x[2]}</p></div>`).join("")}<div class="card"><h3>🎒 基本行李</h3>${["護照","手機","行動電源","充電器","信用卡","日幣現金","Suica / IC卡"].map((x,i)=>`<label class="check"><input type="checkbox" data-check="${i}"> ${x}</label>`).join("")}</div>`; 
 document.querySelectorAll("[data-check]").forEach(el=>{el.checked=!!state.checks[el.dataset.check];el.onchange=()=>{state.checks[el.dataset.check]=el.checked;localStorage.setItem(checkedKey,JSON.stringify(state.checks))}});
}

function show(page){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$("#"+page).classList.add("active");document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page))}
document.querySelectorAll(".bottom-nav button").forEach(b=>b.onclick=()=>show(b.dataset.page));
renderHome();renderItinerary();renderMap();renderExpense();renderMore();

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;$("#installBtn").hidden=true}};
if("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");