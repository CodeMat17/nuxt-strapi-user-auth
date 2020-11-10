<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
      </div>
      <br>
      <v-card elevation="10">
        <v-card-title class="headline">
          Nuxt with Vuetify frontend & Strapi - MongoDB backend
        </v-card-title>
        <v-card-text>         
          <div class="text-xs-right">
            <em><small>&mdash; Get Started</small></em>
          </div>
         
        </v-card-text>
         <!-- <hr class="my-3"> -->
        <v-card-actions>
          <v-btn
            color="primary"
            nuxt
            to="/register"
          >
            Register
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/login"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
