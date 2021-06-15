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
                Feel Free to Learn and know more about Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Are -->

    <section class=" container ">
      <div class="about">
        <div class=" fw-bold fs-3 title text-center">
          Vision
        </div>
        <div class="content my-5">
          <p>
            Lorem ipsum dolor sit ametconsectetur adipisicing elit. Praesentium
            aliquid harum ipsum voluptatum eius, similique expedita, quidem
            eveniet at et, incidunt dolores. Dolorum, iure commodi. Illum ea
            sapiente velit saepe? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium aliquid harum ipsum voluptatum eius,
            similique expedita, quidem eveniet at et, incidunt dolores. Dolorum,
            iure commodi. Illum ea sapiente velit saepe?
          </p>
        </div>
        <div class=" fw-bold fs-3 title text-center">
          Mission
        </div>
        <div class="content my-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            aliquid harum ipsum voluptatum eius, similique expedita, quidem
            eveniet at et, incidunt dolores. Dolorum, iure commodi. Illum ea
            sapiente velit saepe? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium aliquid harum ipsum voluptatum eius,
            similique expedita, quidem eveniet at et, incidunt dolores. Dolorum,
            iure commodi. Illum ea sapiente velit saepe?
          </p>
        </div>
        <div class=" fw-bold fs-3 title text-center">
          Core-Values
        </div>
        <div class="content my-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            aliquid harum ipsum voluptatum eius, similique expedita, quidem
            eveniet at et, incidunt dolores. Dolorum, iure commodi. Illum ea
            sapiente velit saepe? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium aliquid harum ipsum voluptatum eius,
            similique expedita, quidem eveniet at et, incidunt dolores. Dolorum,
            iure commodi. Illum ea sapiente velit saepe?
          </p>
        </div>
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
export default {
  components: { Footer, Header },
  metaInfo() {
    return {
      title: "About | MuslimBuilders",
      meta: [
        {
          name: "description",
          content:
            "We are a community of Muslim Changemakers who upskill & pioneer the world of tech",
        },
        {
          property: "og:title",
          content: "About | MuslimBuilders",
        },
        { property: "og:site_name", content: "MuslimBuilders" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 60%;
  margin: 0 auto;
}
.hero-section {
  position: relative;
  background: url("../assets/images/aboutUs.png");
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

// Mobile Navigation Menu
@media screen and (max-width: 560px) {
  .about {
    margin: 0;
    width: 100%;
  }
}
</style>
