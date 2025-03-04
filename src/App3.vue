<template>
    <section id="contact" class="bg-light py-5 min-vh-100 d-flex align-items-center">
      <div class="container">
        <h1 class="text-center mb-5 display-2">Contact to ku</h1>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <input 
                  type="text" 
                  class="form-control form-control-lg" 
                  placeholder="Name"
                  v-model="form.name"
                  required
                >
              </div>
              <div class="mb-3">
                <input 
                  type="email" 
                  class="form-control form-control-lg" 
                  placeholder="Email"
                  v-model="form.email"
                  required
                >
              </div>
              <div class="mb-3">
                <textarea 
                  class="form-control form-control-lg" 
                  rows="5" 
                  placeholder="Message"
                  v-model="form.message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form)
      alert('Terima kasih atas pesan Anda!')
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 120px;
  margin-bottom: 120px;
}

.container h1 {
  font-weight: bold;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>