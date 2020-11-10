<template>
  <div>
    <Notification v-if="success" type="success" :message="success" />

    <Notification v-if="error" type="error" :message="error" />

    <v-card v-if="!success" max-width="420px" class="mx-auto">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="username"
            label="Username"
            type="text"
            :rules="usernameRules"
          />
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
          <v-btn block @click="registerUser" :disabled="!valid" color="primary">
            Register
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card v-if="!success" flat max-width="420px" class="mx-auto mt-4">
      <div>
        Already have an account? <nuxt-link to="/login">Login</nuxt-link>
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
      success: null,
      error: null,

      usernameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name cannot be less than 3 characters",
      ],
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
    async registerUser() {
      this.error = null;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.success = `A confirmation link has been sent to your email account. \
            Please click on the link to complete the registration process.`;
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>