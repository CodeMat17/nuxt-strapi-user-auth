<template>
  <v-container class="mb-6">
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-app-bar
          dark
          fixed
          shrink-on-scroll
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-threshold="320"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>
          <v-toolbar-item>
            <v-img
              :src="require('@/assets/images/icon.png')"
              height="50px"
              width="50px"
            ></v-img>
          </v-toolbar-item>
          <v-toolbar-title class="title"> Home </v-toolbar-title>

          <v-spacer />
          <v-row v-if="isAuthenticated" class="hidden-xs-only">
            <nuxt-link to="/">
            <v-container>
              <v-btn color="transparent" elevation="8">Home</v-btn>
            </v-container>
            </nuxt-link>
              <nuxt-link to="/blog">
            <v-container>
              <v-btn color="transparent" elevation="8">Blog</v-btn>
            </v-container>
            </nuxt-link>
          </v-row>
          <v-row v-if="!isAuthenticated">
            <nuxt-link to="/register">
            <v-container>
              <v-btn color="transparent" elevation="8">Register</v-btn>
            </v-container>
            </nuxt-link>
              <nuxt-link to="/login">
            <v-container>
              <v-btn color="transparent" elevation="8">Login</v-btn>
            </v-container>
            </nuxt-link>
          </v-row>
          <v-app-bar-nav-icon
            v-if="isAuthenticated"
            color="white"
            v-model="drawer"
            @click.stop="drawer = !drawer"
            class="hidden-sm-and-up"
          />
          <section v-if="isAuthenticated" class="hidden-xs-only">
            <v-container @click="logout">
              <v-btn color="transparent" elevation="8">Logout</v-btn>
            </v-container>
          </section>
        </v-app-bar>
        <br /><br /><br />
        <v-navigation-drawer v-model="drawer" fixed temporary right dark>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <br />
          <br /><br /><br />
          <div class="mx-4">
            <v-btn @click="logout" color="pink" block>Logout</v-btn>
          </div>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Blog",
          to: "/blog",
        },
      ],
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>