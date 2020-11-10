<template>
  <div>

    <Notification v-if="error" type="error" :message="error" />

    <v-card max-width="420px" class="mx-auto">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="emailRules"
          />
          <v-text-field
            v-model="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :rules="passwordRules"
          />
          <v-btn block @click="loginUser" :disabled="!valid" color="primary">
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card flat max-width="420px" class="mx-auto mt-4">
      <div>
        Already have an account? <nuxt-link to="/register">Register</nuxt-link>
      </div>

      <div>
        <nuxt-link to="/forgot-password">Forgot password?</nuxt-link>
      </div>
    </v-card>
  </div>
</template>

<script>
import Notification from "@/components/Notification";
// import UserAuthForm from "@/components/UserAuthForm";
export default {
  middleware: "guest",
  data() {
    return {
      valid: false,
      showPassword: false,

      username: "Matt",
      email: "matt@matt.com",
      password: "matttttt",     
      error: null,

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password cannot be less than 6 characters",
      ],
    };
  },
  components: {
    // UserAuthForm,
    Notification,
  },
  methods: {
    async loginUser() {
      this.error = null;
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.email,
            password: this.password,
          },
        });
        this.$router.push("/blog");
        //console.log(loggedInUser);
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>