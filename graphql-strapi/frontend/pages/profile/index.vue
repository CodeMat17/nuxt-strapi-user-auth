<template>
  <v-container>
    <h2 class="title">My Profile</h2>
    <div>
      <p>
        <strong>Username:</strong>
        {{ loggedInUser.username }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ loggedInUser.email }}
      </p>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "auth",
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>