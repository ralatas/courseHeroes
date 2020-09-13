<template>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
        <v-card>
            <v-card-title>
                <span class="headline">Создание {{ types[userType] }}</span>
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
                <div v-show="state === 'initial'" class="content" >
                    <profile :form="form" @save="submitForm" />
                </div>

                <div v-if="state === 'loading'" class="d-flex align-center justify-center loading">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                    />
                </div>

                <div v-if="state === 'complete'" class="d-flex align-center justify-center text-md-h4 font-weight-bold complete">
                    Преподаватель создан
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script src="./create-user.js"></script>
<style lang="scss" scoped src="./create-user.scss"></style>
