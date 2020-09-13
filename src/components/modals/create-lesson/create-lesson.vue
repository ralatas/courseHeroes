<template>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
        <v-card>
            <v-card-title>
                <span class="headline">Создание урок</span>
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
                <div class="content" >
                    <div class="part part-left">
                        <v-text-field
                            v-model="form.title"
                            label="Тема занятия"
                            required
                        />
                        <v-text-field
                            v-model="form.from"
                            label="Начало"
                            required
                        />

                        <v-text-field
                            v-model="form.to"
                            label="Завершение"
                            required
                        />

                        <v-text-field
                            v-model="form.groupSize"
                            label="Размер группы"
                            required
                        />

                        <v-select
                            v-model="form.taskId"
                            :items="tasks"
                            label="Выберите задание"
                            item-text="title"
                            item-value="id"
                        />
                    </div>

                    <div class="part part-right">
                        <div class="table">
                            <div class="header">
                                Пн
                            </div>
                            <div class="header">
                                Вт
                            </div>
                            <div class="header">
                                Ср
                            </div>
                            <div class="header">
                                Чт
                            </div>
                            <div class="header">
                                Пц
                            </div>
                            <div class="header">
                                Cб
                            </div>
                            <div class="header">
                                Вс
                            </div>
                        </div>
                        <div class="table">
                            <div
                                v-for="(day, index) in days"
                                :key="index"
                                class="day"
                                @click="form.date = index"
                            >
                                <p>{{ index }}</p>
                                <div v-if="day.date">
                                    Занятие
                                </div>
                            </div>
                        </div>
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

<script src="./create-lesson.js"></script>
<style lang="scss" scoped src="./create-lesson.scss"></style>
