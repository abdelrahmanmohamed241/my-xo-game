let p=document.querySelector("p")
let one=document.querySelector(".one")
let two=document.querySelector(".two")
let three=document.querySelector(".three")
let four=document.querySelector(".four")
let five=document.querySelector(".five")
let six=document.querySelector(".six")
let seven=document.querySelector(".seven")
let eight=document.querySelector(".eight")
let nine=document.querySelector(".nine")
let xnums=10
p.innerHTML="player x turn"
p.style.color="red"
 one.onclick=function(){
 if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        one.innerHTML="x"
        one.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        one.innerHTML="o"
        one.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
    else{
        p.innerHTML="Draw"
        p.style.color="black"
        one.innerHTML="x"
                                                    }
                                                }
 if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else  if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else  if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                 else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                     else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                         else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else  if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else  if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else  if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                     else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    }
                                                   
two.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        two.innerHTML="x"
        two.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        two.innerHTML="o"
        two.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
     else{
        p.innerHTML="draw"
        p.style.color="black"
        two.innerHTML="x"
                                                    }

     if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else  if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else  if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
three.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        three.innerHTML="x"
        three.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
     } 
     else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        three.innerHTML="o"
        three.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
     }
       else{
         p.innerHTML="Draw"           
         three.innerHTML="x"
         p.style.color="black"
                                                    }
 
    if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else  if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else  if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                 else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                         else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else  if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                     else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                         else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                     else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                 else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                     else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                         else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else  if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
four.onclick=function(){
    if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        four.innerHTML="x"
        four.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        four.innerHTML="o"
        four.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
     else{
        p.innnerHTML="Draw"
        p.style.color="black"
        four.innerHTML="x"
                                                    }

     if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"    
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"        
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                            else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
five.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        five.innerHTML="x"
        five.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        five.innerHTML="o"
        five.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
     else{
        p.innerHTML="Draw"
        five.innerHTML="x"
        p.style.color="black"
                                                    }

     if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"    
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                            else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
six.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        six.innerHTML="x"
        six.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        six.innerHTML="o"
        six.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
       else{
        p.innerHTML="Draw"
        six.innerHTML="x"
        p.style.color="black"
                                                    }
 if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                            else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
seven.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        seven.innerHTML="x"
        seven.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        seven.innerHTML="o"
        seven.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
     else{
        p.innerHTML="Draw"
        seven.innerHTML="x"
        p.style.color="black"
                                                    }

     if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
eight.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        eight.innerHTML="x"
        eight.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
    eight.innerHTML="o"
        eight.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
     else{
        p.innerHTML="Draw"
        eight.innerHTML="x"
        p.style.color="black"
                                                    }

     if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                            else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                    }
                                                   
}
nine.onclick=function(){
     if(xnums==10 || xnums==8 || xnums==6 || xnums==4){
        nine.innerHTML="x"
        nine.style.color="red"
        xnums=xnums-1
        p.innerHTML="player o turn"
        p.style.color="blue"
    }else if(xnums==9 || xnums==7 || xnums==5 || xnums==3){
        nine.innerHTML="o"
        nine.style.color="blue"
        xnums=xnums-1
        p.innerHTML="player x turn"
        p.style.color="red"
    }
     else if(xnums<=2){
        nine.innerHTML="x"
      p.innerHTML="Draw"
      p.style.color="black"
                                                    }

     if(one.innerHTML=="x" && two.innerHTML=="x" && three.innerHTML=="x"){
        p.innerHTML="x wins"
        p.style.color="red"
        }
        else if(one.innerHTML=="x" && four.innerHTML=="x" && seven.innerHTML=="x"){
            p.innerHTML="x wins"
            p.style.color="red"
            }
            else if(one.innerHTML=="x" && five.innerHTML=="x" && nine.innerHTML=="x"){
                p.innerHTML="x wins"
                p.style.color="red"
                }
                else if(seven.innerHTML=="x" && three.innerHTML=="x" && five.innerHTML=="x"){
                    p.innerHTML="x wins"
                    p.style.color="red"
                    }
                    else if(nine.innerHTML=="x" && six.innerHTML=="x" && three.innerHTML=="x"){
                        p.innerHTML="x wins"
                        p.style.color="red"
                        }
                        else if(seven.innerHTML=="x" && eight.innerHTML=="x" && nine.innerHTML=="x"){
                            p.innerHTML="x wins"
                            p.style.color="red"
                            }
                            else if(four.innerHTML=="x" && five.innerHTML=="x" && six.innerHTML=="x"){
                                p.innerHTML="x wins"
                                p.style.color="red"
                                }
                                else if(two.innerHTML=="x" && five.innerHTML=="x" && eight.innerHTML=="x"){
                                    p.innerHTML="x wins"
                                    p.style.color="red"
                                    }
                                    else if(two.innerHTML=="o" && five.innerHTML=="o" && eight.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                else if(four.innerHTML=="o" && five.innerHTML=="o" && six.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                            else if(one.innerHTML=="o" && two.innerHTML=="o" && three.innerHTML=="o"){
                                p.innerHTML="o wins"
                                p.style.color="blue"
                                }
                                else if(one.innerHTML=="o" && four.innerHTML=="o" && seven.innerHTML=="o"){
                                    p.innerHTML="o wins"
                                    p.style.color="blue"
                                    }
                                    else if(one.innerHTML=="o" && five.innerHTML=="o" && nine.innerHTML=="o"){
                                        p.innerHTML="o wins"
                                        p.style.color="blue"
                                        }
                                        else if(seven.innerHTML=="o" && three.innerHTML=="o" && five.innerHTML=="o"){
                                            p.innerHTML="o wins"
                                            p.style.color="blue"
                                            }
                                            else if(nine.innerHTML=="o" && six.innerHTML=="o" && three.innerHTML=="o"){
                                                p.innerHTML="o wins"
                                                p.style.color="blue"
                                                }
                                                else if(seven.innerHTML=="o" && eight.innerHTML=="o" && nine.innerHTML=="o"){
                                                    p.innerHTML="o wins"
                                                    p.style.color="blue"
                                                }
                                            }