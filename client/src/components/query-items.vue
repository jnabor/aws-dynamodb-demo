<template>
 <v-card class="transparent ma-5 pa-1 elevation-0">
  <v-form v-model="valid0" ref="form" lazy-validation>
     <v-text-field
      label="Key: Artist"
      v-model="artist">
    </v-text-field>
    <v-btn @click.native="queryitems()">Query Items</v-btn>
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
      response: '',
      valid0: false
    }
  },
  methods: {
    queryitems: function () {
      let payload = {
        Type: 'Query',
        ExpressionAttributeValues: {
          ':v1': {
            S: this.artist
          }
        },
        KeyConditionExpression: 'Artist = :v1',
        ReturnConsumedCapacity: 'TOTAL',
        TableName: 'aws-dynamodb-dev-sample-table'
      }
      axios.post('/queryitems', payload)
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
