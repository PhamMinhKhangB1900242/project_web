<template>
    <Form @submit="submitContact" :validation-schema="contactFormSchema">
       
        <div class="form-group">
            <label for="namegv">Tên</label>
            <Field name="namegv" type="text" class="form-control" v-model="contactLocalGV.namegv" />
            <ErrorMessage name="namegv" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="emailgv">E-mail</label>
            <Field name="emailgv" type="email" class="form-control" v-model="contactLocalGV.emailgv" />
            <ErrorMessage name="emailgv" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="msgv">MSGV</label>
            <Field name="msgv" type="text" class="form-control" v-model="contactLocalGV.msgv" />
            <ErrorMessage name="msgv" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phonegv">Điện thoại</label>
            <Field name="phonegv" type="tel" class="form-control" v-model="contactLocalGV.phonegv" />
            <ErrorMessage name="phonegv" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="khoa">Thuộc Khoa</label>
            <Field name="khoa" type="tel" class="form-control" v-model="contactLocalGV.khoa" />
            <ErrorMessage name="khoa" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="mon">Môn Học Giảng Dạy</label>
            <Field name="mon" type="tel" class="form-control" v-model="contactLocalGV.mon" />
            <ErrorMessage name="mon" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="hinhgv">Hình Giáo Viên</label>
            <Field name="hinhgv" type="tel" class="form-control" v-model="contactLocalGV.hinhgv" />
            <ErrorMessage name="hinhgv" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="contactLocalGV._id" type="button" class="ml-2 btn btn-danger" @click="deleteContact">
                Xóa
            </button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:contact", "delete:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            namegv: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            emailgv: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            msgv: yup.string().max(10, "mssv tối đa 10 ký tự."),
            khoa: yup.string().max(50, "mssv tối đa 10 ký tự."),
            mon: yup.string().max(50, "mssv tối đa 10 ký tự."),
            phonegv: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
          
            contactLocalGV: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocalGV);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocalGV.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>