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
    <v-btn @click.native="getitem()">Submit</v-btn>
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
      artist: 'Myles Kennedy',
      songtitle: 'Love can Only Heal',
      response: '',
      valid0: false
    }
  },
  methods: {
    getitem: function () {
      let payload = {
        Key: {
          Artist: {
            S: this.artist
          },
          SongTitle: {
            S: this.songtitle
          }
        },
        ReturnConsumedCapacity: 'TOTAL',
        TableName: 'aws-dynamodb-dev-sample-table'
      }
      axios.post('/getitem', payload)
        .then(res => {
          console.log('Response:')
          console.log(res)
          this.response = res.data
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
