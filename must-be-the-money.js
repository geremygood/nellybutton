//
//  The actions of NellyButton
//
//

console.log('It\'s gettin hot in herre');

var myVideo=document.getElementById("belly-button");

function play(){

    // Sing Nelly to me.
    myVideo.play();

    // Track plays to Google Analyitics.
    ga('send', 'event', 'button', 'hover', 'nellybutton');
}

function pause(){

    // Pause when not hovering.
    myVideo.pause();

}
