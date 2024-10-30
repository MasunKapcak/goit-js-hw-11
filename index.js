import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".search-input");document.querySelector(".search-btn");const a=document.getElementById("gallery"),u=document.querySelector(".search-form"),f=new c(".gallery li > a",{captionsData:"alt",captionDelay:250});async function p(){const o=document.getElementById("loader"),n=`https://pixabay.com/api/?key=46766267-b6642edcf68e61aa5f54d39e5&q=${d.value}&image_type=photo&orientation=horizontal&safesearch=true`;try{a.innerHTML="",o.classList.remove("hidden");const t=await(await fetch(n)).json();t.hits.length===0?l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(t.hits)}catch(e){console.error("Hata:",e)}finally{o.classList.add("hidden")}}function m(o){const s=o.map(r=>`
    <li class="card">
  <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${r.likes}</p>
    <p class="info-text"><b>Views</b> ${r.views}</p>
    <p class="info-text"><b>Comments</b> ${r.comments}</p>
    <p class="info-text"><b>Downloads</b> ${r.downloads}</p>
  </div>
</li>
    
    `);a.innerHTML=s.join(""),f.refresh()}u.addEventListener("submit",o=>{o.preventDefault(),p()});
//# sourceMappingURL=index.js.map
