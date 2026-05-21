<template>
  <section class="hero-section" :class="{ 'is-compact': compact }">
    <div class="hero-container">
      <div class="titles-wrapper">
        <!-- Título de fondo (Outlined) -->
        <h2 class="bg-title-outlined">
          {{ bgTitle }}
        </h2>
        <!-- Título principal (Solid) -->
        <h1 class="main-title">
          {{ mainTitle }}
        </h1>
      </div>

      <!-- Contenido adicional solo en modo no compacto (Instancia 5) -->
      <div v-if="!compact" class="hero-content">
        <div class="content-left">
          <ul class="nav-list">
            <li>proyectos académicos</li>
            <li>colaboraciones</li>
            <li>encargos externos</li>
          </ul>
        </div>
        <div class="content-middle">
          <p>
            Apasionada de solucionar los problemas, facilitar tareas y aumentar la accesibilidad, en base a los recursos, me desenvuelvo eficazmente en áreas de diseño editorial, ilustración, diseño de marca y gráfica impresa.
          </p>
        </div>
        <div class="content-right">
          <p>
            Tengo experiencia haciendo encargos para particulares y temporalmente de diseñadora junior para la papelería de la tienda Paréntesis de Olvido Magia y Té, y de becaria en editorial Marcablanca.press. Recientemente incorporada como diseñadora junior en la agencia Prodigioso Volcán.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  compact: {
    type: Boolean,
    default: false
  },
  bgTitle: {
    type: String,
    default: 'PORTFOLIO'
  },
  mainTitle: {
    type: String,
    default: 'ISABEL FRESNEDA'
  }
})
</script>

<style lang="scss" scoped>
.hero-section {
  background-color: $color-black;
  color: $color-white;
  padding: 80px 0;
  min-height: 500px;
  display: flex;
  align-items: center;

  &.is-compact {
    padding: 60px 0;
    min-height: 300px;
  }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.titles-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}

.bg-title-outlined {
  @include font-sans;
  font-size: clamp(80px, 15vw, 200px);
  color: transparent;
  -webkit-text-stroke: 1px $color-white;
  line-height: 0.8;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -2px;
}

.main-title {
  @include font-sans;
  font-size: clamp(40px, 8vw, 110px);
  color: $color-mustard;
  line-height: 0.8;
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  white-space: nowrap;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr;
  gap: 60px;
  margin-top: 40px;
  @include font-serif;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 25px;
    color: $color-magenta;
    text-transform: lowercase;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}

.content-middle, .content-right {
  p {
    font-size: 18px;
    line-height: 1.4;
    color: $color-white;
    margin: 0;
  }
}
</style>
