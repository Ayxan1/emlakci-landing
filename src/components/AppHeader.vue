<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { siteConfig } from '../config.js'

const { header } = siteConfig
const slides = header.carousel

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % slides.length
}

function goTo(index) {
  current.value = index
}

onMounted(() => {
  timer = setInterval(next, header.carouselInterval)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <header class="header">
    <div class="carousel">
      <div
        v-for="(slide, i) in slides"
        :key="slide.name"
        class="carousel-slide"
        :class="{ active: i === current }"
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
        }"
      >
        <span class="carousel-label">{{ slide.name }}</span>
      </div>

      <div class="carousel-dots">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          :aria-label="slides[i].name"
          @click="goTo(i)"
        />
      </div>
    </div>

    <a
      :href="header.instagram"
      target="_blank"
      rel="noopener noreferrer"
      class="instagram-link"
      aria-label="Instagram"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>

    <a :href="header.logoLink" class="logo-link">
      <img :src="header.logo" :alt="header.logoAlt" class="logo" />
    </a>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--black);
  border-bottom: 2px solid var(--red);
}

.carousel {
  position: relative;
  flex: 1;
  height: 110px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 0;
}

.carousel-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-label {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.carousel-dots {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.dot.active {
  background: var(--white);
  transform: scale(1.3);
}

.instagram-link {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--white);
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.instagram-link:hover {
  color: var(--red);
  background: rgba(255, 255, 255, 0.08);
}

.instagram-link svg {
  width: 26px;
  height: 26px;
}

.logo-link {
  flex-shrink: 0;
  display: block;
}

.logo {
  height: 56px;
  width: auto;
  object-fit: contain;
}

@media (max-width: 480px) {
  .header {
    padding: 8px 10px;
    gap: 8px;
  }

  .carousel {
    height: 90px;
  }

  .carousel-label {
    font-size: 1rem;
  }

  .logo {
    height: 44px;
  }

  .instagram-link {
    width: 34px;
    height: 34px;
  }

  .instagram-link svg {
    width: 22px;
    height: 22px;
  }
}
</style>
