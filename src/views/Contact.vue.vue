<template>
  <div>
    <Header />
   <section>
      <div class="hero-section  mb-5">
        <div class="hero-header  text-center">
          <div class="overlay ">
            <div class="container">
              <h1 class="text-white">
                We are a community of Muslim Changemakers who upskill & pioneer
                the world of tech
              </h1>
              
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="container">
      <div style="margin: 100px 0;">
        <div class="mb-3 d-flex align-items-center justify-content-center">
          <div class="fw-bold title-footer text-uppercase">
            Contact Us
          </div>
        </div>
        <div class="row">
          <div class='col-md-4'>
            <span><i class="fas fa-envelope pe-2"></i></span>
            supports@muslimbuilders.org
          </div>
          <div class='col-md-4'>
            <span><i class="fas fa-phone-alt pe-2"></i></span> +234 123-456-789
          </div>
          <div class='col-md-4'>
            <span><i class="fas fa-map-marker-alt pe-2"></i></span> Nigeria
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: { Footer, Header },
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Ubuntu", sans-serif !important;
}
.hero-section {
  position: relative;
  background: url("../assets/images/Fade-In-Background.svg");
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    width: 100wh;
    font-size: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  // padding: 100px 0;
  .hero-header {
    h1 {
      font-size: 50px;
      color: #000;
      font-weight: 700;
    }
  }

}

</style>
