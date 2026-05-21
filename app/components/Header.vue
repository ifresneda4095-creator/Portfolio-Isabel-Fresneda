<template>
  <header class="main-header" :class="{ 'is-inverted': inverted }">
    <div class="header-container">
      <div class="inner-bar">
        <nav class="nav-menu">
          <NuxtLink 
            to="/" 
            class="nav-item" 
            :class="{ 'is-active': activeRoute === 'home' }"
          >
            home
          </NuxtLink>
          <div class="dropdown-container">
            <NuxtLink 
              to="/proyectos" 
              class="nav-item" 
              :class="{ 'is-active': activeRoute === 'proyectos' }"
            >
              proyectos
            </NuxtLink>
            <div class="dropdown-menu">
              <NuxtLink to="/proyectos" class="dropdown-item">impresa</NuxtLink>
              <span class="dropdown-item disabled">identidad</span>
              <span class="dropdown-item disabled">audiovisual</span>
              <span class="dropdown-item disabled">experimental</span>
            </div>
          </div>
          <button 
            class="nav-item nav-button" 
            @click="scrollToFooter"
          >
            contacto
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  inverted: {
    type: Boolean,
    default: false
  },
  activeRoute: {
    type: String,
    default: 'home'
  }
})

const scrollToFooter = () => {
  const footer = document.querySelector('.contact-footer')
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed; // Fijo arriba
  top: 0;
  left: 0;
  z-index: 100; // Por encima de todo
  width: 100%;
  background-color: $color-black;
  padding: 40px 0;
  transition: background-color 0.3s ease;

  &.is-inverted {
    background-color: $color-grey;
    
    .inner-bar {
      background-color: $color-black;
      color: $color-white;
    }

    .nav-item {
      color: $color-white;
      
      &.is-active {
        background-color: $color-magenta;
        color: $color-white;
      }
    }
  }
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.inner-bar {
  background-color: $color-grey;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 4px;
}

.nav-menu {
  display: flex;
  height: 100%;
  align-items: center;
}

.nav-item {
  @include font-sans;
  height: calc(100% - 8px); // Margen interno
  display: flex;
  align-items: center;
  padding: 0 20px;
  text-decoration: none;
  color: $color-black;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;

  &.is-active {
    background-color: $color-magenta;
    color: $color-white;
  }

  &:hover:not(.is-active) {
    opacity: 0.7;
  }
}

.dropdown-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: $color-grey;
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 200;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: $color-black;
  text-decoration: none;
  font-size: 16px;
  font-family: $font-serif;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;

  &:hover:not(.disabled) {
    background-color: rgba($color-magenta, 0.1);
    border-left-color: $color-magenta;
  }

  &.disabled {
    color: rgba($color-black, 0.4);
    cursor: not-allowed;
  }
}
</style>
