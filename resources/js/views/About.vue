<template>
  <div>
    <div class="about container" v-if="!$gate.isAdmin()">
      <h2>You do not have permission to access about...</h2>
    </div>
    <div class="about container" v-if="$gate.isAdmin()">
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <div class="add_some">
            pls, add something...
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            amet magnam, architecto molestias, atque molestiae dolores eius
            aliquid voluptate quia consequatur maxime, esse aut quam animi totam
            quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad
            voluptates error reprehenderit rem rerum sit harum tempora, in illo
            commodi nam earum impedit, officiis magnam natus incidunt quam est
            accusantium ducimus veniam eius at! Dicta ipsam repellendus velit
            laboriosam magnam ratione ullam, sapiente mollitia exercitationem,
            blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora
            reprehenderit totam rerum optio reiciendis laudantium quo maxime!
            Aliquam inventore magnam alias saepe recusandae quis eum sapiente
            similique fugit culpa maxime id fuga molestias iure ratione voluptatum
            quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio
            dolore dolorum. Totam dicta earum aliquid ea doloribus maiores
            quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat
            aut similique placeat pariatur facilis sequi iure sit quaerat corporis
            incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro
            magnam est, praesentium recusandae similique harum vitae possimus
            quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit
            debitis temporibus totam velit nisi, architecto dolore? Fuga molestias
            alias dolorum ipsum tempore, aut ab, velit saepe facilis quos
            cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam
            maiores officia.
          </p>
        </div>
        <div class="col-md-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            amet magnam, architecto molestias, atque molestiae dolores eius
            aliquid voluptate quia consequatur maxime, esse aut quam animi totam
            quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad
            voluptates error reprehenderit rem rerum sit harum tempora, in illo
            commodi nam earum impedit, officiis magnam natus incidunt quam est
            accusantium ducimus veniam eius at! Dicta ipsam repellendus velit
            laboriosam magnam ratione ullam, sapiente mollitia exercitationem,
            blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora
            reprehenderit totam rerum optio reiciendis laudantium quo maxime!
            Aliquam inventore magnam alias saepe recusandae quis eum sapiente
            similique fugit culpa maxime id fuga molestias iure ratione voluptatum
            quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio
            dolore dolorum. Totam dicta earum aliquid ea doloribus maiores
            quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat
            aut similique placeat pariatur facilis sequi iure sit quaerat corporis
            incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro
            magnam est, praesentium recusandae similique harum vitae possimus
            quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit
            debitis temporibus totam velit nisi, architecto dolore? Fuga molestias
            alias dolorum ipsum tempore, aut ab, velit saepe facilis quos
            cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam
            maiores officia.
          </p>
        </div>
        <div class="col-md-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            amet magnam, architecto molestias, atque molestiae dolores eius
            aliquid voluptate quia consequatur maxime, esse aut quam animi totam
            quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad
            voluptates error reprehenderit rem rerum sit harum tempora, in illo
            commodi nam earum impedit, officiis magnam natus incidunt quam est
            accusantium ducimus veniam eius at! Dicta ipsam repellendus velit
            laboriosam magnam ratione ullam, sapiente mollitia exercitationem,
            blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora
            reprehenderit totam rerum optio reiciendis laudantium quo maxime!
            Aliquam inventore magnam alias saepe recusandae quis eum sapiente
            similique fugit culpa maxime id fuga molestias iure ratione voluptatum
            quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio
            dolore dolorum. Totam dicta earum aliquid ea doloribus maiores
            quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat
            aut similique placeat pariatur facilis sequi iure sit quaerat corporis
            incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro
            magnam est, praesentium recusandae similique harum vitae possimus
            quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit
            debitis temporibus totam velit nisi, architecto dolore? Fuga molestias
            alias dolorum ipsum tempore, aut ab, velit saepe facilis quos
            cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam
            maiores officia.
          </p>
        </div>
        <div class="col-md-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            amet magnam, architecto molestias, atque molestiae dolores eius
            aliquid voluptate quia consequatur maxime, esse aut quam animi totam
            quae quibusdam placeat ea adipisci debitis consectetur quaerat! Ad
            voluptates error reprehenderit rem rerum sit harum tempora, in illo
            commodi nam earum impedit, officiis magnam natus incidunt quam est
            accusantium ducimus veniam eius at! Dicta ipsam repellendus velit
            laboriosam magnam ratione ullam, sapiente mollitia exercitationem,
            blanditiis quaerat quasi, quam perspiciatis dolorem asperiores tempora
            reprehenderit totam rerum optio reiciendis laudantium quo maxime!
            Aliquam inventore magnam alias saepe recusandae quis eum sapiente
            similique fugit culpa maxime id fuga molestias iure ratione voluptatum
            quisquam, ex necessitatibus pariatur quos consequuntur fugiat odio
            dolore dolorum. Totam dicta earum aliquid ea doloribus maiores
            quaerat? Repudiandae nihil corrupti voluptas doloribus saepe fugiat
            aut similique placeat pariatur facilis sequi iure sit quaerat corporis
            incidunt perferendis debitis ut mollitia, quae totam quos. Dolor porro
            magnam est, praesentium recusandae similique harum vitae possimus
            quidem omnis voluptas corporis ea, ullam fugiat aperiam reprehenderit
            debitis temporibus totam velit nisi, architecto dolore? Fuga molestias
            alias dolorum ipsum tempore, aut ab, velit saepe facilis quos
            cupiditate veritatis aperiam ea adipisci? Ex placeat incidunt ipsam
            maiores officia.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <div class="add_some">
            pls, add something...
          </div>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-lg btn-danger" @click="doSome">Click</button>
      </div>
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {
    //
  },
  methods: {
    doSome() {
      //alert("***************");
      // eslint-disable-next-line no-undef
      $(".add_some").append("hehe....");
    }
  },
  mounted() {
    this.doSome();
  },
  //before the route is mounted we check if the user is logged in
        beforeRouteEnter (to, from, next) {
            if (!window.Laravel.isLoggedin) {                    
                //return next('/');
                return next('/login');
            }
            next();
        }           
};
</script>

