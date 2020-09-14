<template>
    <div class="teachers">
        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="item in students"
                    :key="item.id"
                    :cols="6"
                >
                    <v-card>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <b>{{ item.scoreBall ? item.scoreBall : '' }}</b>
                                <v-card-title
                                    class="headline"
                                    v-text="item.name"
                                />

                                <v-card-subtitle v-text="item.email"/>
                            </div>

                            <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                            >
                                <v-img :src="`https://randomuser.me/api/portraits/men/${ getRandomInt(1, 100) }.jpg`"/>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <div class="d-flex align-center justify-center">
            <v-btn
                color="primary"
                @click.stop="showCreate = true"
            >
                Создать ученика
            </v-btn>
            <create-user
                v-if="showCreate"
                user-type="student"
                @close="showCreate = false"
            />
        </div>
    </div>
</template>

<script src="./students.js"></script>
<style lang="scss" scoped src="./students.scss"></style>
