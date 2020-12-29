<template>
  <div>
    
  </div>
</template>

<script>
// import { login } from "@/api/login";

export default {
  data() {
    return {
      ticket: null
    }
  },
  mounted() {
    this.ticket = this.$route.query.ticket
    // login(this.ticket)
  },
}
</script>