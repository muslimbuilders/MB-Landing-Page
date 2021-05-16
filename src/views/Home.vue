<template>
  <div>
    <!-- Header -->
    <section>
      <Header />
    </section>

    <!-- Hero Section -->
    <section>
      <div class="hero-section  mb-5">
        <div class="hero-header  text-center">
          <div class="overlay ">
            <div class="container">
              <h1 class="text-white">
                We are a community of Muslim Changemakers who upskill & pioneer
                the world of tech
              </h1>
              <div class="my-5 subhero d-flex justify-content-evenly">
                <div>
                  <button>Get Stared</button>
                </div>
                <div>
                  <button>Explore More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section>
      <WhoWeAre />
    </section>

    <!-- Join NewsLetter -->
    <section>
      <div class="container-fluid newsletter position-relative text-center p-5">
        <h3 class="py-2 text-white">Subscribe to our Newsletter</h3>
        <!-- <span class="icon"><i class=" fas fa-envelope"></i></span> -->
        <input type="email"  id="newsletter" placeholder="Email.." />
        <button>Subscribe <i class="fas fa-arrow-right"></i></button>
      </div>
    </section>

    <section>
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import WhoWeAre from "../components/WhoWeAre.vue";
export default {
  components: { Footer, Header, WhoWeAre },
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
  .subhero {
    margin-top: 70px;
    button {
      background: none;
      border: 1px solid lightgreen;
      border-radius: 10px;
      font-size: 20px;
      padding: 10px 15px;
      outline: none;
      color: white;
      font-weight: 500;
      &:hover {
        background: lightgreen;
        transition: ease-in-out 0.8s;
        color: #000;
      }
    }
  }
}
.newsletter {
  background: url("../assets/images/bubble-animated-background.svg");
  .icon {
    position: absolute;
    top: 7.1rem;
    left: 6rem;
    transform: translate(-50%, -50%);
    color: #000;
  }
  input {
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    // padding-left: 30px;
    width: 80%;
    outline: none;
    border: none;
    border-radius: 10px 0 0 10px;
  }
  button {
    background: rgba(77, 236, 77, 0.5);
    padding: 10px;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 0 10px 10px 0;
  }
}
</style>
