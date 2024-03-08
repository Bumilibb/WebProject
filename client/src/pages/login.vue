<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

</script>

<template>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>

    <body>
        <div class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        <h1 class="title is-3 has-text-centered has-text-primary">Login</h1>
                        <form @SubmitEvent.prevent="">
                            <label for="email">
                                <span>Email</span>
                            </label>
                            <input class="input is-primary" type="email" v-model="email" placeholder="email@test.com">
                        </form>
                    </div>

                    <div class="column">
                        <form @SubmitEvent.prevent="">
                            <label for="Name">
                                <span>Password</span>
                            </label>
                            <input class="input is-primary" type="password" v-model="password" placeholder="Password">
                        </form>
                        <a href="forget.html" class="is-size-7 has-text-primary">forget password?</a>
                    </div>
                    <div class="column">
                        <button class="button is-primary is-fullwidth" type="submit">Login</button>
                    </div>
                    <div class="has-text-centered">
                        <p class="is-size-7"> Don't have an account? <a href="\signup" class="has-text-primary">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped>
.is-primary.input, .is-primary.textarea {
    border-color: pink;
}

.button.is-primary.is-hovered, .button.is-primary:hover {
    background-color: rgb(200, 93, 150);
    border-color: transparent;
    color: #fff;
}

.button.is-primary {
    background-color: rgb(223, 145, 158);
    border-color: transparent;
    color: #fff;
} 

.has-text-primary {
    color: rgb(200, 93, 150)!important;
}
</style>
