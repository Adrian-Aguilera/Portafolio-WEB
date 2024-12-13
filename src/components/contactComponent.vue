<template>
    <v-card width="90%" :variant="theme === 'dark' ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ cd </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text class="d-flex justify-center">
            <v-card variant="outlined" width="70%">
                <v-card-text>
                    <p class="pb-5">
                        <span class="text-green-accent-3 d-block">~ mkdir contact me </span>
                    </p>
                    <v-divider :thickness="5" class="pb-4"></v-divider>
                    <v-form ref="form">
                        <v-text-field
                            v-model="email"
                            :rules="[rules.required, rules.email]"
                            label="what is your name?"
                            required
                            variant="outlined"
                            class="mb-2"
                        ></v-text-field>
                        <v-text-field
                          v-model="email"
                          :rules="[rules.required, rules.email]"
                          label="Email"
                          required
                          variant="outlined"
                        ></v-text-field>
                        <v-textarea
                            v-model="message"
                            :rules="[rules.required]"
                            label="Your message"
                            counter
                            variant="outlined"
                        ></v-textarea>
                        <div class="d-flex flex-column">
                          <v-btn
                            class="mt-4"
                            color="success"
                            block
                            @click="sendEmail()"
                            variant="outlined"
                          >
                            Send
                          </v-btn>
                        </div>
                      </v-form>
                </v-card-text>
            </v-card>
        </v-card-text>
        <span class="d-flex justify-end mr-3 text-orange-darken-2 text-h5 mb-1"><v-icon>bi bi-alt</v-icon></span>
    </v-card>
</template>

<script>
export default {
    name: 'contactComponent',
    props: {
        title: {
            type: String,
            default: 'contact',
        },
    },
    data: () => ({
        rules: {
            required: value => !!value || 'Required.',
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
            },
        },
        email: '',
    }),
    methods: {
        async sendEmail() {
            const isValid = await this.validate()
            if (isValid) {
                    const { email } = this
                const response = await fetch(`https://api.example.com/send-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                })

                if (response.ok) {
                    alert('Email sent!')
                } else {
                    alert('Failed to send email')
                }
            } else {
                alert('Please fill in all the required fields')
            }

        },
        async validate () {
            const { valid } = await this.$refs.form.validate()

            if (valid) alert('Form is valid')
        },
    },
    computed: {
        theme() {
            return this.$store.getters.theme;
        }
    },
}
</script>