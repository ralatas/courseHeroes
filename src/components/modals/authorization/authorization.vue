<template>
    <v-dialog
        v-model="dialog"
        max-width="600"
    >
        <v-card>
            <v-card-title>
                <span class="headline">Авторизация</span>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="login"
                    :counter="10"
                    :error-messages="errors"
                    label="E-mail"
                    required
                />
                <v-text-field
                    v-model="password"
                    :counter="10"
                    :error-messages="errors"
                    label="Password"
                    required
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >Войти</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./authorization.js"></script>
