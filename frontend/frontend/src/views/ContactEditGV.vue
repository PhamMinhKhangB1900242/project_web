<template>
    <div v-if="contact" class="page">
        <h4>Chỉnh Sửa Giáo Viên</h4>
        <ContactFormGV :contact="contact" @submit:contact="updateContact" @delete:contact="deleteContact" />
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
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            contact: null,
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
        async updateContact(data) {
            try {
                await ContactServiceGV.update(this.contact._id, data);
                this.message = "Thông Tin được cập nhật thành công.";
                this.$router.push({ name: "contactgiaovien" });
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact() {
            if (confirm("Bạn muốn xóa giáo viên này?")) {
                try {
                    await ContactServiceGV.delete(this.contact._id);
                    this.$router.push({ name: "contactgiaovien" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getContact(this.id);
        this.message = "";
    },
};
</script>