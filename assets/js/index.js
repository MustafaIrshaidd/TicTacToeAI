const id_1=document.getElementById("1");
const id_2=document.getElementById("2");
const id_3=document.getElementById("3");
const id_4=document.getElementById("4");
const id_5=document.getElementById("5");
const id_6=document.getElementById("6");
const id_7=document.getElementById("7");
const id_8=document.getElementById("8");
const id_9=document.getElementById("9");
const winner=document.getElementById("winner");

const startGame=document.getElementById("startGame")
var turn=0; // start with "O"
var Arr
var tie


console.log(id_1);

const turnOn_Empty=(id)=>{
    id.children[0].classList.add("hidden")
    id.children[1].classList.add("hidden")
}

const turnOn_X=(id)=>{
    id.children[1].classList.add("hidden")
    id.children[0].classList.remove("hidden")
}

const turnOn_O=(id)=>{
    id.children[0].classList.add("hidden")
    id.children[1].classList.remove("hidden")
}

const toggle=(id)=>{
    if(id.children[1].className=="hidden" && id.children[0].className==""){  //0=='X'
        id.children[0].classList.add("hidden")
        id.children[1].classList.remove("hidden")
    }
    else if(id.children[0].className=="hidden" && id.children[1].className==""){ //1=='O'
        id.children[1].classList.add("hidden")
        id.children[0].classList.remove("hidden")
    }
    else if(id.children[0].className=="" && id.children[1].className==""){
        id.children[1].classList.add("hidden")
    }
    else if(id.children[0].className=="hidden" || id.children[1].className=="hidden"){
        id.children[turn].classList.remove("hidden")
        toggleTurn()
    }
}

const X_O=(id,XorOorEmpty)=>{ //Empty=0 , X=1 , O=2
    if(XorOorEmpty==0){ //make it empty
        turnOn_Empty(id)
    }
    else if(XorOorEmpty==1){ //make it X
        turnOn_X(id)
    }
    else if(XorOorEmpty==2){ //make it O
        turnOn_O(id)
    }
    else{ // Toggle
        toggle(id)
    }
}
id_1.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_1)
    }
    else{
        if(Arr[0]==1 || Arr[0]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_1)
            Arr[0]=turn+1
            gameFinished()
        }
    }
})
id_2.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_2)
    }
    else{
        if(Arr[1]==1 || Arr[1]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_2)
            Arr[1]=turn+1
            gameFinished()
        }
    }
    
})
id_3.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_3)
    }
    else{
        if(Arr[2]==1 || Arr[2]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_3)
            Arr[2]=turn+1
            gameFinished()
        }
    }
    
})
id_4.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_4)
    }
    else{
        if(Arr[3]==1 || Arr[3]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_4)
            Arr[3]=turn+1
            gameFinished()
        }
    }
    
})
id_5.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_5)
    }
    else{
        if(Arr[4]==1 || Arr[4]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_5)
            Arr[4]=turn+1
            gameFinished()
        }
    }
    
})
id_6.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_6)
    }
    else{
        if(Arr[5]==1 || Arr[5]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_6)
            Arr[5]=turn+1
            gameFinished()
        }
    }
    
})
id_7.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_7)
    }
    else{
        if(Arr[6]==1 || Arr[6]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_7)
            Arr[6]=turn+1
            gameFinished()
        }
    }
    
})
id_8.addEventListener("click",(e)=>{
    if(typeof Arr == "undefined"){
        X_O(id_8)
    }
    else{
        if(Arr[7]==1 || Arr[7]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_8)
            Arr[7]=turn+1
            gameFinished()
        }
    }
    
})
id_9.addEventListener("click",(e)=>{
    console.log(Arr)
    if(typeof Arr == "undefined"){
        X_O(id_9)
    }
    else{
        if(Arr[8]==1 || Arr[8]==2){
            console.log("its clicked before")
        }
        else{
            X_O(id_9)
            Arr[8]=turn+1
            gameFinished()
        }
    }
    
})

const clear=()=>{
    X_O(id_1,0)
    X_O(id_2,0)
    X_O(id_3,0)
    X_O(id_4,0)
    X_O(id_5,0)
    X_O(id_6,0)
    X_O(id_7,0)
    X_O(id_8,0)
    X_O(id_9,0)
    
    id_1.classList.remove("win")
    id_2.classList.remove("win")
    id_3.classList.remove("win")
    id_4.classList.remove("win")
    id_5.classList.remove("win")
    id_6.classList.remove("win")
    id_7.classList.remove("win")
    id_8.classList.remove("win")
    id_9.classList.remove("win")

    Arr=[0,0,0,0,0,0,0,0,0] //x=1 , o=2

    winner.classList.add("hidden");
    winner.classList.remove("winner")

    tie=true
}

const toggleTurn=()=>{
    if(turn==1){
        turn=0;
    }
    else{
        turn=1;
    }
}

const fillArray=()=>{
    
    Arr.map((value,index)=>{
        if(value==0){
            Arr[index]=1;
            tie=false
        }
    })
    
}

const gameFinished=(x)=>{
    
    
    if(Arr[0]==1 && Arr[4]==1 && Arr[8]==1 || Arr[0]==2 && Arr[4]==2 && Arr[8]==2 ){
        if(typeof x=="undefined"){
            console.log("game Finished diagonal 1")
            id_1.classList.add("win")
            id_5.classList.add("win")
            id_9.classList.add("win")
        
            fillArray()
        }
    
    }
    else if(Arr[2]==1 && Arr[4]==1 && Arr[6]==1 || Arr[2]==2 && Arr[4]==2 && Arr[6]==2){
        if(typeof x=="undefined"){
            console.log("game Finished diagonal 2")
            id_3.classList.add("win")
            id_5.classList.add("win")
            id_7.classList.add("win")
            fillArray()
        }  
    }

    else if(Arr[0]==1 && Arr[3]==1 && Arr[6]==1 || Arr[0]==2 && Arr[3]==2 && Arr[6]==2){
        if(typeof x=="undefined"){
            console.log("game Finished vertical1")
            id_1.classList.add("win")
            id_4.classList.add("win")
            id_7.classList.add("win")
            fillArray()
        }
        
    }
    else if(Arr[1]==1 && Arr[4]==1 && Arr[7]==1 || Arr[1]==2 && Arr[4]==2 && Arr[7]==2){
        if(typeof x=="undefined"){
            console.log("game Finished vertical2")
            id_2.classList.add("win")
            id_5.classList.add("win")
            id_8.classList.add("win")
            fillArray()
        }
        
    }
    else if(Arr[2]==1 && Arr[5]==1 && Arr[8]==1 || Arr[2]==2 && Arr[5]==2 && Arr[8]==2){
        if(typeof x=="undefined"){
            console.log("game Finished vertical3")
            id_3.classList.add("win")
            id_6.classList.add("win")
            id_9.classList.add("win")
            fillArray()
        }
        
    }
    
    else if(Arr[0]==1 && Arr[1]==1 && Arr[2]==1 || Arr[0]==2 && Arr[1]==2 && Arr[2]==2){
        if(typeof x=="undefined"){
            console.log("game Finished horizantal 1")
            id_1.classList.add("win")
            id_2.classList.add("win")
            id_3.classList.add("win")
            fillArray()
        }
        
    }
    else if(Arr[3]==1 && Arr[4]==1 && Arr[5]==1 || Arr[3]==2 && Arr[4]==2 && Arr[5]==2){
        if(typeof x=="undefined"){
            console.log("game Finished horizantal 2")
            id_4.classList.add("win")
            id_5.classList.add("win")
            id_6.classList.add("win")
            fillArray()
        }
        
    }
    else if(Arr[6]==1 && Arr[7]==1 && Arr[8]==1 || Arr[6]==2 && Arr[7]==2 && Arr[8]==2){
        if(typeof x=="undefined"){
            console.log("game Finished horizantal 3")
            id_7.classList.add("win")
            id_8.classList.add("win")
            id_9.classList.add("win")
            fillArray()
        }
        
    }
    else{
        console.log("still on")
        return
    } 
    if(tie==true){
        winner.children[0].innerHTML="It's A Tie"
        winner.classList.remove("hidden")
        winner.classList.add("winner")
    }
    else{
        winner.children[0].innerHTML="We Got A Winner !"
        winner.classList.remove("hidden")
        winner.classList.add("winner")
    }
    
}


startGame.addEventListener("click",(e)=>{
    e.preventDefault();
    clear();
})



const alphaBeta = (node,depth,alpha,beta,turn)=>{
    if (depth==0 || node==0){
        return herustic()
    }

    if(turn==1){ // AI 'X'
        let v = Number.NEGATIVE_INFINITY
        Arr.map((val,index)=>{
            if(val==0){
                v=Math.max(v,alphaBeta(index,depth-1,alpha,beta,2))
                alpha=Math.max(alpha,v)
                if(beta<=alpha){
                    return
                }
            }    
        })
        return v
    }
    else{       // Human 'O'
        let v = Number.POSITIVE_INFINITY
        Arr.map((val,index)=>{
            if(val==0){
                v=Math.min(v,alphaBeta(index,depth-1,alpha,beta,1))
                beta=Math.min(beta,v)
                if(beta<=alpha){
                    return
                }
            }    
        })
        return v
    }
}



// Parallax
document.addEventListener("mousemove",parallax);

function parallax(e){
    document.querySelectorAll('#parallax').forEach(function(move){
        var movingVal=move.getAttribute("data-value");
        var x= e.clientX * movingVal /100;
        var y= e.clientY * movingVal /100;

        console.log(x);
        
        
        move.style.transform="translate("+ x +"px, "+y+"px) rotate(10deg)"
        
        move.style.animation="animate 12s linear infinite"
    });
}











