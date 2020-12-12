
var s_name    = document.getElementById("name");
var  singer   = document.getElementById("artist");
var   play   = document.getElementById("play");

var    prev  = document.getElementById("prev");
var    next  = document.getElementById("next");
var song_playing = document.getElementById("audio");



var songs =[{
  name:"Aim for the moon",link:"./Pop Smoke - Aim For The Moon (Lyrics) ft. Quavo.mp3",artist:"POP Smoke",rating:5
  },
  {
  name:"Dior", link:"./POP SMOKE - DIOR (OFFICIAL VIDEO).mp3",artist:"POP Smoke",rating:5
  },
  {
  name:"Try me", link:"./The Weeknd - Try Me (Official Audio).mp3",artist:"Weeknd",rating:5
  },
  {
  name:"Woo", link:"./Pop Smoke - The Woo (Lyrics) ft. 50 Cent & Roddy Ricch.mp3",artist:"POP Smoke",rating:5
  },
  {
  name:"Better", link:"./ZAYN - Better (Lyrics).mp3",artist:"Zayn",rating:5
  },
  {
  name:"Reminder", link:"./The Weeknd - Reminder (Official Video).mp3",artist:"Weeknd",rating:5
  }];



console.log(songs);

var track_index=0;
var isplaying=false;
pause_play_track=()=>{
  
  
  song_playing.setAttribute("src",songs[track_index].link);
  s_name.innerHTML=songs[track_index].name;
  singer.innerHTML= songs[track_index].artist;
  song_playing.load()
  if(!isplaying){
    play.innerHTML='<i class="fa fa-pause fa-2x" aria-hidden="true"></i>'
    song_playing.play()
    isplaying=true;
  }
  else{
    play.innerHTML='<i class="fa fa-play fa-2x" aria-hidden="true"></i>'
    song_playing.pause()
    isplaying=false;
  }
}



prev_track=()=>{
  if(isplaying){
    song_playing.pause()
    track_index=track_index-1;
    if(track_index<0){
      track_index=songs.length-1;
    }
    song_playing.setAttribute("src",songs[track_index].link);
    s_name.innerHTML=songs[track_index].name;
    singer.innerHTML= songs[track_index].artist;
    song_playing.play()
  }
  else{
    track_index=track_index-1;
    if(track_index<0){
      track_index=songs.length-1;
    }
    song_playing.setAttribute("src",songs[track_index].link);
    s_name.innerHTML=songs[track_index].name;
    singer.innerHTML= songs[track_index].artist;
  }
  


}
next_track=()=>{
  if(isplaying){
    song_playing.pause()
    track_index=track_index+1;
    if(track_index>=songs.length){
      track_index=0;
    }
    song_playing.setAttribute("src",songs[track_index].link);
    s_name.innerHTML=songs[track_index].name;
    singer.innerHTML= songs[track_index].artist;
    song_playing.play()
  }
  else{
    track_index=track_index+1;
    if(track_index>=songs.length){
      track_index=0;
    }
    song_playing.setAttribute("src",songs[track_index].link);
    s_name.innerHTML=songs[track_index].name;
    singer.innerHTML= songs[track_index].artist;
  }
}





