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
                    label="E-mail"
                    required
                />
                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="blue darken-1"
                    text
                    @click.stop="dialog = false"
                >Закрыть</v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click.stop="submitForm"
                >Войти</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./authorization.js"></script>
