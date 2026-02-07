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
  card.innerHTML = `
    <video controls>
      <source src="${video.src}" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <h3>${video.title}</h3>
    <p>${video.description}</p>
  `;
  gallery.appendChild(card);
});
