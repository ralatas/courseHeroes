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
                    <div class="part part-left">
                        <v-file-input
                            v-model="form.image"
                            @change="change"
                            label="Картинка"
                        />
                        <img class="preview" :src="preview" >
                    </div>

                    <div class="part part-right">
                        <v-text-field
                            v-model="form.email"
                            label="E-mail"
                            required
                        />

                        <v-text-field
                            v-model="form.name"
                            label="ФИО"
                            required
                        />

                        <v-text-field
                            v-model="form.password"
                            label="Пароль"
                            required
                            type="password"
                        />

                        <v-textarea
                            v-model="form.description"
                            name="short-description"
                            label="Описание"
                        />
                    </div>
                </div>

                <div v-if="state === 'loading'" class="d-flex align-center justify-center loading">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                    />
                </div>

                <div v-if="state === 'complete'" class="d-flex align-center justify-center text-md-h4 font-weight-bold complete">
                    Направление создано
                </div>
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <v-btn
                    v-if="state === 'initial'"
                    color="blue darken-1"
                    text
                    @click.stop="submitForm"
                >Создать</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./create-user.js"></script>
<style lang="scss" scoped src="./create-user.scss"></style>
