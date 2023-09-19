const button = document.querySelector('button');

const togglePlay = () => {
    const video = document.querySelector('video');
    // console.log(video.paused);  video가 정지 상태인지를 나타내는 boolean 값

    if(video.paused) { // true -> video가 멈춰있는 상태라면
        button.innerText = 'Pause';
        video.play();
    } else {
        button.innerText = 'Play';
        video.pause();
    }
};

button.addEventListener('click', togglePlay);
