const videos = [
  {
    src: 'https://drive.google.com/file/d/1kRREF2U_eIeD8rSoC5wMK4s3SRg0YvyJ/preview',
    title: 'Video 1',
    description: 'This is the first video uploaded to Google Drive.'
  },
  {
    src: 'https://drive.google.com/file/d/1AV_FCwICdDQ85cOuDH48biwr1-31AQD8/preview',
    title: 'Video 2',
    description: 'This is the second video uploaded to Google Drive.'
  },
  {
    src: 'https://drive.google.com/file/d/1Nz3no2W_97WlTZzz1M_gxOD2twTxfCTq/preview',
    title: 'Video 3',
    description: 'This is the third video uploaded to Google Drive.'
  }
];

const gallery = document.getElementById('video-gallery');

videos.forEach(video => {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `
    <iframe 
      src="${video.src}" 
      width="100%" 
      height="360" 
      allow="autoplay" 
      allowfullscreen 
      frameborder="0">
    </iframe>
    <h3>${video.title}</h3>
    <p>${video.description}</p>
  `;
  gallery.appendChild(card);
});
