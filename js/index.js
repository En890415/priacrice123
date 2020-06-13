var firebaseConfig = {
    apiKey: "AIzaSyCnI0sknT-WrZwcvZHKGpPiioz66vp6Okk",
    authDomain: "sa-no3.firebaseapp.com",
    databaseURL: "https://sa-no3.firebaseio.com",
    projectId: "sa-no3",
    storageBucket: "sa-no3.appspot.com",
    messagingSenderId: "1015427284395",
    appId: "1:1015427284395:web:008dc524a161da95bfe6ee",
    measurementId: "G-MDP1SN9YWK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const docRef= firestore.doc("account/accountData");


var mail=document.querySelector('#mail');
var card=document.querySelector('#card');
var btn1=document.querySelector('.btn1');
var ps=document.querySelectorAll('p');
var inputs=document.querySelectorAll('input');
var form=document.querySelector('form');
var me;
var ph;
mail.onblur=function(){//郵箱判斷
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    function z(re,e){//封裝函數判斷傳入的數據
        if(e.value!=''){
            if(re.test(e.value)){
                e.className="r";
                e.nextSibling.src='img/d.svg';
                me=true;
            }
            else{
                e.className="f";
                e.nextSibling.src='img/c.svg';
                me=false;
            }
        }
        else{
            e.className="f";
            e.nextSibling.src='img/c.svg';
            me=false;
        }
    }
    z(reg,this);
}
card.onblur=function(){//卡號判斷
    var reg = /^([0-9]{4})+\-([0-9]{4})+\-([0-9]{4})+\-([0-9]{4})$/;
    function z(re,e){//封裝函數判斷傳入的數據
        if(e.value!=''){
            if(re.test(e.value)){
                e.className="r";
                e.nextSibling.src='img/d.svg';
                ph=true;
            }
            else{
                e.className="f";
                e.nextSibling.src='img/c.svg';
                ph=false;
            }
        }
        else{
            e.className="f";
            e.nextSibling.src='img/c.svg';
            ph=false;
        }
    }
    z(reg,this);
}
btn1.onclick=function(){//提交數據
    const data = {
        id :mail.value
    }
    if(me){
            if(xbox.offsetWidth==280){
                    if(ph){
                        console.log("Save"+card.value+" to Firestore");
        
                        docRef.collection(data.id).add({
                            CardNumber: card.value
                            })
                        .then(function(){
                            console.log("Data saved!");
                        }).catch(function(error){
                            console.log("Got an error: ", error);
                        });
                        btn1.style.transform='scale(0)';
                        btn1.nextElementSibling.style.transform='scale(1)';
                        form.style.transform='scaleY(0)';
                        alert("success");
                    }
                    else{
                        card.className="f";
                        card.nextSibling.src='img/c.svg';
                    }
                }else{
                    d.nextElementSibling.innerHTML="验证失败";
                    d.nextElementSibling.style.color="#f00";
                    d.style.border='1px solid #f00';
                }
    }
    else{
        mail.className="f";
        mail.nextSibling.src='img/c.svg';
    }
    
}