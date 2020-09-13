<template>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
        <v-card>
            <v-card-title>
                <span class="headline">{{test.title}}</span>

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

            <v-card-text v-html="test.description" />

            <v-card-text>
                <div v-show="state === 'initial'">
                    <v-row dense>
                        <v-col
                            v-for="(task, index) in test.tasks"
                            :key="index"
                            cols="12"
                        >
                            <task
                                v-bind="task"
                                :result="result && result.test && result.test.tasks[index] || {}"
                                @answer="val => updateTask(task.number, val)"
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
                <div v-if="state === 'complete'">
                    Получено баллов: {{result.score}}
                </div>
            </v-card-text>

            <v-card-text>
                <v-btn
                    color="primary"
                    @click.stop="submitForm"
                >
                    Готово
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script src="./student-test.js"></script>
<style lang="scss" scoped src="./student-test.scss"></style>
