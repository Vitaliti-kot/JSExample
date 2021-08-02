class Money{
    constructor(speed, startPositionX, positionX, positionY, nod, end, id){
        this.src = 'img/2.gif';
        this.speed=speed;
        this.startPositionX=startPositionX;
        this.positionX=positionX;
        this.positionY=positionY;
        this.nod=nod;
        this.end=end;
        this.id=id;
        this.trfalse=true;
    }

     Move() {
         let time = setInterval(()=>{
            if(this.positionY<(this.end+150)){
                this.nod.style.display="flex";
                this.positionY=this.positionY+this.speed;
                this.nod.style.marginTop=this.positionY+'px';
                if(this.trfalse==true){
                    this.nod.style.marginLeft=parseInt(this.nod.style.marginLeft)+30+'px';
                    this.trfalse=false;
                }else{
                    this.nod.style.marginLeft=parseInt(this.nod.style.marginLeft)-30+'px';
                    this.trfalse=true;
                }
                this.nod.style.transition="linear 1s";
                
}else{
    this.nod.style.display = "none";
    this.startPositionX=this.Randomator()*(document.body.clientWidth-60)-30;
    this.nod.style.marginLeft=this.startPositionX+'px';
    this.nod.style.marginTop='-100 px';
    this.positionY=-100;
    this.speed=this.Randomator()*10;
    
}
         }, 60);
}
Randomator(){
    return Math.random(1);
}
}

let maxMoney = 25;                                          
let currentMoney=0;                                         
let screenweight = document.documentElement.clientWidth-60; 
let screenheight = document.documentElement.clientHeight-20;

function start(){                                           
    do{                                                     
        let interval=(Math.random(1)*10000);                
        createMoneyFunction(interval, currentMoney);        
        currentMoney+=1;                                    
    }while(currentMoney<maxMoney);                          
}


 function createMoneyFunction(interval, currentMoney){
     let timer=setInterval(()=>{
        let money=new Money;
        money.id='id'+currentMoney;
        money.startPositionX=money.Randomator()*screenweight-30;
        let subconteiner = document.createElement('span');
        subconteiner.id=money.id;
        let img = document.createElement('img');
        img.src=money.src;
        img.style.marginLeft=money.startPositionX+'px';
        img.className="moneyImg";
        money.nod=img;
        let r = money.Randomator();
        money.nod.style.marginTop='-100px';
        if(r<0.5){
            money.nod.style.width=(parseInt(img.width)-50)+'px';
            money.nod.style.height=(parseInt(img.height)-50)+'px';
            money.nod.style.zIndex='1000';
        }else if(r<0.7){
            money.nod.style.width=(parseInt(img.width)-80)+'px';
            money.nod.style.height=(parseInt(img.height)-60)+'px';
            money.nod.style.opacity='0.7';
            money.nod.style.zIndex='500';
        }else{
            money.nod.style.width=(parseInt(img.width)-100)+'px';
            money.nod.style.height=(parseInt(img.height)-90)+'px';
            money.nod.style.opacity='0.4';
            money.nod.style.zIndex='100';
        }

        money.speed=money.Randomator()*10;
        money.positionY=-100;
        money.end=screenheight;
        
        subconteiner.append(money.nod);
        document.getElementById('conteiner').appendChild(subconteiner);
        money.Move();
        clearInterval(timer);
     }, interval+500);

}

start();