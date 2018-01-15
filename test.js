document.getElementById("theObject2").style.display = "none";
document.getElementById("waktu").innerHTML = "0";
var mulaiHitung = new Date().getTime();
var i = 0;
var marginLeft = 0;
var ukuran = 0;
var skorSementara = 1000000;
var hasilHitung = 1;

function acakWarna(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}




document.getElementById("theObject").onclick = function () {
    var hitungBerhenti = new Date().getTime();
    var hasilHitung = Math.floor((((hitungBerhenti - mulaiHitung) / 1000)-1)*100)/100;


  
    marginLeft = Math.floor(Math.random() * 1000);
    marginTop = Math.floor(Math.random() * 400);
    ukuran = Math.floor(Math.random() * 120) + 30;
    console.log("ukuran;" + ukuran);
    document.getElementById("waktu").innerHTML = hasilHitung;
    if(hasilHitung < skorSementara ){
        document.getElementById("waktuTercepat").innerHTML = hasilHitung + "&nbsp;detik";
        skorSementara = hasilHitung;
    }

    function munculWithDelay() {
        document.getElementById("theObject2").style.display = "block";
    }
    setTimeout(munculWithDelay,800);

    document.getElementById("theObject").style.display = "none";
    document.getElementById("theObject").style.backgroundColor = acakWarna();
    document.getElementById("theObject").style.marginLeft = marginLeft + "px";
    document.getElementById("theObject").style.marginTop = marginTop + "px";
    document.getElementById("theObject").style.height = ukuran + "px";
    document.getElementById("theObject").style.width = ukuran + "px"; 
    
    mulaiHitung = new Date().getTime();

   
}

document.getElementById("theObject2").onclick = function () {
    var hitungBerhenti = new Date().getTime();
    var hasilHitung =  Math.floor((((hitungBerhenti - mulaiHitung) / 1000)-1)*100)/100;
    
    mulaiHitung = new Date().getTime();
    marginLeft = Math.floor(Math.random() * 1000);
    marginTop = Math.floor(Math.random() * 400);
    ukuran = Math.floor(Math.random() * 120) + 30;
    console.log("ukuran;" + ukuran);
    document.getElementById("waktu").innerHTML = hasilHitung;

    if(hasilHitung < skorSementara ){
        document.getElementById("waktuTercepat").innerHTML = hasilHitung + "&nbsp;detik";
        skorSementara = hasilHitung;
    }



    function munculWithDelay() {
        document.getElementById("theObject").style.display = "block";
    }
    setTimeout(munculWithDelay,800);
    document.getElementById("theObject2").style.display = "none";
    document.getElementById("theObject2").style.backgroundColor = acakWarna();
    document.getElementById("theObject2").style.marginLeft = marginLeft + "px";
    document.getElementById("theObject2").style.marginTop = marginTop + "px";
    document.getElementById("theObject2").style.height = ukuran + "px";
    document.getElementById("theObject2").style.width = ukuran + "px";
    
}