<script>
export default {
  name: "App",
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
};
</script>

<template>
  <nav>
    <button @click="changeLocale('en')">English</button>
    <button @click="changeLocale('km')">ភាសាខ្មែរ</button>
    <button @click="toggleLocale">Toggle Locale</button>
  </nav>
  <p>{{ $t("welcome") }}</p>
  <p>{{ $t("message") }}</p>
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
  padding-block: 1.5rem;
  border-bottom: 1px solid white;
  margin-bottom: 1.5rem;
}
button {
  outline: 0;
  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
}
p {
  text-align: center;
  color: white;
  font-size: 1.4rem;
  line-height: 1.8;
}
</style>
