<template>
    <v-card>
        <v-card-title>
            Тип вопроса: {{getTaskLabel(type)}}

            <v-spacer/>

            <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click.stop="onRemove"
            >
                <v-icon dark>mdi-close</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text>
            <v-textarea
                :value="question"
                name="short-description"
                label="Вопрос"
                @input="val => onChange('question', val)"
            />

            <v-row v-if="type !== 'input'" dense>
                <v-col cols="6">
                    <v-text-field
                        v-model="newAnswer"
                        label="Вариант ответа"
                        required
                    />
                </v-col>

                <v-col
                    align-self="center"
                    cols="6"
                    class="text-right"
                >
                    <v-btn
                        color="primary"
                        @click.stop="addVariant(newAnswer)"
                    >
                        Добавить вариант ответа
                    </v-btn>
                </v-col>
            </v-row>

            <v-radio-group
                v-if="answers && answers.length"
                :value="answers"
                :multiple="type === 'checkbox'"
                @change="val => onChange('rightAnswers', val)"
            >
                <v-radio
                    v-for="answer in answers"
                    :key="answer.id"
                    :label="answer.answer"
                    :value="answer.id"
                />
            </v-radio-group>

            <v-text-field
                v-if="type === 'input'"
                :value="rightAnswers"
                label="Ответ"
                required
                @input="val => onChange('rightAnswers', val)"
            />
        </v-card-text>
    </v-card>
</template>

<script src="./task-constructor.js"></script>
