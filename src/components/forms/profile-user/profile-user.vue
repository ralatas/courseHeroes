<template>
    <div class="profile">
        <div class="content">
            <div class="part part-left">
                <v-file-input
                    v-model="localForm.image"
                    @change="change"
                    label="Картинка"
                />
                <img class="preview" :src="preview" >
            </div>
            <div class="part part-right">
                <v-text-field
                    v-if="localForm.email !== undefined"
                    v-model="localForm.email"
                    label="E-mail"
                />

                <v-text-field
                    v-if="localForm.name !== undefined"
                    v-model="localForm.name"
                    label="ФИО"
                />

                <v-text-field
                    v-if="localForm.password !== undefined"
                    v-model="localForm.password"
                    label="Пароль"
                    required
                    type="password"
                />
                <v-text-field
                    v-if="localForm.phone !== undefined"
                    v-model="localForm.phone"
                    label="Телефон"
                    type="tel"
                />

                <v-textarea
                    v-if="localForm.description !== undefined"
                    v-model="localForm.description"
                    name="short-description"
                    label="Описание"
                />
            </div>
        </div>
        <div class="d-flex justify-center align-center">
            <v-btn
                color="primary darken-1"
                text
                @click.stop="submitForm"
            >Сохранить</v-btn>
        </div>
    </div>
</template>

<script src="./profile-user.js"></script>
<style src="./profile-user.scss" lang="scss" scoped></style>
