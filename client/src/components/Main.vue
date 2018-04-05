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
              Add Item
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
export default {
  data () {
    return {
      active: null,
      model: '0',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style scoped>

</style>
