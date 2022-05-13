<template>
  <section className="main__cont">
    <div className="main__inner">
      <div v-for="text in list" v-bind:key="text.text">{{ text.text }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      list: [
        { text: "we provides" },
        { text: "visual coding" },
        { text: "solutions" },
        { text: "for you webs" },
      ],
    };
  },
};
</script>

<style lang="scss">
.main__cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--light_bg);

  .main__inner {
    font-size: 10vw;
    line-height: 0.85;
    font-family: var(--main_font);
    color: var(--black);
    text-transform: uppercase;
  }
}
</style>
