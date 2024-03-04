<script setup lang="ts">

</script>

<template>
 <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bulma CSS Signup Page with image</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>

    <body>
        <div class="container">
            <div class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                    <div class="columns is-flex is-flex-direction-column box">
                        <div class="column">
                            <label for="name">Name</label>
                            <input class="input is-primary" type="text" placeholder="Enter Name">
                        </div>
                        <div class="column">
                            <label for="email">Email</label>
                            <input class="input is-primary" type="text" placeholder="Email address">
                        </div>
                        <div class="column">
                            <label for="Name">Password</label>
                            <input class="input is-primary" type="password" placeholder="Password">
                            <input type="checkbox">
                            I agree to the <a href="#" class="has-text-primary">terms and conditions</a>
                           
                        </div>
                        <div class="column">
                            <button class="button is-primary is-fullwidth" type="submit">Create an account</button>
                        </div>
                        <div class="has-text-centered">
                            <p> Already have an account? <a href="/login" class="has-text-primary">Login</a>
                            </p>
                        </div>
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
