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
                Feel free to Meet The MuslimBuilder's Team
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Team -->

    <section class="py-5">
      <div class="title mb-5 fw-bold fs-3 text-center">
        The Team
      </div>
      <div class="container profile">
        <!-- Solintin Profile -->
        <div class="row  border-bottom py-5">
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-around">
              <div class="d-flex flex-column justify-content-evenly">
                <span><i class="fa-2x fab fa-github"></i> </span>

                <span class="my-5">
                  <i class="fa-2x fab fa-linkedin"></i>
                </span>

                <span><i class="fa-2x fab fa-twitter"></i> </span>
              </div>
              <div class="team-img">
                <img src="../assets/images/Team-member.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-3 info my-auto">
            <div>
              <p class="name">Alley Soliu</p>
              <p class="role fw-bold fs-5 ">Frontend Web Developer</p>
              <p class="about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi harum exercitationem dolor impedit autem laudantium
                explicabo labore ut sunt alias aut obcaecati, beatae
                perferendis! Adipisci laboriosam blanditiis iure quidem eveniet.
              </p>
            </div>
          </div>
        </div>
        <!--E Solintin Profile -->

        <!-- Yusadolat Profile -->
        <div class="row border-top border-bottom py-5">
          <div class="col-md-6 ml-3 reverse info my-auto">
            <p class="name">Yusuf Adeyemo</p>
            <p class="role fw-bold fs-5 ">Backend Web Developer</p>
            <p class="about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi harum exercitationem dolor impedit autem laudantium
              explicabo labore ut sunt alias aut obcaecati, beatae perferendis!
              Adipisci laboriosam blanditiis iure quidem eveniet.
            </p>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-around">
              <div class="team-img">
                <img src="../assets/images/Team-member.png" alt="" />
              </div>
              <div class="d-flex flex-column justify-content-evenly">
                <span><i class="fa-2x fab fa-github"></i> </span>

                <span class="my-5">
                  <i class="fa-2x fab fa-linkedin"></i>
                </span>

                <span><i class="fa-2x fab fa-twitter"></i> </span>
              </div>
            </div>
          </div>
        </div>
        <!-- E Yusadolat Profile -->

        <!-- Mustaphic Profile -->
        <div class="row border-top border-bottom py-5">
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-around">
              <div class="d-flex flex-column justify-content-evenly">
                <span><i class="fa-2x fab fa-github"></i> </span>

                <span class="my-5">
                  <i class="fa-2x fab fa-linkedin"></i>
                </span>

                <span><i class="fa-2x fab fa-twitter"></i> </span>
              </div>
              <div class="team-img">
                <img src="../assets/images/Team-member.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6 ml-3 info my-auto">
            <p class="name">AbdulRazaq Mustapha</p>
            <p class="role fw-bold fs-5 ">Frontend Web Developer</p>
            <p class="about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi harum exercitationem dolor impedit autem laudantium
              explicabo labore ut sunt alias aut obcaecati, beatae perferendis!
              Adipisci laboriosam blanditiis iure quidem eveniet.
            </p>
          </div>
        </div>
        <!--E Mustaphic Profile -->

        <!-- AbdQaadr Profile -->
        <div class="row border-top  py-5">
          <div class="col-md-6 ml-3 reverse info my-auto">
            <p class="name">Abdullateef AbdQaadr</p>
            <p class="role fw-bold fs-5 ">Frontend Web Developer</p>
            <p class="about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi harum exercitationem dolor impedit autem laudantium
              explicabo labore ut sunt alias aut obcaecati, beatae perferendis!
              Adipisci laboriosam blanditiis iure quidem eveniet.
            </p>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center justify-content-around">
              <div class="team-img">
                <img src="../assets/images/Team-member.png" alt="" />
              </div>
              <div class="d-flex flex-column justify-content-evenly">
                <span><i class="fa-2x fab fa-github"></i> </span>

                <span class="my-5">
                  <i class="fa-2x fab fa-linkedin"></i>
                </span>

                <span><i class="fa-2x fab fa-twitter"></i> </span>
              </div>
            </div>
          </div>
        </div>
        <!-- E AbdQaadr Profile -->
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
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Ubuntu", sans-serif !important;
}
.hero-section {
  position: relative;
  background: url("../assets/images/Team-meeting.jpg");
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);
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

.team-img {
  img {
    height: 100%;
    border-radius: 50%;
  }
}

.name {
  color: var(--Pri);
  font-size: 30px;
  font-weight: 500;
}

// Mobile Navigation Menu
@media screen and (max-width: 768px) {
  .team-img {
    img {
      height: 280px !important;
    }
  }

  .reverse {
    order: 2;
  }
}
</style>
