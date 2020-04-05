<template>
  <v-card class="mx-auto" width="90%" height="90vh" style = "margin-top:5vh;" >
    <v-card-text>
      <div>{{projectName}}</div>
      <p class="display-1 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Cart',
  props:{
      item : String,
      projectName: String
  },
  data: function(){
    
    //   item = document.getElementsByTagName("v-card").prop("id");
      console.log(document.getElementsByClassName("mx-auto"));
    //   axios.get('https://api.github.com/users/birdwind/repos').then((response) => {
    //     let res = response.data;
    //     console.log(res[item]);
    //     if(res) this.repoList = new Array();
    //     this.repoList.push(res[item]);
    //     return res[item];
    //   })
    return {item2: 0}
  },
  
}
</script>
