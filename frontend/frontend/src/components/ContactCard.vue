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
            <img :src= 'contact.hinhsv' width="200" height="200">
        </div>
        <div class="p-1">
            <strong class="card-text">Tên:</strong>
            {{ contact.name }}
        </div>
        <div class="p-1" >
            <strong class="card-text">E-mail:</strong>
            {{ contact.email }}
        </div>
        <div class="p-1">
            <strong class="card-text">MSSV:</strong>
            {{ contact.mssv }}
        </div>
        <div class="p-1">
            <strong class="card-text">Học Ngành:</strong>
            {{ contact.nganh }}
        </div>
        <div class="p-1">
            <strong class="card-text">Điện thoại:</strong>
            {{ contact.phone }}
        </div>
    </div>
</template>