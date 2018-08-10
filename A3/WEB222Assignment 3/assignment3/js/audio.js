// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () 
{
    var AudioPlay = document.querySelector("#audio"); 
    var play = "<figure><audio>";
    if (audio.controls)
    {
        play = "<figure><audio controls>";
    }
    for (var i =0; i<audio.source.length; i++)
    {
        play += `<source src=${audio.source[i].src} type=${audio.source[i].type} />`;
    }
    play += "</audio><figure>";
    AudioPlay.innerHTML = play;
}
