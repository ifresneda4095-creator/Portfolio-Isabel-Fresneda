<template>
  <div class="page-container">
    <Header inverted activeRoute="proyectos" />
    <main class="main-content">
      <Hero 
        compact
        bgTitle="01" 
        mainTitle="GRÁFICA IMPRESA" 
      />
      <Slider @slideChange="handleSlideChange" />
      
      <!-- Bloque de texto descriptivo bajo el slider -->
      <section class="project-description" v-if="currentSlide">
        <div class="description-container">
          <div class="title-col">
            <h2 class="project-title">
              <span class="light">{{ currentSlide.h1 }}</span>
              <span class="magenta">{{ currentSlide.h2 }}</span>
            </h2>
          </div>
          <div class="text-col">
            <ul>
              <li v-for="(item, index) in currentSlide.text" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(null)

const handleSlideChange = (slide) => {
  currentSlide.value = slide
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
}

.main-content {
  padding-top: 120px; // Compensar el header fixed
}

.project-description {
  background-color: $color-white;
  padding: 60px 20px;
}

.description-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.title-col {
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
}

.project-title {
  @include font-sans;
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 0.9;
  margin: 0;

  @media (max-width: 768px) {
    text-align: left;
  }

  .light {
    color: $color-grey;
    font-size: 60px;
  }

  .magenta {
    color: $color-magenta;
    font-size: 24px;
    letter-spacing: 1px;
  }
}

.text-col {
  flex: 2;
  @include font-serif;
  color: $color-black;
  
  ul {
    margin: 0;
    padding-left: 20px;
    
    li {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 12px;
    }
  }
}
</style>
