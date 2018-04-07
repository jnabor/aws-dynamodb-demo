<template>
 <v-card class="transparent ma-5 pa-1 elevation-0">
  <v-form v-model="valid0" ref="form" lazy-validation>
    <v-text-field
      label="Key: Artist"
      v-model="artist">
    </v-text-field>
    <v-text-field
      label="Key: Song Title"
      v-model="songtitle">
    </v-text-field>
    <v-btn @click.native="additem()">Submit</v-btn>
  </v-form>
  <v-card-text>
    {{ response }}
  </v-card-text>
</v-card>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      artist: '',
      songtitle: '',
      response: '',
      valid0: false
    }
  },
  methods: {
    additem: function () {
      axios.get('/getitem')
        .then(res => {
          console.log('Response:')
          console.log(res)
          this.response = res
        })
        .catch(err => {
          console.log('Error:')
          console.log(err)
          this.response = 'error!'
        })
    }
  }
}
</script>
<style scoped>
</style>
