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
              <add-item></add-item>
            </div>
            <div v-if="model === '1'">
              <update-item></update-item>
            </div>
            <div v-if="model === '2'">
              <delete-item></delete-item>
            </div>
            <div v-if="model === '3'">
              <get-item></get-item>
            </div>
            <div v-if="model === '4'">
              <query-items></query-items>
            </div>
            <div v-if="model === '5'">
              <scan-items></scan-items>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container>
</template>

<script>
import addItem from './add-item'
import updateItem from './update-item'
import deleteItem from './delete-item'
import getItem from './get-item'
import queryItems from './query-items'
import scanItems from './scan-items'

export default {
  components: {
    'add-item': addItem,
    'update-item': updateItem,
    'delete-item': deleteItem,
    'get-item': getItem,
    'query-items': queryItems,
    'scan-items': scanItems
  },
  data () {
    return {
      active: null,
      model: '0'
    }
  }
}
</script>

<style scoped>

</style>
