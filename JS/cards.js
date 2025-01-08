let c_top=document.getElementsByClassName("top");
let c_bottom=document.getElementsByClassName("bottom");
let plus=document.getElementsByClassName("plus")[0];
function view(){
  for(let i=0;i<c_top.length;i++){
    c_top[i].onclick=function(){
        if(c_bottom[i].classList.contains("remove")){
            c_bottom[i].classList.remove("remove");
            c_top[i].children[1].innerHTML="<span>&minus;</span>";
        }
        else{
            c_bottom[i].classList.add("remove");
            c_top[i].children[1].innerHTML="<span>&plus;</span>";
        }
    }
  }
}
view();