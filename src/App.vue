<template>
  <div class="container-fluid p-0">
    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">Profile-ku</router-link>
        <div class="d-flex gap-3">
          <router-link 
            v-for="(link, index) in links" 
            :key="index" 
            :to="link.path" 
            class="text-white text-decoration-none"
          >
            {{ link.text }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Konten Halaman -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: '/home', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/education', text: 'Education' },
        { path: '/skills', text: 'Tools' },
        { path: '/contact', text: 'Contact' }
      ]
    }
  }
}
</script>

<style>
/* Gaya Global */
section {
  padding: 6rem 0;
}

.navbar {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }
  
  .btn-lg {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>