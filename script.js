const videos = [
  {
    src: 'https://drive.google.com/uc?export=download&id=1kRREF2U_eIeD8rSoC5wMK4s3SRg0YvyJ',
    title: 'Video 1',
    description: 'This is the first video uploaded to Google Drive.'
  },
  {
    src: 'https://drive.google.com/uc?export=download&id=1AV_FCwICdDQ85cOuDH48biwr1-31AQD8',
    title: 'Video 2',
    description: 'This is the second video uploaded to Google Drive.'
  },
  {
    src: 'https://drive.google.com/uc?export=download&id=1Nz3no2W_97WlTZzz1M_gxOD2twTxfCTq',
    title: 'Video 3',
    description: 'This is the third video uploaded to Google Drive.'
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
