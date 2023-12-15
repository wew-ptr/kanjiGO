document.body.insertAdjacentHTML("beforeend", `<div style="display: flex; position: absolute; left:0; top: 0; z-index: 10;">
<div style="width: 32px; height: 32px;" onclick="!function (){
    const ans = document.querySelector("#answer-btn");
    ans.style.display = ans === "block" ? "none" : "block";
}()">
    <svg style="transform: translateY(-3px);" width="32px" height="32px" fill="#fff" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.95 11.95H11.959M11 17C7.13401 17 4 13.866 4 10C4 6.13401 7.13401 3 11 3M12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7M12.4 11.95C12.4 12.1985 12.1985 12.4 11.95 12.4C11.7015 12.4 11.5 12.1985 11.5 11.95C11.5 11.7015 11.7015 11.5 11.95 11.5C12.1985 11.5 12.4 11.7015 12.4 11.95Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</div>
<div id="answer">
    <span id="answer-text" style="color: #fff;"></span>
</div>
</div>`)
setInterval(()=>{
    try {document.querySelector("#answer-text").textContent = window.$gameVariables._data[9] === undefined ? "-1": window.$gameVariables._data[9]} catch {}
}, 100)
