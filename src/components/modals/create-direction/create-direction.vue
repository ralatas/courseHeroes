<template>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
        <v-card>
            <v-card-title>
                <span class="headline">Создание направления</span>
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
                        <v-text-field
                            v-model="form.name"
                            label="Название направления"
                            required
                        />

                        <v-select
                            v-model="form.teacherId"
                            :items="teachers"
                            label="Выбери преподавателя"
                            item-text="name"
                            item-value="id"
                        />

                        <v-textarea
                            v-model="form.topic"
                            name="short-description"
                            label="Краткое описание"
                        />
                    </div>

                    <div class="part part-right">
                        <v-file-input
                            v-model="form.image"
                            @change="change"
                            label="Картинка"
                        />
                        <img class="preview" :src="preview" >
                    </div>
                </div>

                <div v-show="state === 'initial'" class="content">
                    <editor
                        v-model="form.description"
                        title="Кем ты станешь когда закончишь учебу"
                    />
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

<script src="./create-direction.js"></script>
<style lang="scss" scoped src="./create-direction.scss"></style>
