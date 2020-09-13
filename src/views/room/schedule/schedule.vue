<template>
    <div class="schedule">
        <h2 class="title">Рассписание</h2>
        <v-container fluid>
            <div v-if="loading" class="d-flex align-center justify-center loading">
                <v-progress-circular
                    :size="50"
                    color="primary"
                    indeterminate
                />
            </div>
            <v-row v-else dense>
                <v-col
                    v-for="item in directions"
                    :key="item.id"
                    :cols="6"
                >
                    <v-card @click="openShedule(item.id)">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                    class="headline"
                                    v-text="item.name"
                                />
                                <v-card-subtitle v-text="item.topic"/>
                            </div>

                            <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                            >
                                <v-img :src="item.image"/>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <div class="schedule-content">
            <div class="table">
                <div class="header">
                    Понедельник
                </div>
                <div class="header">
                    Вторник
                </div>
                <div class="header">
                    Среда
                </div>
                <div class="header">
                    Четверг
                </div>
                <div class="header">
                    Пятница
                </div>
                <div class="header">
                    Cуббота
                </div>
                <div class="header">
                    Воскресенье
                </div>
            </div>
            <div class="table">
                <div
                    v-for="(day, index) in days"
                    :key="index"
                    class="day"
                >
                    <p>{{ index }}</p>
                    <div v-if="day.date">
                        Занятие
                    </div>
                </div>
            </div>
        </div>
        <create-lesson v-if="showCreate" @close="closeCreate"/>
    </div>
</template>

<script src="./schedule.js"></script>
<style lang="scss" scoped src="./schedule.scss"></style>
