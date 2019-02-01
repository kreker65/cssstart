let a,b,c,diskrim,x1,x2;
 a = prompt('Enter a');
 b = prompt('Enter b');
 c = prompt('Ebter c');


diskrim=(b*b)-4*a*c;
alert(diskriminant(diskrim));

function diskriminant(diskrim)

{
    if (diskrim>0){
    
    x1=(-(b)-(Math.sqrt(diskrim)))/(2*a);
    x2=(-(b)+(Math.sqrt(diskrim)))/(2*a);
    
    return ' x1 is: '+x1+' x2 is: '+x2+' diskrim is:'+diskrim;
} else {
    return 'diskriminant is under 0'
}}
