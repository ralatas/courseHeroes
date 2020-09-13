<template>
    <v-dialog
        v-model="dialog"
        max-width="1000"
    >
        <v-card>
            <v-card-title>
                <span v-if="state === 'initial'" class="headline">{{ data.name }}</span>
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
            <v-card-text :style="{minHeight: '300px'}">
                <div v-if="state === 'initial'">
                    <p class="font-weight-bold"><i>Преподаватель:</i> {{ data.user.name }}</p>
                    <div v-html="data.description" />
                </div>
                <div v-if="state === 'loading'" class="d-flex align-center justify-center loading">
                    <v-progress-circular
                        :size="50"
                        color="primary"
                        indeterminate
                    />
                </div>
                <div v-if="state === 'complete'" class="d-flex align-center justify-center text-md-h4 font-weight-bold complete">
                    Поздравляем вы выбрали {{ data.name }}
                </div>
            </v-card-text>
            <v-card-actions v-if="state === 'initial'">
                <v-spacer/>
                <v-btn
                    v-if="user.speciality && data.id !== user.speciality.id "
                    color="blue darken-1"
                    text
                    @click.stop="select"
                >Выбрать</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./detail-direction.js"></script>
