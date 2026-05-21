<template>
  <section class="grid-section">
    <!-- Fila 1: IMPRESA -->
    <div class="grid-row">
      <div 
        v-for="i in 3" 
        :key="`impresa-${i}`"
        class="grid-item"
        :class="{ 'is-selected': selectedInRow1 === i }"
        @mouseenter="handleHover(1, i)"
      >
        <div class="item-inner">
          <img :src="`/img/grid_3x4/row1_impresa/img${i}.png`" alt="Impresa" />
          <div class="overlay">
            <h3 v-if="selectedInRow1 === i" class="title">IMPRESA</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Fila 2: IDENTIDAD -->
    <div class="grid-row">
      <div 
        v-for="i in 3" 
        :key="`identidad-${i}`"
        class="grid-item"
        :class="{ 'is-selected': selectedInRow2 === i }"
        @mouseenter="handleHover(2, i)"
      >
        <div class="item-inner">
          <img :src="`/img/grid_3x4/row2_identidad/img${i}.png`" alt="Identidad" />
          <div class="overlay">
            <h3 v-if="selectedInRow2 === i" class="title">IDENTIDAD</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Fila 3: AUDIOVISUAL  -->
    <div class="grid-row">
      <div 
        v-for="i in 3" 
        :key="`audiovisual-${i}`"
        class="grid-item"
        :class="{ 'is-selected': selectedInRow3 === i }"
        @mouseenter="handleHover(3, i)"
      >
        <div class="item-inner">
          <img :src="`/img/grid_3x4/row3_audiovisual/img${i}.jpg`" alt="Audiovisual" />
          <div class="overlay">
            <h3 v-if="selectedInRow3 === i" class="title">AUDIOVISUAL</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Fila 4: EXPERIMENTAL -->
    <div class="grid-row">
      <div 
        v-for="i in 3" 
        :key="`experimental-${i}`"
        class="grid-item"
        :class="{ 'is-selected': selectedInRow4 === i }"
        @mouseenter="handleHover(4, i)"
      >
        <div class="item-inner">
          <img :src="`/img/grid_3x4/row4_experimental/img${i}.jpg`" alt="Experimental" />
          <div class="overlay">
            <h3 v-if="selectedInRow4 === i" class="title">EXPERIMENTAL</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedInRow1 = ref(1)
const selectedInRow2 = ref(2)
const selectedInRow3 = ref(3)
const selectedInRow4 = ref(2)

const handleHover = (row, index) => {
  if (row === 1) selectedInRow1.value = index
  if (row === 2) selectedInRow2.value = index
  if (row === 3) selectedInRow3.value = index
  if (row === 4) selectedInRow4.value = index
}
</script>

<style lang="scss" scoped>
.grid-section {
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: $color-white;
}

.grid-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  height: 250px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
}

.grid-item {
  flex: 1;
  height: 100%;
  transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  overflow: hidden;

  &.is-selected {
    flex: 3;
  }

  @media (max-width: 768px) {
    flex: none !important;
    width: 100%;
    height: 200px;
  }
}

.item-inner {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color-black, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  pointer-events: none;
}

.grid-item:hover {
  .overlay {
    background-color: rgba($color-white, 0.85);
  }
  
  .title {
    color: $color-magenta !important;
  }
}

.title {
  @include font-sans;
  color: $color-white;
  font-size: 32px;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
}
</style>