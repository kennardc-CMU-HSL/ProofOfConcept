---
layout: default
title: Home
---

# Welcome to My Video Gallery

Here you can find all my uploaded videos with short descriptions.  
Enjoy browsing!

<div id="video-gallery">
  {% for video in site.static_files %}
    {% if video.path contains "videos/" and video.extname == ".mp4" %}
    <div class="video-card">
      <video controls>
        <source src="{{ video.path | relative_url }}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <h3>{{ video.name | replace: ".mp4", "" }}</h3>
      <p>Add your description here for {{ video.name | replace: ".mp4", "" }}</p>
    </div>
    {% endif %}
  {% endfor %}
</div>
