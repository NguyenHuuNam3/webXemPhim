<template>
    <div class="my-4">
        <div class="text-primary-lightWhite text-center w-full block font-medium text-xs flex justify-center items-center">
            <span class="mr-2">GitHub:</span>
            <a class="hover:text-primary-hoverText w-auto" href="https://nguyenhuunam3.github.io">
                <GithubOutlined class="text-xl flex"/>
            </a>
        </div>

        <div class="mt-3 text-primary-lightWhite text-center w-full block font-medium text-xs flex justify-center items-center">
            <span class="mr-2">Gmail:</span>
            <a class="hover:text-primary-hoverText" href="https://mail.google.com/" onclick="copyEmail()">nhnam4411@gmail.com</a>
        </div>
    </div>
    <span class="text-primary-lightWhite text-center w-full block font-medium text-xs">© Copyright 2024 designed by Nam</span>
</template>

<script>
    import { GithubOutlined } from '@ant-design/icons-vue'
    function copyEmail() {
        const email = "nhnam4411@gmail.com";
        navigator.clipboard.writeText(email).then(function() {
            alert('đã copy')
        }, function(err) {
            console.error('không copy được', err)
        });
    }

    export default {
        name: 'Footer',
        components: {
            GithubOutlined,
        }
    };
</script>
