/*  You are in hurry to go to your school on time. But when you are crossing the road, the traffic signal is red colored. In this situation, if you try to cross the road, you may be in danger. 
If you noticed a yellow colored traffic signal, you should stop. 
If you noticed a green colored traffic signal, you should cross the road. 

So write a js code, where there is a variable called signal. 
Its value can be green, yellow or red an we will get different activities as output depending on the variable. 
So, hurry up. */


var signal = 'red';

if (signal == 'red') {
    console.log('you may be in danger');
}
else if (signal == 'yellow') {
    console.log('you should stop');
}
else {
    console.log('you should cross the road');
}