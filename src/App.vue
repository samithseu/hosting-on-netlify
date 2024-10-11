<script>
import LanguageIcon from "./LanguageIcon.vue";
import mapJPG from "./assets/map.webp";
import { ref } from "vue";

export default {
  components: { LanguageIcon },
  name: "App",
  setup() {
    return { mapJPG, ref };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    toggleLocale() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "km";
      } else {
        this.$i18n.locale = "en";
      }
    },
    handleClick() {
      window.open(this.$refs.img.src, "_blank");
    },
  },
};
</script>

<template>
  <nav>
    <button @click="toggleLocale">ប្ដូរភាសា <LanguageIcon /></button>
  </nav>
  <img
    @click="handleClick"
    ref="img"
    height="400px"
    :src="mapJPG"
    alt="Khmer Old Map"
    class="map"
  />
  <p class="txt">{{ $t("txt") }}</p>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: rgb(0, 0, 24);
  padding-block: 1rem;
  border-bottom: 1px solid white;
  margin-bottom: 1.5rem;
  z-index: 99;
}
button {
  outline: 0;
  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  transition: all 250ms ease-out;
  display: flex;
  align-items: center;
  word-break: keep-all;
  gap: 0.8rem;
}
button svg {
  aspect-ratio: initial;
  height: 24px;
}

p {
  text-align: center;
  color: white;
  font-size: 2rem;
  line-height: 1.8;
}
.txt {
  width: min(800px, calc(100% - 4rem));
  font-size: 1.4rem;
  font-weight: 400;
  text-align: justify;
  margin-inline: auto;
  text-indent: 4em;
  margin-top: 0.5rem;
}
.map {
  width: min(800px, calc(100% - 4rem));
  margin-inline: auto;
  aspect-ratio: initial;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: all 300ms ease-in-out;
  filter: grayscale(1) contrast(120%);
  box-shadow: 5px 5px 0px rgba(0, 255, 255, 0);
}
.map:hover {
  filter: grayscale(0) contrast(100%) saturate(105%);
  translate: -5px -5px;
  box-shadow: 5px 5px 0px rgb(0, 255, 255);
  cursor: zoom-in;
}
</style>
