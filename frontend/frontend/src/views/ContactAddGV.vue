<template>
    <div v-if="contact" class="page">
        <h4>Thêm Giáo Viên</h4>
        <ContactFormGV :contact="contact" @submit:contact="addContact"  />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactFormGV from "../components/ContactFormGV.vue";
import ContactServiceGV from "../services/contact.serviceGV";
export default {
    components: {
        ContactFormGV,
    },
    
    data() {
        return {
            contact: {},
            message: "",
        };
    },
    methods: {
        async getContact(id) {
            try {
                this.contact = await ContactServiceGV.get(id);
            } catch (error) {
                console.log(error);
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },

        async addContact(data) {
            try{
                await ContactServiceGV.create(data);
                this.message = "Giáo Viên được tạo thành công.";
                this.$router.push({ name: "contactgiaovien" });
            } catch (error) {
                console.log(error);
            }
            
        },   
    },
    created() {
        this.message = "";
    },
};
</script>