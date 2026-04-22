<template>
    <v-card width="90%" :variant="themeValue === 'dark' ? 'elevated' : 'outlined'" >
        <v-card-title><span class="text-green-accent-3">~ cd </span>{{ `${title}` }}
        </v-card-title>
        <span class="ml-3 text-orange-darken-2 text-h5"><v-icon>bi bi-alt</v-icon></span>
        <v-card-text class="d-flex justify-center">
            <v-card variant="outlined" width="70%">
                <v-card-text>
                    <p class="pb-5">
                        <span class="text-green-accent-3 d-block">~ mkdir contact me </span>
                        <span class="d-block">$ My name is {{ Myname }}, ho can I help you?</span>
                        <span class="d-block">$ My email is {{Myemail}}</span>
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
<script setup lang="ts">
import { useTheme } from 'vuetify';
import { ref, computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'contact',
    },
    Myname: {
        type: String,
        default: 'Adrian Aguilera',
    },
    Myemail: {
        type: String,
        default: 'adrian.aguileragcm@gmail.com',
    },
})

const form = ref()
const theme = useTheme()
const themeValue = computed(() => {
    return theme.global.name.value;
});


const rules = ref({
    required: (value: any) => !!value || 'Required.',
    email: (value: any) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
    }
})
const email = ref('')
const message = ref('')
const name = ref('')

const validate = async () => {
    const { valid } = await form.value.validate()

    if (valid) alert('Form is valid')
}

const sendEmail = () => {
    const isvalid = form.value.validate()
    if (!isvalid) return;

    const mailtoLink = `mailto:${props.Myemail}?subject=Contact from ${name.value}&body=${message.value
        }%0D%0A%0D%0AFrom: ${email.value}`;
    window.location.href = mailtoLink;
}
</script>
