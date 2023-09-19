const video = document.querySelector('video');
const playButton = document.querySelector('.play-pause');
const rateButtons = document.querySelectorAll('.rate');
const volumeBar = document.querySelector('input');

const formatting = (time) => {
    const sec = Math.floor(time % 60);
    const min = Math.floor(time / 60) % 60;
    const hour = Math.floor(time / 3600); // 1시간 = 3600초

    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMin = min < 10 ? `0${min}` : min;
    const fHour = hour < 10 ? `0${hour}` : hour;

    return `${fHour}:${fMin}:${fSec}`
}

const updateProgress = () => {
    const percent = (video.currentTime / video.duration) * 100; // video.duration: 비디오의 전체 길이
    const progressBar = document.querySelector('.bar');
    progressBar.style.width = `${percent}%`; // bar 크기 변경

    if (video.ended) { // 비디오가 끝나면 pause 호출
        pause();
    }
};

const updateTime = () => {
    const current = document.querySelector('.current');
    const duration = document.querySelector('.duration');

    current.innerText = formatting(video.currentTime);
    duration.innerText = formatting(video.duration);
}

const setVolume = (event) => {
    video.volume = event.target.value;
}

const setRate = (event) => {
    // const {} 문법 구조분해할당
    const {rate} = event.target.dataset;// data-rate
    video.playbackRate = rate; // playbackRate : 미디어가 재생되는 속도 설정(음수면 거꾸로 재생)
};

const play = () => {
    playButton.innerText = '||';
    video.play();
};

const pause = () => {
    playButton.innerText = '▸';
    video.pause();
 };


const togglePlay = () => {
    video.paused ? play() : pause();
};

playButton.addEventListener('click', togglePlay);
rateButtons.forEach((button) => {
    button.addEventListener('click', setRate);
});

volumeBar.addEventListener('change', setVolume);
video.addEventListener('timeupdate', updateTime);
video.addEventListener('timeupdate', updateProgress);