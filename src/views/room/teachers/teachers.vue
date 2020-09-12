<template>
    <div class="teachers">
        <div class="list">
            Тут список
        </div>
        <div class="d-flex align-center justify-center">
            <v-btn
                color="primary"
                @click.stop="showCreate = true"
            >
                Создать преподавателя
            </v-btn>
            <create-user
                v-if="showCreate"
                user-type="teacher"
                @close="showCreate = false"
            />
        </div>
    </div>
</template>

<script src="./teachers.js"></script>
<style lang="scss" scoped src="./teachers.scss"></style>
