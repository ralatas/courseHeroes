<template>
    <v-card>
        <v-card-text>
            <v-textarea
                :value="`${number} ${question}`"
                name="short-description"
                label="Вопрос"
                :disabled="true"
            />

            <v-radio-group
                v-if="type !== 'input' && answers && answers.length"
                :value="answers"
                :multiple="type === 'checkbox'"
                @change="answer"
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
                label="Ответ"
                required
                @input="answer"
            />
        </v-card-text>
    </v-card>
</template>

<script src="./task.js"></script>
