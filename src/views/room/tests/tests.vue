<template>
    <div class="tests">
        <create-test
            v-if="showCreate"
            :specialities="specialities"
            @close="showCreate = false"
            @create="val => {tests = [...tests, val]}"
        />

        <student-test
            v-if="showTest"
            :test-id="te"
            :student-id="6"
            @close="showTest = false"
        />

        <v-container>
            <v-row dense>
                <v-col align-self="center">
                    <v-btn
                        color="primary"
                        @click.stop="showCreate = true"
                    >
                        Новое задание
                    </v-btn>

                    <v-btn
                        color="primary"
                        @click.stop="showTest = true"
                    >
                        Тест
                    </v-btn>
                </v-col>

                <v-col>
                    <v-text-field v-model="form.search">
                        <v-icon slot="prepend">mdi-magnify</v-icon>
                    </v-text-field>
                </v-col>

                <v-col>
                    <v-select
                        v-model="form.specialityId"
                        :items="specialities"
                        item-text="name"
                        item-value="id"
                        label="Выберите направление"
                    />
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row dense>
                <v-col
                    v-for="test in tests"
                    :key="test.id"
                    cols="6"
                >
                    <v-card @click="te = test.id">
                        <v-card-title class="d-flex headline justify-space-between">
                            {{test.title}}

                            <v-card-actions>
                                <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card-title>

                        <v-card-subtitle v-html="test.description" />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script src="./tests.js"></script>
