<template>
    <v-dialog
        v-model="dialog"
        max-width="600"
    >
        <v-card>
            <v-card-title>
                <span class="headline">Вход</span>
                <v-spacer/>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                    @click.stop="dialog = false"
                >
                    <v-icon dark>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                />
                <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                />
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
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
