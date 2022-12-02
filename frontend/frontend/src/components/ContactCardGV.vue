<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
};
</script>
<template class="card border-primary mb-3" style="max-width: 20rem;">
    <div class="card-body">
        <div>
            <img :src= 'contact.hinhgv' width="200" height="200">
        </div>
        <div class="p-1">
            <strong class="card-text">Tên:</strong>
            {{ contact.namegv }}
        </div>
        <div class="p-1">
            <strong class="card-text">E-mail:</strong>
            {{ contact.emailgv }}
        </div>
        <div class="p-1">
            <strong class="card-text">MSGV:</strong>
            {{ contact.msgv }}
        </div>
        <div class="p-1">
            <strong class="card-text">Thuộc Khoa:</strong>
            {{ contact.khoa }}
        </div>
        <div class="p-1">
            <strong class="card-text">Dạy Môn:</strong>
            {{ contact.mon }}
        </div>
        <div class="p-1">
            <strong class="card-text">Điện thoại:</strong>
            {{ contact.phonegv }}
        </div>
       
    </div>
</template>