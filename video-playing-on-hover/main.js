let currentVideoContainer;

document.addEventListener('mouseover', (ev)=>{
    const videoContainer = ev.target.closest('.video-container');
    if (!videoContainer || currentVideoContainer) return;

    currentVideoContainer = videoContainer;

    const video = currentVideoContainer.querySelector('.video-container__video');
    const image = currentVideoContainer.querySelector('.video-container__image');

    video.play();
    video.muted = true;
    image.hidden = true;
})

document.addEventListener('mouseout', (ev)=>{
    const videoContainer = ev.target.closest('.video-container');
    if (!videoContainer || !currentVideoContainer) return;

    const video = currentVideoContainer.querySelector('.video-container__video');
    const image = currentVideoContainer.querySelector('.video-container__image');

    video.pause();
    video.currentTime = 0;
    image.hidden = false;

    currentVideoContainer = undefined;
})
