<template>
    <div class="directions">
        <div class="list">
            Тут список
        </div>
        <div class="d-flex align-center justify-center">
            <v-btn
                color="primary"
                @click.stop="showCreate = true"
            >
                Создать направление
            </v-btn>
            <create-direction v-if="showCreate" @close="showCreate = false" />
        </div>
    </div>
</template>

<script src="./directions.js"></script>
<style lang="scss" scoped src="./directions.scss"></style>
