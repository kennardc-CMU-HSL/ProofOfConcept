const videos = [
  {
    src: 'videos/Cam06.mov',
    title: 'Video 1',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/f35_aperture2.4__scene6__videos/Cam01.mov',
    title: 'Video 2',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/seq_000096_output.mov',
    title: 'Video 3',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam08.mov',
    title: 'Video 4',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/seq_000136_output.mov',
    title: 'Video 5',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam01.mov',
    title: 'Video 6',
    description: 'Original Video (Left) vs Ours (Right)'
  },
  {
    src: 'videos/Cam06_DifferTraj.mov',
    title: 'Video 7',
    description: 'Ours at different camera trajectories'
  },
  {
    src: 'videos/f35_aperture2.4__scene6__videos/grid_output.mov',
    title: 'Video 8',
    description: 'Ours at different camera trajectories'
  },
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
