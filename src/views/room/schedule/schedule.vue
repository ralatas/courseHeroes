<template>
    <div class="schedule">
        <h2 class="title">Рассписание</h2>
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
                    @click="openShedule"
                >
                    <p>{{ index }}</p>
                    <div v-if="day.date">
                        Занятие
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./schedule.js"></script>
<style lang="scss" scoped src="./schedule.scss"></style>
