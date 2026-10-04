<script setup>
import { siteConfig } from '../config.js'

const { footer } = siteConfig
</script>

<template>
  <footer class="footer">
    <div
      class="footer-bg"
      :style="{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${footer.backgroundImage})`,
      }"
    />

    <div class="footer-content">
      <p class="blink-text">{{ footer.blinkText }}</p>
      <h2 class="footer-title">{{ footer.title }}</h2>
      <p class="footer-sub">{{ footer.subtitle }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  padding: 48px 24px 56px;
  text-align: center;
}

.footer-bg {
  position: absolute;
  inset: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.blink-text {
  display: inline-block;
  margin: 0 0 20px;
  padding: 10px 28px;
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 700;
  color: var(--white);
  border: 2px solid var(--red);
  border-radius: 50px;
  background: rgba(196, 30, 58, 0.25);
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 12px rgba(196, 30, 58, 0.6);
  }
  50% {
    opacity: 0.35;
    box-shadow: 0 0 4px rgba(196, 30, 58, 0.2);
  }
}

.footer-title {
  margin: 0 0 8px;
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 600;
  color: var(--white);
  line-height: 1.3;
}

.footer-sub {
  margin: 0;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
}

@media (max-width: 480px) {
  .footer {
    padding: 36px 16px 44px;
  }
}
</style>
