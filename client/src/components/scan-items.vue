<template>
 <v-card class="transparent ma-5 pa-1 elevation-0">
  <v-form v-model="valid0" ref="form" lazy-validation>
    <v-btn @click.native="scanitems()">Scan Items</v-btn>
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
    scanitems: function () {
      let payload = {
        ReturnConsumedCapacity: 'TOTAL',
        TableName: 'aws-dynamodb-dev-sample-table'
      }
      axios.post('/scanitems', payload)
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
