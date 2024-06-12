<template>
    <div class="bg-primary">
        <Header></Header>
        <router-view class="w-11/12 h-auto mx-auto my-8 bg-primary-content p-4 rounded-sm"></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
</script>
