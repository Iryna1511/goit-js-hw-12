import{A as w,S as m,i as p}from"./assets/vendor-58583ddc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function g(i,t){return(await w.create({baseURL:"https://pixabay.com/api/",params:{key:"43101979-d4b3d95f27087e7220544f5cb",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).get("")).data}const f=document.querySelector(".gallery");function h(i){const t=i.map(o=>`<li class="gallery-item">
  <a class="gallery-link"
    href="${o.largeImageURL}"
    ><img class="img" loading="lazy"
      src="${o.webformatURL}"
      alt="${o.tags}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b><br /> ${o.likes}</p>
    </li>
    <li>
      <p><b>Views</b><br /> ${o.views}</p>
    </li>
    <li>
      <p><b>Comments</b><br /> ${o.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b><br /> ${o.downloads}</p>
    </li>
  </ul>
  </a>
</li>

`).join("");f.insertAdjacentHTML("beforeend",t),new m(".gallery-link",{captionsData:"alt",captionDelay:250})}const n={formEl:document.querySelector(".form"),inputEl:document.querySelector("input"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")},y=new m(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});let l,a=1,b=0;const v=15;let s;n.formEl.addEventListener("submit",S);n.loadMoreBtn.addEventListener("click",M);async function S(i){if(i.preventDefault(),y.refresh(),L(),f.innerHTML="",l=n.inputEl.value.trim(),l==="")return c(),p.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});a=1;try{if(s=await g(l,a),b=Math.ceil(s.totalHits/v),s.hits.length===0)return c(),p.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});h(s.hits)}catch(t){console.error("Error fetching images:",t)}finally{c()}E(),n.inputEl.value=""}async function M(i){L(),y.refresh(),a+=1;try{s=await g(l,a),h(s.hits)}catch(t){console.error("Error fetching images:",t)}finally{c(),E(),P()}}function L(){n.loaderEl.classList.add("is-open")}function c(){n.loaderEl.classList.remove("is-open")}function q(){n.loadMoreBtn.classList.add("is-open")}function B(){n.loadMoreBtn.classList.remove("is-open")}function E(){if(a>=b)return B(),p.info({title:"Sorry",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});q()}function P(){const t=f.firstElementChild.getBoundingClientRect().height*2;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
