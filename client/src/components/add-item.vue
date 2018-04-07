<template>
 <v-card class="transparent ma-5 pa-1 elevation-0">
  <v-form v-model="valid0" ref="form" lazy-validation>
    <v-text-field
      label="Artist"
      v-model="artist">
    </v-text-field>
    <v-text-field
      label="Album Title"
      v-model="albumtitle">
    </v-text-field>
    <v-text-field
      label="Song Title"
      v-model="songtitle">
    </v-text-field>
    <v-btn @click.native="additem()">Submit</v-btn>
  </v-form>
</v-card>
</template>

<script>
import * as config from './config'
import axios from 'axios'

export default {
  data () {
    return {
      artist: '',
      albumtitle: '',
      songtitle: '',
      valid0: false
    }
  },
  methods: {
    additem: function () {
      let endpoint = config.apiPostAddItem
      let payload = {
        Item: {
          AlbumTitle: {
            S: this.albumtitle
          },
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
      axios.post(endpoint, payload)
        .then(res => {
          console.log('Response:')
          console.log(res)
        })
        .catch(err => {
          console.log('Error:')
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
</style>
