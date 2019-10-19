
window.addEventListener('keypress',function(e){
    if(e.which==13)
    {
        Makecall();
        return true;
    }
});
function Makecall(){
    let textRef=document.querySelector('#textId').value;
    let xhr=new XMLHttpRequest();
    const url='https://api.openweathermap.org/data/2.5/weather?q='+textRef+'&units=metric'+'&APPID=fb13ba487a3f2fb21a5fbfb13ae55524';
    const requestType='GET'
;    xhr.open(requestType,url,true);
    //xhr.open(requestType, requestURL, true);
    xhr.onload = function()
    {
        //console.log(xhr.responseText);
        let textData=JSON.parse(xhr.responseText);
        //console.log(textData.weather[0].main);
        //let person=textData.main.temp;
        console.log(textData.main.temp);
        let refText1=document.querySelector('#ref1')
        refText1.children[0].innerHTML='Place: '+textData.name;
        let refText2=document.querySelector('#ref2');
        refText2.children[0].innerHTML='temp: '+textData.main.temp+' °C';
        refText2.children[1].innerHTML='pressure: '+textData.main.pressure;
        refText2.children[2].innerHTML='humidity: '+textData.main.humidity;
        let refText3=document.querySelector('#ref3');
        refText3.children[0].innerHTML='Weather: '+textData.weather[0].main;
        refText3.children[1].innerHTML='Wind Speed: '+textData.wind.speed;
        refText3.children[2].innerHTML='timezone: '+textData.timezone;
    }
    xhr.send();
    document.querySelector('#textId').value="";
}

