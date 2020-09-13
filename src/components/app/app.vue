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
                v-if="!authorized"
                @click.stop="showAuth = true"
                text
            >
                <span class="mr-2">Вход</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
            <router-link v-else :to="{name: 'room'}">
                <v-avatar size="36px">
                    <img
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    >
                </v-avatar>
            </router-link>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
        <v-footer>
            <v-spacer />
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>

        <authorization v-if="showAuth" @close="showAuth = false"/>
    </v-app>
</template>

<script src="./app.js"></script>
<style lang="scss" scoped src="./app.scss"></style>
