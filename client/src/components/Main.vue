<template>
 <v-container grid-list-md>
    <v-layout row justify-center>
      <v-flex xs8>
        <v-card class="mt-5">
          <v-toolbar tabs class="elevation-0">
            <v-toolbar-title>AWS DynamoDB Demo</v-toolbar-title>
            <v-tabs
              centered
              slot="extension"
              v-model="model">
              <v-tab>Add Item</v-tab>
              <v-tab>Update Item</v-tab>
              <v-tab>Delete Item</v-tab>
              <v-tab>Get Item</v-tab>
              <v-tab>Query</v-tab>
              <v-tab>Scan</v-tab>
            </v-tabs>
          </v-toolbar>
          <v-card-text>
            <div v-if="model === '0'">
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
                  Artist      : {{ artist }} <br/>
                  Album Title : {{ albumtitle }} <br/>
                  Song Title  : {{ songtitle }} <br/>
                  <v-btn @click.native="additem()">Submit</v-btn>
                </v-form>
              </v-card>
            </div>
            <div v-if="model === '1'">
              Update Item
            </div>
            <div v-if="model === '2'">
              Delete Item
            </div>
            <div v-if="model === '3'">
              Get Item
            </div>
            <div v-if="model === '4'">
              Query
            </div>
            <div v-if="model === '5'">
              Scan
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container>
</template>

<script>
import * as config from './config'
import axios from 'axios'

export default {
  data () {
    return {
      active: null,
      model: '0',
      artist: '',
      albumtitle: '',
      songtitle: '',
      year: '',
      genre: '',
      votes: '',
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
      console.log('post rquest to ' + endpoint)
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
