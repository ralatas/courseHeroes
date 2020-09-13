<template>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
        <v-card>
            <v-card-title>
                <span class="headline">Создание задания</span>

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
                <div v-show="state === 'initial'">
                    <v-row dense>
                        <v-col cols="6">
                            <v-select
                                v-model="form.specialityId"
                                :items="specialities"
                                item-text="name"
                                item-value="id"
                                label="Выберите направление"
                            />
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                v-model="form.maxScore"
                                label="Баллов за задание"
                                required
                            />
                        </v-col>

                        <v-col cols="6">
                            <v-text-field
                                v-model="form.title"
                                label="Название задания"
                                required
                            />
                        </v-col>
                    </v-row>

                    <editor
                        v-model="form.description"
                        title="Описание задания"
                    />

                    <v-row dense>
                        <v-col cols="6">
                            <v-select
                                v-model="newTaskType"
                                :items="tasksTypes"
                                item-text="label"
                                item-value="key"
                                label="Выберите направление"
                            />
                        </v-col>

                        <v-col
                            align-self="center"
                            cols="6"
                            class="text-right"
                        >
                            <v-btn
                                color="primary"
                                @click.stop="createTask(newTaskType)"
                            >
                                Добавить вопрос
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-row dense>
                        <v-col
                            v-for="(task, index) in form.tasks"
                            :key="index"
                            cols="12"
                        >
                            <task
                                v-bind="task"
                                :tasks-types="tasksTypes"
                                @change="val => updateTask(index, val)"
                                @remove="removeTask(index)"
                            />
                        </v-col>
                    </v-row>
                </div>

                <div v-if="state === 'loading'" class="d-flex align-center justify-center loading">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                    />
                </div>

                <div v-if="state === 'complete'" class="d-flex align-center justify-center text-md-h4 font-weight-bold complete">
                    Тест создан
                </div>
            </v-card-text>

            <v-card-text>
                <v-btn
                    color="primary"
                    @click.stop="submitForm"
                >
                    Создать задание
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script src="./create-test.js"></script>
<style lang="scss" scoped src="./create-test.scss"></style>
