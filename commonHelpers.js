import{A as w,S as m,i as f}from"./assets/vendor-58583ddc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function g(n,t){return(await w.create({baseURL:"https://pixabay.com/api/",params:{key:"43101979-d4b3d95f27087e7220544f5cb",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).get("")).data}const y=document.querySelector(".gallery");function h(n){const t=n.map(o=>`<li class="gallery-item">
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

`).join("");y.insertAdjacentHTML("beforeend",t),new m(".gallery-link",{captionsData:"alt",captionDelay:250})}const i={formEl:document.querySelector(".form"),inputEl:document.querySelector("input"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-btn")};let l,s=1,b=0;const E=15;let a;i.formEl.addEventListener("submit",S);i.loadMoreBtn.addEventListener("click",v);async function S(n){if(n.preventDefault(),L(),y.innerHTML="",P.refresh(),l=i.inputEl.value.trim(),l==="")return c(),f.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});s=1;try{if(a=await g(l,s),b=Math.ceil(a.totalHits/E),a.hits.length===0)return c(),p(),f.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});h(a.hits)}catch(t){console.error("Error fetching images:",t)}finally{c(),p()}i.inputEl.value=""}async function v(n){L(),s+=1;try{a=await g(l,s),h(a.hits)}catch(t){console.error("Error fetching images:",t)}finally{c(),p()}}function L(){i.loaderEl.classList.add("is-open")}function c(){i.loaderEl.classList.remove("is-open")}function M(){i.loadMoreBtn.classList.add("is-open")}function q(){i.loadMoreBtn.classList.remove("is-open")}function p(){s>=b?q():M()}const P=new m(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
