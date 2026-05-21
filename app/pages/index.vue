<template>
  <div class="page-container">
    <Header activeRoute="home" />
    <main class="main-content">
      <Hero 
        bgTitle="PORTFOLIO" 
        mainTitle="ISABEL FRESNEDA" 
      />
      <Grid />
    </main>
    <Footer />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
}

.main-content {
  padding-top: 120px; // Compensar el header fixed (40px padding-top + 40px bar + 40px padding-bottom)
}
</style>
