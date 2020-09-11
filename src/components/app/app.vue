<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <div class="d-flex align-center text-md-h4 font-weight-bold">
                <router-link class="header" to="/">Course Heroes</router-link>
            </div>

            <v-spacer/>

            <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
            >
                <span class="mr-2">Вход</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
        <v-footer>
            <v-spacer />
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script src="./app.js"></script>
<style lang="scss" scoped src="./app.scss"></style>
