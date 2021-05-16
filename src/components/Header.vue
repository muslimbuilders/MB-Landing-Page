<template>
  <div class="top container-fluid  text-dark">
    <div class="header-wrapper">
      <div class="logo">
        <div class="fw-bold text-uppercase">
          <div class=" text-white d-flex ">
            <div class="m-text">M</div>

            <div class="d-flex pt-3 flex-column">
              <div class="space">uslim</div>
              <div>Builders</div>
            </div>
          </div>
        </div>
      </div>
      <div class="links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
      <div class="menu-bar">
        <div class="menu-wrapper">
          <i class="text-white  fas fa-bars"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
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
  font-family: "Ubuntu", sans-serif;
}
.top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(40, 148, 45, 0.2);
  z-index: 100;
}
.header-wrapper {
  padding: 0 10px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 li a {
    font-size: 20px;
    color: #fff;
    :hover {
      color: black;
    }
  }
  ul {
    margin: 0;
    li {
      display: inline-block;
      border-left: 1px solid #fff;
      padding: 0 15px !important;
      &:nth-of-type(1) {
        border-left: none !important;
      }
    }
  }
  .menu-bar {
    .menu-wrapper {
      border-radius: 50px;
      border: 2px solid #fff;
      padding: 10px;
      height: 40px;
      width: 40px;
      display: grid;
    }
    display: none;
  }
  .m-text {
    font-size: 50px;
    margin: 0;
  }
  .space {
    letter-spacing: 6px;
  }
}
</style>
