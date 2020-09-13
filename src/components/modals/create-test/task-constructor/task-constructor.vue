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
                        v-model="newVariant"
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
                        @click.stop="addVariant(newVariant)"
                    >
                        Добавить вариант ответа
                    </v-btn>
                </v-col>
            </v-row>

            <v-radio-group
                v-if="variants && variants.length"
                :value="answers"
                :multiple="type === 'checkbox'"
                @change="val => onChange('answers', val)"
            >
                <v-radio
                    v-for="variant in variants"
                    :key="variant.id"
                    :label="variant.answer"
                    :value="variant.id"
                />
            </v-radio-group>

            <v-text-field
                v-if="type === 'input'"
                :value="answers"
                label="Ответ"
                required
                @input="val => onChange('answers', val)"
            />
        </v-card-text>
    </v-card>
</template>

<script src="./task-constructor.js"></script>
