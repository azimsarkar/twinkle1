

const links=document.querySelectorAll(".alternate-style"),
totalLinks=links.length;

function setActiveStyel(color) {
	for(let i=0; 1<totalLinks; i++){
		if (color === links[i].getAttribute("title")) {
			links[i].removeAttribute("disabled");
		}
		else{
			links[i].setAttribute("disabled","true");
		}
	}
}
  
    //body skin

    const bodySkin=document.querySelectorAll(".body-skin"),
    totalBodySkin=bodySkin.length;
    for(let i=0; i<totalBodySkin; i++){
    	bodySkin[i].addEventListener("change",function () {
    		if(this.value === "dark"){
    			document.body.className="dark";
    		}
    		else{
    			document.body.className="";
    		}
    	})
    }

document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
	document.querySelector(".style-switcher").classList.toggle("open");
})