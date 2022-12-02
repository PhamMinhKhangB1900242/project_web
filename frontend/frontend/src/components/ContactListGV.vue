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
            phonegv: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
          
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            this.$emit("delete:contact", this.contactLocal.id);
        },
    },
    
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndexGV(index) {
            this.$emit("update:activeIndex", index);
        }
    }
    
};

</script>
<template >
    <table class="table" >
        <thead >
            <tr class="table-primary">
                <th style="font-weight:bold">NameGV </th>
                <th style="font-weight:bold">E-mailGV</th>
                <th style="font-weight:bold">MSGV</th>
                <th style="font-weight:bold">Điện Thoại GV</th>
            </tr>
        </thead>
        <tbody v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndexGV(index)">
            <tr>
            <th  >{{ contact.namegv }}</th>
            <th  >{{ contact.emailgv }} </th>
            <th  >{{ contact.msgv }} </th>
            <th  >{{ contact.phonegv }} </th>   
        </tr>
        </tbody>
    </table>
</template>