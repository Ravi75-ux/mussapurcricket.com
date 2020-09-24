
score=0;
balls=0;
overs=0;
let stack = [];
function display_none(){
    document.getElementById('zero').style.display = "none";
    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "none";
    document.getElementById('three').style.display = "none";
    document.getElementById('four').style.display = "none";
    document.getElementById('six').style.display = "none";

}
function display_block()
{
    document.getElementById('zero').style.display = "inline-block";
    document.getElementById('one').style.display = "inline-block";
    document.getElementById('two').style.display = "inline-block";
    document.getElementById('three').style.display = "inline-block";
    document.getElementById('four').style.display = "inline-block";
    document.getElementById('six').style.display = "inline-block";

}
function add() {   

    if (balls == 6) {
        balls = 0;
        overs++;

    }
    else {
        balls++;
    }
    display_block();
    document.getElementById('undo').style.display = "none";
    document.getElementById('click').style.display = "none";
   
}
function marks(x) {
    score+=x;    
    stack.push(score);

    document.getElementById('score').innerHTML = String(score);
    document.getElementById('over').innerHTML = String(overs).concat('.', balls);
    display_none();
    document.getElementById('undo').style.display = "inline-block";
    document.getElementById('click').style.display = "inline-block";
}  

function undo(){
    if(stack.length)
    {
        z = confirm("ikk step pishe");
        if (z == true) {

            if (balls == 0) {
                overs -= 1;
                balls = 6

            }
            else {
                balls -= 1;
            }
            stack.pop();
            if (stack.length){
                score = stack[stack.length - 1];

            }
            else{
                score=0;
            }
            


            document.getElementById('score').innerHTML = String(score);
            document.getElementById('over').innerHTML = String(overs).concat('.', balls);

        }
        else {
            document.getElementById('score').innerHTML = String(score);
            document.getElementById('over').innerHTML = String(overs).concat('.', balls);

        }

    }
    
    

    


}
