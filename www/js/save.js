// $('.modal-footer > btn-submit').


var music = {musicName:'',singerName:''};
var musics  = [];
var myLocalStora


$('.modal-footer > .btn-submit').click('click',function(){
    //music = {musicName:musicName.val(),singerName:singerName.val()};
    var musicName = $("#musicName");
    var singerName = $("#singerName");
    music.musicName = musicName.val();
    music.singerName = singerName.val();
 
    //musics.push(music);
    console.log(music);
    
    if(window.localStorage.getItem("musics")){
        var myCurrentArrayLocalStorage = JSON.parse(localStorage.getItem("musics"));
        const newMusics = Array.from(myCurrentArrayLocalStorage).concat(music);
        window.localStorage.setItem("musics",JSON.stringify(newMusics));
        console.log("newMusics = " +newMusics);
    }
    else{
        musics.push(music);
        window.localStorage.setItem("musics",JSON.stringify(musics));
        console.log("music = "+musics);
       
    }
    musicName.val('');
    singerName.val('');
    //window.localStorage.removeItem("musics");
   window.location.reload();
});


