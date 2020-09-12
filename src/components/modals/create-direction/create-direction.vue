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
                <div class="content">
                    <div class="part part-left">
                        <v-text-field
                            v-model="form.name"
                            label="Название направления"
                            required
                        />

                        <v-select
                            v-model="form.teacherId"
                            :items="items"
                            label="Выбери преподавателя"
                        />

                        <v-textarea
                            v-model="form.topic"
                            name="short-description"
                            label="Краткое описание"
                            hint="Hint text"
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

                <div class="content">
                    <editor
                        v-model="form.description"
                        title="Кем ты станешь когда закончишь учебу"
                    />
                </div>
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <v-btn
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
