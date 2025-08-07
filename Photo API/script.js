const URL="https://api.thecatapi.com/v1/images/search";
let img = document.getElementById("myImg");
let getPhoto=async ()=>{
    let res=await fetch(URL);
    let resPic=await res.json();
    // console.log(resPic.url);
    img.src=resPic[0].url;
    img.width=resPic[0].width;
    img.height=resPic[0].height;
}
getPhoto();
