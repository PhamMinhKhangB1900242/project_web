<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a href="/" class="navbar-brand"> Quản lý Thông Tin</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-link active">
                <router-link :to="{ name: 'contactsinhvien' }" class="nav-link">
                    Sinh Viên
             
                </router-link>
            </li>
            <li class="nav-link active">
                <router-link :to="{ name: 'contactgiaovien' }" class="nav-link">
                    Giáo Viên
                </router-link>
            </li>
        </div>
    </nav>
</template>