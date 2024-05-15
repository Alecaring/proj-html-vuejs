<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<template>
    <section class="ms_header-top ">
        <div class="d-flex justify-content-between container-fluid px-3 py-2">
            <div>
                <span class="mx-5"><a href=""><i class="fa-solid fa-location-dot mx-3"></i></a>7087 Richmond hwy, Alexandria, VA</span>
                <span><a href=""><i class="fa-solid fa-phone mx-3"></i></a>800-2345-6789</span>
            </div>
            <div>
                <a href=""><i class="fa-brands fa-facebook-f mx-3"></i></a> 
                <a href=""><i class="fa-brands fa-instagram mx-3"></i></a>
                <a href=""><i class="fa-brands fa-twitter mx-3"></i></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .ms_header-top{
        background-color: #f5f6f9;
    }
    .fa-solid{
        color: #09C2DD;
    }
    .fa-brands{
        color: white;
        background-color:#8B8E90;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-radius: 50%;
        font-size: .8rem;
    }
</style>

