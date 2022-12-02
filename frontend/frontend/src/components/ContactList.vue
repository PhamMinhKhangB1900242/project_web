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
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            mssv: yup.string().max(10, "mssv tối đa 10 ký tự."),
            phone: yup
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
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
    
};

</script>
<template >
    <table class="table" >
        <thead >
            <tr class="table-primary">
                <th style="font-weight:bold">Name </th>
                <th style="font-weight:bold">E-mail</th>
                <th style="font-weight:bold">MSSV</th>
                <th style="font-weight:bold">Điện Thoại</th>
            </tr>
        </thead>
        <tbody v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            <tr>
            <th  >{{ contact.name }}</th>
            <th  >{{ contact.email }} </th>
            <th  >{{ contact.mssv }} </th>
            <th  >{{ contact.phone }} </th>   
        </tr>
        </tbody>
    </table>
    
    <!-- <ul class="list-group">
        <li class="list-group-item" v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ contact.name }}
        </li>
    </ul> -->
</template>