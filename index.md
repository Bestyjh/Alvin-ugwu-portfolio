---
layout: default
title: Home
permalink: /
---

<!-- Hero Section -->
<section class="hero">
  <div class="hero-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>

  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title">
        <span class="title-line">Alvin Uchenna</span>
        <span class="title-line accent-text">Ugwu</span>
      </h1>

      <div class="hero-subtitle">
        <p class="subtitle-main">PhD Candidate | Curriculum Studies and Instructional Design</p>
        <p class="subtitle-location">Western University, Canada</p>
      </div>

      <div class="research-tags">
        <span class="tag">Education for Sustainability</span>
        <span class="tag">Curriculum & Pedagogy</span>
        <span class="tag">Experiential Learning</span>
        <span class="tag">Qualitative Research</span>
      </div>

      <div class="hero-actions">
        <a href="/contact" class="btn btn-primary">Get in Touch</a>
        <a href="#" class="btn btn-secondary" id="downloadCV"
           onclick="event.preventDefault(); const link = document.createElement('a'); link.href = 'documents/alvin-ugwu-cv.pdf'; link.download = 'Alvin_Ugwu_CV.pdf'; document.body.appendChild(link); link.click(); document.body.removeChild(link); return false;">
           Download CV
        </a>
      </div>
    </div>

    <div class="hero-image">
      <img src="images/profile.jpg" alt="Alvin Uchenna Ugwu" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
    </div>
  </div>
</section>

<!-- Quick Bio Section -->
<section class="quick-bio">
  <div class="container">
    <div class="bio-grid">
      <div class="bio-text">
        <h2 class="section-title">Advancing Education for a Sustainable Future</h2>
        <p class="lead-text">
          As a dedicated educator and researcher, I'm passionate about advancing Education for Sustainability 
          through innovative curriculum design and experiential learning approaches that create transformative 
          learning experiences.
        </p>
        <a href="/about" class="text-link">Read full bio →</a>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">4+</div>
          <div class="stat-label">Years PhD Research</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">4</div>
          <div class="stat-label">Degrees Earned</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">ESD</div>
          <div class="stat-label">Research Focus</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Research Highlights -->
<section class="research-preview">
  <div class="container">
    <h2 class="section-title">Current Research</h2>

    <div class="research-card">
      <div class="research-meta">
        <span class="research-type">PhD Dissertation</span>
        <span class="research-status">Ongoing - Year 4</span>
      </div>

      <h3 class="research-title">
        Implementing Education for Sustainable Development in Ontario K–8 School Classrooms
      </h3>

      <p class="research-description">
        Exploring how Education for Sustainable Development (ESD) is integrated into elementary school curricula, 
        examining pedagogical approaches, teacher perspectives, and student learning outcomes in the context of 
        Ontario's educational framework.
      </p>

      <div class="research-footer">
        <span class="supervisor">Supervisor: Dr. Isha DeCoito</span>
        <a href="/research" class="text-link">Learn more →</a>
      </div>
    </div>
  </div>
</section>
