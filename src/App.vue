<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/refer">Reference</router-link> |
    <router-link to="/youtube">Youtube</router-link> |
    <router-link to="/movie">Movie</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/port">Portfolio</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "style.scss";
</style>
