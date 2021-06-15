<template>
  <div class="container">
    <div style="margin: 100px 0;">
      <div class="row">
        <div class="col-md-6 mb-md-0 mb-5  d-flex flex-column ">
          <span class="fw-bold sub-title">Who we are</span>

          <span class="my-5 fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            ipsam quos? Qui officia rerum et dolorem laborum placeat perferendis
            at id, impedit sint ipsam nulla quasi eum? Id, dolorem doloremque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            ipsam quos? Qui officia rerum et dolorem laborum placeat perferendis
            at id, impedit sint
          </span>

          <span class="fw-bold">
            <button>Read More About Us</button>
          </span>
        </div>
        <div class="col-md-6">
          <div class="row-image">
            <div class="image-wrapper">
              <img src="../assets/images/programmer.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5 ">
        <div class="col-md-6 reverse">
          <div class="row-image">
            <img src="../assets/images/programmer.jpg" alt="" />
          </div>
        </div>
        <div class="col-md-6 mb-md-0 mb-5  d-flex flex-column ">
          <span class="fw-bold sub-title"> Our Story</span>
          <span class="my-5 fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            ipsam quos? Qui officia rerum et dolorem laborum placeat perferendis
            at id, impedit sint ipsam nulla quasi eum? Id, dolorem doloremque.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            ipsam quos? Qui officia rerum et dolorem laborum placeat perferendis
            at id, impedit sint.
          </span>

          <span><button>Sponsor Us</button></span>
        </div>
      </div>
    </div>

    <div class="row get-involved" style="margin: 100px 0;">
      <span class="sub-title my-3 fw-bold text-center">
        Get Involved
      </span>
      <div class="col-md-6 mb-md-0 mb-5">
        <div class="row-image">
          <div class="image-wrapper">
          </div>
            <img src="../assets/images/programmer.jpg" alt="" />
          <span class="text-end">
            <button>Join Slack</button>
          </span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row-image position-relative">
              <div class="image-wrapper">
          </div>
          <img src="../assets/images/programmer.jpg" alt="" />
          <span class="text-end">
            <button>Read our blog</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Who_We_Are",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.row-image img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  &:hover {
    transform: scale(1.03);

    transition: ease-in-out 0.5s;
  }
}

button {
  background: none;
  border: 1px solid var(--name);
  border-radius: 10px;
  font-size: 17px;
  padding: 10px 15px;
  outline: none;
  color: var(--name);
  font-weight: 500;
  &:hover {
    background: var(--Sec);
    transition: ease-in-out 0.5s;
  }
}
.sub-title {
  font-size: 30px;
}
.get-involved {
  .row-image {
    position: relative;
    .image-wrapper {
     position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
        border-radius: 10px;

      background-color: rgba(219, 206, 206, 0.5);
    }


    span {
      position: absolute;
      left: 0;
      right: 10px;
      bottom: 20px;
      button {
        color: #fff;
        border-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .reverse {
    order: 2;
  }
  .sub-title {
    font-size: 20px;
  }
}
</style>
