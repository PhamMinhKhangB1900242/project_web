import { createWebHistory, createRouter } from "vue-router";
import ContactSinhvien from "@/views/ContactSinhvien.vue";

const routes = [
    {
        path: "/",
        name: "contactsinhvien",
        component: ContactSinhvien,
    },

    {
        path: "/",
        name: "contactgiaovien",
        component: () => import("@/views/ContactGiaovien.vue"),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },

    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true 
    },

    {
        path: "/contactsgv/:id",
        name: "contactGV.edit",
        component: () => import("@/views/ContactEditGV.vue"),
        props: true 
    },

    {
        path: "/contacts/",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
       
    },

    {
        path: "/contactsgv/",
        name: "contactGV.add",
        component: () => import("@/views/ContactAddGV.vue"),
       
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
