const videos = [
  {
    src: 'videos/Cam01.mp4',
    title: 'Video 1',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam06.mp4',
    title: 'Video 2',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam08.mp4',
    title: 'Video 3',
    description: 'Original Video (Left) vs Ours (Right)'
  }
];

const gallery = document.getElementById('video-gallery');

videos.forEach(video => {
  const card = document.createElement('div');
  card.className = 'video-card';
  
  // Chrome requires 'muted' and 'playsinline' for many autoplay/loading scenarios.
  // We use 'preload="metadata"' to help Chrome fetch the video info without 
  // downloading the whole file immediately.
  card.innerHTML = `
    <video 
      controls 
      muted 
      playsinline 
      preload="metadata" 
      style="width: 100%; height: auto; display: block;">
      <source src="${video.src}" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <h3>${video.title}</h3>
    <p>${video.description}</p>
  `;
  
  gallery.appendChild(card);
});

/**
 * DEBUG TIP: 
 * If Chrome still shows a blank box, right-click the page, 
 * select "Inspect", and check the "Console" tab for 404 errors. 
 * Remember: GitHub Pages is case-sensitive (cam01.mp4 vs Cam01.mp4).
 */
