<template>
  <div class="container">
    <div class="title text-center" style="margin:60px 0;">
      <span class="fs-3">W</span>ho <span class="fs-3">W</span>e
      <span class="fs-3">A</span>re
    </div>

    <div class="row my-4">
      <div
        class="col-md-6 my-4  d-flex align-items-center justify-content-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsam
        quos? Qui officia rerum et dolorem laborum placeat perferendis at id,
        impedit sint ipsam nulla quasi eum? Id, dolorem doloremque. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Magni, ipsam quos? Qui
        officia rerum et dolorem laborum placeat perferendis at id, impedit sint
        ipsam nulla quasi eum? Id, dolorem doloremque. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Magni, ipsam quos? Qui officia rerum
        et dolorem laborum placeat perferendis at id, impedit sint ipsam nulla
        quasi eum? Id, dolorem doloremque. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Magni, sint ipsam nulla quasi eum? Id,
        dolorem doloremque.
      </div>
      <div class="col-md-6">
        <div class="row-image">
          <img src="../assets/images/programmer.jpg" alt="" />
        </div>
      </div>

      <div class="col-md-6 reverse my-5">
        <div class="row-image">
          <img src="../assets/images/programmer.jpg" alt="" />
        </div>
      </div>
      <div
        class="col-md-6  my-4 d-flex align-items-center justify-content-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ipsam
        quos? Qui officia rerum et dolorem laborum placeat perferendis at id,
        impedit sint ipsam nulla quasi eum? Id, dolorem doloremque. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Magni, ipsam quos? Qui
        officia rerum et dolorem laborum placeat perferendis at id, impedit sint
        ipsam nulla quasi eum? Id, dolorem doloremque. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Magni, ipsam quos? Qui officia rerum
        et dolorem laborum placeat perferendis at id, impedit sint ipsam nulla
        quasi eum? Id, dolorem doloremque. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Magni, sint ipsam nulla quasi eum? Id,
        dolorem doloremque.
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

@media screen and (max-width: 768px) {
  .reverse {
    order: 2;
  }
}
</style>
