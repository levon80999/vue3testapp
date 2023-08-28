<template>
  <NavBar />
  <v-app>
    <v-main>

      <div class="page-wrap">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
}
</script>
