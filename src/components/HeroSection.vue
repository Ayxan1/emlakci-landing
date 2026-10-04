<script setup>
const phone = '+994 55 289 44 44'
const whatsappUrl = 'https://wa.me/994552894444'
</script>

<template>
  <section class="hero">
    <div class="hero-banner">
      <div class="banner-inner">
        <div class="banner-text">
          <span class="banner-badge">Emlak xidməti</span>
          <p class="banner-question">
            Əmlakınızın satışı və ya icarəsi yoxsa?
          </p>
          <p class="banner-sub">Bizə həvalə edin — peşəkar komandamız sizin üçün buradadır.</p>
        </div>

        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-btn"
        >
          <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="whatsapp-label">
            <span class="whatsapp-action">WhatsApp ilə yazın</span>
            <span class="whatsapp-number">{{ phone }}</span>
          </span>
        </a>
      </div>
    </div>

    <div class="hero-body">
      <img
        src="/assets/hero-bg.png"
        alt="Emlakci.az"
        class="hero-img"
      />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
}

.hero-banner {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a1018 100%);
  color: var(--white);
  padding: 20px 20px;
  border-bottom: 1px solid rgba(196, 30, 58, 0.4);
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(196, 30, 58, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

.hero-banner::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--red), transparent);
}

.banner-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.banner-text {
  flex: 1;
  min-width: 0;
}

.banner-badge {
  display: inline-block;
  margin-bottom: 8px;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red);
  background: rgba(196, 30, 58, 0.15);
  border: 1px solid rgba(196, 30, 58, 0.35);
  border-radius: 50px;
}

.banner-question {
  margin: 0 0 4px;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 600;
  line-height: 1.35;
  color: var(--white);
}

.banner-sub {
  margin: 0;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
}

.whatsapp-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: var(--white);
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}

.whatsapp-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.45);
}

.whatsapp-btn:active {
  transform: translateY(0);
}

.whatsapp-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.whatsapp-label {
  display: flex;
  flex-direction: column;
  gap: 1px;
  text-align: left;
}

.whatsapp-action {
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.9;
}

.whatsapp-number {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .hero-banner {
    padding: 16px;
  }

  .banner-inner {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 16px;
  }

  .banner-text {
    text-align: center;
  }

  .whatsapp-btn {
    justify-content: center;
    padding: 14px 20px;
  }

  .whatsapp-label {
    text-align: left;
  }
}

.hero-body {
  position: relative;
  width: 100%;
  line-height: 0;
}

.hero-img {
  width: 100%;
  height: auto;
  display: block;
}

</style>
