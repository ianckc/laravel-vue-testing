<template>
    <div>
        <h1>Basic Response</h1>
        <div>
            <button @click="getResponse">Get the response</button>
        </div>
        <p v-text="message"></p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "BasicResponse",
        data() {
            return {
                message: ''
            }
        },
        methods: {
            getResponse() {
                axios.get('/api/basic-response')
                    .then((response) => {
                        this.message = response.data.message;
                    });
            }
        }
    }
</script>
