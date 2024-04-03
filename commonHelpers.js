import{A as m,S as p,i as n}from"./assets/vendor-58583ddc.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function c(a,r){const i=await m.create({baseURL:"https://pixabay.com/api/",params:{key:"43101979-d4b3d95f27087e7220544f5cb",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).get("");return console.log(i.data),console.log(i.data.totalHits>=i.data.hits.length),i.data}const u=document.querySelector(".gallery");function d(a){const r=a.map(e=>`<li class="gallery-item">
  <a class="gallery-link"
    href="${e.largeImageURL}"
    ><img class="img" 
      src="${e.webformatURL}"
      alt="${e.tags}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b><br /> ${e.likes}</p>
    </li>
    <li>
      <p><b>Views</b><br /> ${e.views}</p>
    </li>
    <li>
      <p><b>Comments</b><br /> ${e.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b><br /> ${e.downloads}</p>
    </li>
  </ul>
  </a>
</li>

`).join("");u.insertAdjacentHTML("beforeend",r),new p(".gallery-link",{captionsData:"alt",captionDelay:250})}const s={formEl:document.querySelector(".form"),inputEl:document.querySelector("input"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")};s.formEl.addEventListener("submit",async a=>{a.preventDefault(),s.loaderEl.classList.add("is-open"),u.innerHTML="",f.refresh();const r=s.inputEl.value.trim();if(r==="")return s.loaderEl.classList.remove("is-open"),n.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});let e;try{if(e=await c(r,1),e.hits.length===0)return s.loaderEl.classList.remove("is-open"),n.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});d(e.hits)}catch{}finally{s.loaderEl.classList.remove("is-open"),e.totalHits>=e.hits.length&&e.hits.length!==0&&s.loadMoreBtn.classList.add("is-open")}s.loadMoreBtn.addEventListener("submit",async i=>{const t=await c(r,2);d(t.hits)}),s.inputEl.value=""});const f=new p(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
