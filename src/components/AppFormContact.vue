<script>
export default {
    components: {},
};
</script>
  
<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col-5 ps-4 py-5">
                <h2 class="fs-1">Contacts</h2>
                <ul class="list-group fs-5">
                    <li class="list-group-item border-0 py-3">
                        <span class="fw-bold pe-2">Adress:</span>
                        <address class="d-inline fw-lighter">11559 Ventura Boulevard, Studio City, CA 91604</address>
                    </li>
                    <li class="list-group-item border-0 py-3">
                        <span class="fw-bold pe-2">Phone:</span>
                        <a class="fw-lighter link-offset-2 link-underline link-underline-opacity-0"
                            href="tel:+15557486051">555.748.6051</a>
                    </li>
                    <li class="list-group-item border-0 py-3">
                        <span class="fw-bold pe-2">Fax:</span>
                        <a class="fw-lighter link-offset-2 link-underline link-underline-opacity-0"
                            href="#">555.748.6051</a>
                    </li>
                    <li class="list-group-item border-0 py-3">
                        <span class="fw-bold pe-2">E-mail:</span>
                        <a class="fw-lighter link-offset-2 link-underline link-underline-opacity-0"
                            href="mailto:quickwind@demolink.org">quickwind@demolink.org</a>
                    </li>
                    <li class="list-group-item border-0 py-3">
                        <span>
                            <a class="link-offset-2 link-underline link-underline-opacity-0" href="#"><i
                                    class="text-primary px-3 fs-5 bi bi-facebook"></i></a>
                            <a class="link-offset-2 link-underline link-underline-opacity-0" href="#"><i
                                    class="text-primary px-3 fs-5 bi bi-twitter"></i></a>
                            <a class="link-offset-2 link-underline link-underline-opacity-0" href="#"><i
                                    class="text-primary px-3 fs-5 bi bi-instagram"></i></a>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="col-7 d-flex flex-column p-5">
                <h2 class="fs-1">Send us a message</h2>
                <!-- full name -->
                <label class="fw-bold py-3 text-light-emphasis fs-5 pt-4" for="fullName">Full Name</label>
                <input class="py-2 mb-1" type="text" id="fullName">

                <!-- e-mail -->
                <label class="fw-bold py-3 text-light-emphasis fs-5 pt-4" for="E-mail">E-mail</label>
                <input class="py-2 mb-1" type="text" id="E-mail">

                <!-- company -->
                <label class="fw-bold py-3 text-light-emphasis fs-5 pt-4" for="company">Company</label>
                <input class="py-2 mb-1" type="text" id="company">

                <!-- subject -->
                <label class="fw-bold py-3 text-light-emphasis fs-5 pt-4" for="subject">Subject</label>
                <input class="py-2 mb-1" type="text" id="subject">

                <!-- your message -->
                <label class="fw-bold py-3 text-light-emphasis fs-5 pt-4" for="message">Your Message</label>
                <textarea name="" id="message" rows="5"></textarea>

                <div>
                    <!-- btn -->
                    <button class="btn bg-info text-white my-5 px-4 py-2 fw-bold">Send</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>