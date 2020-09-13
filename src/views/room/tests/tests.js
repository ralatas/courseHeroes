import CreateTest from '@/components/modals/create-test/create-test.vue'

export default {
    name: 'tests',
    components: {
        CreateTest
    },
    data() {
        return {
            showCreate: false,
            form: {
                search: '',
                specialityId: null
            },
            specialities: ['Foo', 'Bar', 'Fizz', 'Buzz'].map((e, id) => ({ id, name: e })),
            tests: [...new Array(4)].map((a, index) => ({
                id: index,
                title: `test ${index}`,
                description: `test ${index}`
            }))
        }
    }
}
