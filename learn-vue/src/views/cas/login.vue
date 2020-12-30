<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      ticket: null,
    };
  },
  mounted() {
    this.ticket = this.$route.query.ticket;
    this.$store
      .dispatch("Login", this.ticket)
      .then(() => {
        this.loading = false;
        this.$router.push({ path: "/" });
      })
      .catch(() => {
        this.loading = false;
      });
  },
};
</script>