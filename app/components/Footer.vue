<template>
  <footer class="contact-footer">
    <div class="scrolling-background">
      <div class="text-row">
        <span v-for="n in 10" :key="n">CONTACT ME</span>
      </div>
      <div class="text-row reverse">
        <span v-for="n in 10" :key="n">CONTACT ME</span>
      </div>
      <div class="text-row">
        <span v-for="n in 10" :key="n">CONTACT ME</span>
      </div>
    </div>

    <div class="content-overlay">
      <h3 class="open-to-work">i'm open to work!</h3>
      
      <div class="social-icons">
        <a href="#" class="icon phone"><img src="https://api.iconify.design/solar:phone-bold.svg?color=%23ffffff" alt="Phone"></a>
        <a href="#" class="icon instagram"><img src="https://api.iconify.design/mdi:instagram.svg?color=%23ffffff" alt="Instagram"></a>
        <a href="#" class="icon linkedin"><img src="https://api.iconify.design/mdi:linkedin.svg?color=%23ffffff" alt="LinkedIn"></a>
        <a href="#" class="icon mail"><img src="https://api.iconify.design/material-symbols:mail-rounded.svg?color=%23ffffff" alt="Mail"></a>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="copyright">
        <span>©2025</span>
        <span class="name">isabel fresneda</span>
        <span>all rights reserved</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.contact-footer {
  position: relative;
  background-color: $color-grey;
  padding-top: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scrolling-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.15;
  pointer-events: none;
}

.text-row {
  white-space: nowrap;
  font-size: 100px;
  @include font-sans;
  color: $color-white;
  line-height: 0.9;
  margin: 5px 0;
  display: flex;
  
  span {
    margin-right: 60px;
  }
}

.content-overlay {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 60px 0;
}

.open-to-work {
  color: $color-magenta;
  font-size: 32px;
  @include font-sans;
  text-transform: lowercase;
  margin-bottom: 32px;
}

.social-icons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;

  .icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: $color-magenta;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    img {
      width: 24px;
      height: 24px;
    }

    &:hover {
      transform: scale(1.15);
      background-color: $color-mustard;
    }
  }
}

.bottom-bar {
  width: 100%;
  background-color: $color-mustard;
  padding: 15px 0;
  margin-top: auto;
}

.copyright {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: $color-white;
  font-size: 16px;
  @include font-serif;

  .name {
    @include font-sans;
    font-size: 26px;
    text-transform: lowercase;
  }
}

@keyframes scrollLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.text-row {
  animation: scrollLeft 40s linear infinite;
  &.reverse {
    animation-direction: reverse;
  }
}
</style>
