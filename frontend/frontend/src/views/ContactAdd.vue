<template>
    <div v-if="contact" class="page">
        <h4>Thêm Sinh Viên</h4>
        <ContactForm :contact="contact" @submit:contact="addContact"  />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
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
                this.contact = await ContactService.get(id);
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
                await ContactService.create(data);
                this.message = "Sinh Viên được tạo thành công.";
                this.$router.push({ name: "contactsinhvien" });
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