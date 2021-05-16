<template>
  <div class="container-fluid bg-success text-white px-3 pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="title-footer text-uppercase text-left">
            Contact Us
          </div>
          <div class="d-flex flex-column">
            <div>
              <span><i class="fas fa-envelope pe-2"></i></span> 
              supports@muslimbuilders.org
            </div>
            <div>
              <span><i class="fas fa-phone-alt pe-2"></i></span>  +234 123-456-789
            </div>
            <div>
              <span><i class="fas fa-map-marker-alt pe-2"></i></span>  Nigeria
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="text-uppercase title-footer">
            Quick Links
          </div>
           <ul>
          <li data-id="home"><router-link to="/home">Home</router-link></li>
          <li data-id="about"><router-link to="/about">About</router-link></li>
          <li data-id="team"><router-link to="/team">Team</router-link></li>
          <li data-id="projects"><router-link to="/projects">Projects</router-link></li>
        </ul>
        </div>
        <div class="col-md-4">
          <div class="text-uppercase title-footer">
            Social Handles
          </div>
          <div class="d-flex flex-column">
            <div>
              <span><i class="fab fa-facebook pe-2"></i></span>  MuslimBuilders
            </div>
            <div>
              <span><i class="fab fa-twitter pe-2"></i></span>  MuslimBuilders
            </div>
            <div>
              <span><i class="fab fa-linkedin pe-2"></i></span> MuslimBuilders
            </div>
          </div>
        </div>
      </div>
      <div class="text-center border-top py-4">
        &copy; 2021 MuslimBuilders. All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  li {
    margin: 10px 0;
  }
}
.d-flex {
  div {
    margin: 10px 0;
  }
}
</style>
