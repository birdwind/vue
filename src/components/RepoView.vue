<template>
  <div v-scroll="handleScroll" id="main">
    <ul>
      <li v-for="(item, index) in showRepoList" :key='index' style="list-style-type:none;">
        <v-card class="mx-auto" width="90%" height="90vh" style = "margin-top:5vh;" >
          <v-card-text>
            <p class="display-1 text--primary">
              {{item.name}}
            </p>
            <p>{{item.html_url}}</p>
            <div class="text--primary">
              {{item.description}}
            </div>
          </v-card-text>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RepoView',
  components: {
    },
  data() {
        return {
            ratio: 0.05,
            positionX: "50%",
            positionY1: 30,
            positionY2: 100,
            positionY3: 150,
            Y1: 0,
            Y2: 0,
            Y3: 0,
            titlePositon: "static",
            titleColor: "transparent",
            titleBorder:"0",
            item: 1,
            repoList: null,
            showRepoList: null
        };
    },
  mounted() {
        this.getGoodLists();
        window.addEventListener("scroll", this.handleScroll);
        window.onload = () => {
          this.showRepoList = new Array();
          this.showRepoList.push(this.repoList[0])
        };
    },
  methods: {
    getGoodLists() {
      axios.get('https://api.github.com/users/birdwind/repos').then((response) => {
        let res = response.data;
        if(res) this.repoList = res;
      })
    },
    handleScroll() {
      const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      const { innerHeight } = window;
      const { offsetHeight } = document.documentElement;
      if (scrollTop + innerHeight + 1 > offsetHeight) {
        if(this.item < this.repoList.length){
          this.showRepoList.push(this.repoList[this.item]);
          this.item ++;
        }
      }
      return this.noData;
    }
  }
}
</script>