document.write('<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>');
$( document ).ready(function() {
                confirmURL();
            });
           // document.addEventListener("DOMContentLoaded", confirmURL());    
           function confirmURL(){
                  console.log("onlaod完成，開始判斷網址");
                  if(location.href == "https://en890415.github.io/priacrice123/Personal_Data.html"){
                      console.log("確認網址判斷成功" + location.href);
                      document.getElementById("Personal_Data").style.color = "#f8f9fc";
                  }else if(location.href == "https://en890415.github.io/priacrice123/GoogleMap.html"){
                      console.log("確認網址判斷成功" + location.href);
                      document.getElementById("GoogleMapHref").className = "nav-item active";
                  }else if(location.href == "https://en890415.github.io/priacrice123/Vendor.html") {
                      console.log("確認網址判斷成功" + location.href);
                      document.getElementById("ManageBar").className = "nav-item active";
                  }else{
                       console.log("判斷失敗，現在網址為" + location.href)
                   }     
           }