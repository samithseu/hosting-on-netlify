<script>
import LanguageIcon from "./LanguageIcon.vue";
import mapJPG from "./assets/map.jpg";

export default {
  components: { LanguageIcon },
  name: "App",
  setup() {
    return { mapJPG };
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
  },
  mounted() {
    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
      ogImageTag = document.createElement("meta");
      ogImageTag.setAttribute("property", "og:image");
      document.head.appendChild(ogImageTag);
    }

    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement("meta");
      ogTitleTag.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleTag);
    }

    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement("meta");
      ogDescTag.setAttribute("property", "og:description");
      document.head.appendChild(ogDescTag);
    }

    ogImageTag.setAttribute("content", mapJPG);
    ogTitleTag.setAttribute("content", "Short Khmer History");
    ogDescTag.setAttribute(
      "content",
      "Using I18n for switching language about short Khmer history."
    );
  },
};
</script>

<template>
  <nav>
    <button @click="toggleLocale">ប្ដូរភាសា <LanguageIcon /></button>
  </nav>
  <img :src="mapJPG" alt="Khmer Old Map" class="map" />
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
button svg {
  transition: fill 250ms ease-in-out;
}
button:hover {
  color: cyan;
}
button:hover * {
  fill: cyan;
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
  height: 400px;
  aspect-ratio: initial;
  object-fit: cover;
  border-radius: 1rem;
  transition: all 450ms ease-in-out;
  border: 4px solid rgba(255, 255, 255, 0);
  filter: grayscale(1);
}
.map:hover {
  border: 4px solid cyan;
  filter: grayscale(0) saturate(105%);
}
</style>
