const songs = [
  { title: "My Song", 128-Jee Karda - Badlapur 128 Kbps.mp3: "songs/mysong.mp3", Screenshot_20260130_153004.jpg: "covers/cover2.jpg" }
];const songs = [
  { title: "Demo Song", file: "songs/song1.mp3", cover: "covers/cover1.jpg" }
];

let current = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const playlist = document.getElementById("playlist");

function loadSong(i) {
  audio.src = songs[i].file;
  title.innerText = songs[i].title;
  cover.src = songs[i].cover;
}
function playPause() {
  audio.paused ? audio.play() : audio.pause();
}
function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current); audio.play();
}
function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current); audio.play();
}

songs.forEach((s, i) => {
  const li = document.createElement("li");
  li.innerText = s.title;
  li.onclick = () => { current = i; loadSong(i); audio.play(); };
  playlist.appendChild(li);
});

loadSong(current);
