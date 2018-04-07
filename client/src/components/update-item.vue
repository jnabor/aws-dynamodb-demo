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
    <v-text-field
      label="New: Album Title"
      v-model="albumtitle">
    </v-text-field>
    <v-text-field
      label="New: Year"
      v-model="year">
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
      songtitle: '',
      albumtitle: '',
      year: '',
      valid0: false
    }
  },
  methods: {
    additem: function () {
      let endpoint = config.apiPostEditItem
      let payload = {
        ExpressionAttributeNames: {
          '#AT': 'AlbumTitle',
          '#Y': 'Year'
        },
        ExpressionAttributeValues: {
          ':t': {
            S: this.albumtitle
          },
          ':y': {
            'N': this.year
          }
        },
        'Key': {
          Artist: {
            S: this.artist
          },
          SongTitle: {
            S: this.songtitle
          }
        },
        ReturnValues: 'ALL_NEW',
        ReturnConsumedCapacity: 'TOTAL',
        TableName: 'aws-dynamodb-dev-sample-table',
        UpdateExpression: 'SET #Y = :y, #AT = :t'
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
