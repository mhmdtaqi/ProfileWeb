<template>
    <section id="education" class="py-5 min-vh-100 d-flex align-items-center bg-light">
      <div class="container">
        <div class="title-wrapper">
          <h1 class="text-center mb-4 display-2">Education-ku</h1>
        </div>
        <div class="bg-white p-4 rounded shadow">
          <div class="row mb-4">
            <div class="col-md-4">
              <img src="./assets/SD.jpeg" alt="SD" class="img-fluid rounded mb-3">
              <h3 class="h4">SD IT An-namiroh pusat</h3>
              <p class="text-muted">2009 - 2015</p>
            </div>
            <div class="col-md-4">
              <img src="./assets/smp.jpeg" alt="SMP" class="img-fluid rounded mb-3">
              <h3 class="h4">SMP IT Imam An-nawawi</h3>
              <p class="text-muted">2015 - 2018</p>
            </div>
            <div class="col-md-4">
              <img src="./assets/sma.jpeg" alt="SMA" class="img-fluid rounded mb-3">
              <h3 class="h4">SMA/MA Al-irsyad Tengaran</h3>
              <p class="text-muted">2018 - 2022</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="current-education p-3 bg-light rounded">
                <h3 class="h4 text-primary">Universitas Islam Negeri Sultan Syarif Kasim Riau</h3>
                <p class="text-muted mb-0">2023 - Sekarang | Teknik Informatika</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.container {
  margin-top: 120px;
  margin-bottom: 120px;
}

.title-wrapper {
  margin-top: -60px;
  margin-bottom: 30px;
}

.container h1 {
  font-weight: bold;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}

img {
  height: 200px;
  object-fit: cover;
  width: 100%;
}

.current-education {
  border-left: 4px solid #0d6efd;
}
</style> 