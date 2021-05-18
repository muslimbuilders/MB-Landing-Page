<template>
  <div class="top container-fluid  text-dark">
    <div class="header-wrapper">
      <div class="logo">
        <a href="#">
          <div class="fw-bold text-uppercase">
            <div class=" text-white d-flex ">
              <div class="m-text">M</div>

              <div class="d-flex  part-logo flex-column">
                <div class="space">uslim</div>
                <div>Builders</div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="links" :class="{ 'open': isOpen }">
        <ul>
          <li data-id="home"><router-link to="/">Home</router-link></li>
          <li data-id="about"><router-link to="/about">About</router-link></li>
          <li data-id="team"><router-link to="/team">Team</router-link></li>
          <li data-id="projects"><router-link to="/projects">Projects</router-link></li>
        </ul>
      </div>
      <div class="menu-bar" @click="navOpener" >
        <div class="menu-wrapper">
          <i v-if="!isOpen" class="text-white  fas fa-bars"></i>
          <i v-else class="text-white  fas fa-times"></i>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      pagechecker: "",
      isOpen : false,
    };
  },

  methods: {
    navOpener(){
        this.isOpen = !this.isOpen;
    }
  },
 
  mounted() {
    const setThis = this;
    // const menuBar = document.querySelector(".menu-bar ");
    // const menuIcon = document.querySelector(".menu-bar i");
    // const menuLink = document.querySelector(".links");
    // menuBar.addEventListener("click", () => {
    //   menuLink.classList.toggle("open");
    //   menuIcon.classList.toggle("open");
    // });

    const navHeader = document.querySelector(".top");
 
    window.onscroll = () => {
    document.documentElement.scrollTop > 100 ?
        navHeader.classList.add("header-bg") :
        navHeader.classList.remove("header-bg");
      
    };




    setTimeout(() => {
      const paths = document.querySelectorAll(".links li");

     paths.forEach((path) => {
        if (setThis.$route.path.trim() === `/${path.dataset.id}`) {
          path.classList.add("active");
        } else {
          path.classList.remove("active");
        }
      });
    }, 500);
  },

 
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Ubuntu", sans-serif;
}
.top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  &.header-bg{
    background: rgba($color: #198754, $alpha: 0.7);
    transition: all .6s ease-in-out;
  }
}
.header-wrapper {
  padding: 0 15px 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    z-index: 100;
  }
  li a {
    font-size: 20px;
    color: #fff;
  }
  ul {
    margin: 0;
    li {
      display: inline-block;
      padding: 5px 15px !important;
      margin: 0 2px;
      &:hover {
        background: var(--Ter);
        border-radius: 3px;
      }
    }
    .active {
      border: 1px solid var(--Pri);
      border-radius: 3px;
    }
  }
  .menu-bar {
    display: none;
    cursor: pointer;
    z-index: 100;
    .menu-wrapper {
      border-radius: 50px;
      border: 2px solid #fff;
      padding: 10px;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .m-text {
    font-size: 50px;
    margin: 0;
  }
  .space {
    letter-spacing: 6.5px;
  }
  .part-logo {
    margin-top: 15px;
  }
}

// Mobile Navigation Menu
@media screen and (max-width: 768px) {
  .logo {
    font-size: 12px;
    .m-text {
      font-size: 35px;
      margin: 0;
    }
    .part-logo {
      margin-top: 8px;
    }
    .space {
      letter-spacing: 5px;
    }
  }
  .menu-bar {
    display: block !important;
  }
  .links {
    height: 100vh;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right : 0;
    background: rgba($color: #198754, $alpha: 0.9);
    clip-path: circle(10px at 90% -12%);
    -webkit-clip-path: circle(10px at 90% -12%);
    transition: all 1s ease-out;

    &.open {
      clip-path: circle(1000px at 90% -12%);
      -webkit-clip-path: circle(1000px at 90% -12%);
    }

    li {
      margin: 70px 70px !important;
      display: flex !important;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      font-size: 40px;

      &.active {
        border: none;
      }
    }
  }

}
</style>
