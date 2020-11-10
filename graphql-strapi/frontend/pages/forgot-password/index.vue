
<template>
  <v-container>
    <Notification v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="error" :message="error" />

<v-card v-if="!success" max-width="400px" class="mx-auto">
  <v-card-title>Forgot Password</v-card-title>
  <v-card-text>
     <form>
       <v-text-field        
       label="Email"
       v-model="email"
       type="email"
       /> 
       <v-btn block dark @click="forgotPassword">
         Email me a reset link
         </v-btn> 
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
  data() {
    return {
      email: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async forgotPassword() {
      try {
        await this.$axios.post("auth/forgot-password", {
          email: this.email,
        });
        this.error = null;
        this.success = `A reset password link has been sent to your email account. \
        Please click on the link to complete the password reset.`;
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>