<template>
    <v-container fluid>
        <v-row dense>
            <v-col
                :cols="12"
                class="d-flex justify-end"
            >
                <v-btn
                    depressed
                    large
                    color="primary"
                    @click="exit"
                >Выход</v-btn>
            </v-col>

            <v-col
                :cols="12"
                class="d-flex justify-center"
                v-if="user"
            >
                <profile-user :form="user" @save="submitForm" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./profile.js"></script>
<style lang="scss" scoped src="./profile.scss"></style>
