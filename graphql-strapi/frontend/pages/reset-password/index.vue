<template>
  <v-container>
    <Notification v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="error" :message="error" />

    <v-card v-if="!success" max-width="400px" class="mx-auto">
      <v-card-title> Reset Password </v-card-title>
      <v-card-text>
        <form>
          <v-text-field
            label="New Password"
            v-model="password1"
            type="password"
          />
          <v-text-field
            label="Confirm New Password"
            v-model="password2"
            type="password"
          />
          <v-btn @click="resetPassword" block dark> Reset Password </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Notification from "~/components/Notification";

export default {
  middleware: "guest",
  components: {
    Notification,
  },
  asyncData(context) {
    if (!context.route.query.code) context.redirect("/forgot-password");
    else
      return {
        code: context.route.query.code,
      };
  },
  data() {
    return {
      password1: "",
      password2: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async resetPassword() {
      this.error = null;
      if (this.password1 !== this.password2) {
        this.error = "Passwords do not match.";
        return;
      }
      try {
        await this.$axios.post("auth/reset-password", {
          code: this.code,
          password: this.password1,
          passwordConfirmation: this.password2,
        });
        this.success =
          "Password updated successfully. You can now use it to log in to your account.";
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>
