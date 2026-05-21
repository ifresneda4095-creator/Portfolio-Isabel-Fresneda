<template>
  <section class="slider-section">
    <div class="slider-wrapper">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
            <div class="slide-card">
              <img :src="`/img/slider/slide_0${index + 1}.png`" :alt="slide.h1" />
            </div>
          </div>
        </div>

        <!-- Botones de navegación -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Swiper from 'swiper'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

const emit = defineEmits(['slideChange'])

const slides = [
  {
    h1: 'FANZINE',
    h2: 'graffiti fanzine',
    text: [
      'El proyecto "Graffiti" es un trabajo editorial y una exploración del arte urbano. Es palpable el concepto de arte urbano entendido como arte callejero y que aúna amistad e insurrección.',
      'A través de un concepto original, tiene como fin la exposición de las técnicas gráficas de impresión digital como tramados, semitonos, separación de canales CMYK y juegos de umbral, entre otros.'
    ]
  },
  {
    h1: 'LIBRO ARTE',
    h2: 'diseño de libro ilustrado',
    text: [
      "\u2018El poema de Bhowan\u2019 es un libro de arte ilustrado que, basado en versos de una tribu tibetana, diseña su estructura y gráfica para comunicar el poema.",
      "El resultado final reflexiona sobre los procesos vitales nacer, vivir y morirse mediante formas y códigos cromáticos; a la par que se recoge a modo de atrapasueños en relación el texto."
    ]
  },
  {
    h1: 'PUBLICACIÓN',
    h2: 'diseño de libro ilustrado',
    text: [
      'El paso por el sello editorial de Marcablanca da lugar a la colaboración en un producto editorial que se realiza como encargo particular y abarca el diseño y la creación de artes finales de una sección de lo que acaba siendo el primer dossier de Marcablanca. Recoge el histórico del sello en formato físico.',
      'Trabajando con Adobe Indesign, se desarrollan y aplican estilos, retículas y espaciados con especial énfasis en la interlínea e interletrado, partiendo de una base estética redefinida acorde a nuevas prioridades comunicativas y manteniendo la identidad visual que se quería respetar. Por último, se prepara y envía a imprenta.'
    ]
  },
  {
    h1: 'CARCASA',
    h2: 'funda y stickers',
    text: [
      'Proyecto para encargo de la empresa de fundas de móvil La Casa de las Carcasas (LCC), consta de un conjunto de ilustraciones para carcasa y para pegatinas.',
      'La marca exigía diseños para un target amplio en edad y género, por lo que el tema escogido fue "dance & friends". Así, los diseños de carácter figurativo y líneas suaves, persiguen cierta pureza y sencillez expresiva inspirándose en ilustraciones de Miguel Ángel Camprubi y María Ramos.'
    ]
  },
  {
    h1: 'PACKAGING',
    h2: 'rediseño',
    text: [
      'El ejercicio consiste en diseñar el packaging para una nueva línea de snacks bajos en calorías de Matutano. El objetivo, crear un diseño de producto que no siga su identidad gráfica habitual, enfocándose en integrar gráfica y producto.',
      'La propuesta final es una gráfica juguetona, de acabados sobrios y con un formato que conecta con la idealización del desayuno y la dieta sana.'
    ]
  }
]

let swiperInstance = null

onMounted(() => {
  swiperInstance = new Swiper('.swiper', {
    modules: [EffectCoverflow, Navigation],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 0,
    loop: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 130,
      depth: 200,
      modifier: 1,
      slideShadows: false,
      scale: 0.85,
    },
    on: {
      init: (s) => {
        emit('slideChange', slides[s.realIndex])
      },
      slideChange: (s) => {
        emit('slideChange', slides[s.realIndex])
      }
    }
  })
})

onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
  }
})
</script>

<style lang="scss" scoped>
.slider-section {
  background-color: $color-grey;
  padding: 100px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.slider-wrapper {
  width: 100%;
  position: relative;
}

.swiper {
  width: 100%;
  overflow: visible !important;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;

  @media (min-width: 640px) {
    width: 350px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
}

.slide-card {
  width: 100%;
  background-color: $color-white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.swiper-slide-active {
  z-index: 10;
  .slide-card {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  }
}

/* Botones de navegación */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: $color-black;
  background-color: $color-white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease, color 0.2s ease;

  &::after {
    font-size: 18px;
    font-weight: bold;
  }

  &:hover {
    background-color: $color-black;
    color: $color-white;
  }
}
</style>
