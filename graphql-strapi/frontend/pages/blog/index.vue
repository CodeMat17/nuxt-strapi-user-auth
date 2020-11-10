<template>
  <div>
    <h1 class="headline">Blog Page</h1>
    <br>
    <v-card elevation="20" max-width="450px" class="mx-auto">
      <v-card-title>My ID Card</v-card-title>
      <v-col> Name: {{ loggedInUser.username }} </v-col>
      <v-col> Email: {{ loggedInUser.email }} </v-col>
      <v-col> CreatedAt: {{ loggedInUser.createdAt }} </v-col>
      <v-col> UpdatedAt: {{ loggedInUser.updatedAt }} </v-col>
    </v-card>
    <br>
     <v-card elevation="20" max-width="450px" class="mx-auto">
      <v-card-title>My ID Card</v-card-title>
      <v-col> Name: {{ loggedInUser.username }} </v-col>
      <v-col> Email: {{ loggedInUser.email }} </v-col>
      <v-col> CreatedAt: {{ loggedInUser.createdAt }} </v-col>
      <v-col> UpdatedAt: {{ loggedInUser.updatedAt }} </v-col>
    </v-card>
    <br>
     <v-card elevation="20" max-width="450px" class="mx-auto">
      <v-card-title>My ID Card</v-card-title>
      <v-col> Name: {{ loggedInUser.username }} </v-col>
      <v-col> Email: {{ loggedInUser.email }} </v-col>
      <v-col> CreatedAt: {{ loggedInUser.createdAt }} </v-col>
      <v-col> UpdatedAt: {{ loggedInUser.updatedAt }} </v-col>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>