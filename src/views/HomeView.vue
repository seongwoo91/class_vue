<template>
  <div>
    <HeaderLayout />
    <MainCont />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import MainCont from "@/components/MainCont.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    MainCont,
  },
};
</script>
