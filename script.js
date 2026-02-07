const videos = [
  {
    src: 'videos/Cam01.mov',
    title: 'Video 1',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam06.mov',
    title: 'Video 2',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam08.mov',
    title: 'Video 3',
    description: 'Original Video (Left) vs Ours (Right)'
  }
];

const gallery = document.getElementById('video-gallery');

videos.forEach(video => {
  const card = document.createElement('div');
  card.className = 'video-card';
  
  // Added 'autoplay' and 'loop'
  // Note: 'muted' MUST be present for autoplay to work in Chrome
  card.innerHTML = `
    <video 
      autoplay 
      muted 
      loop 
      playsinline 
      controls
      preload="auto" 
      style="width: 100%; height: auto; display: block;">
      <source src="${video.src}" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <h3>${video.title}</h3>
    <p>${video.description}</p>
  `;
  
  gallery.appendChild(card);
});
