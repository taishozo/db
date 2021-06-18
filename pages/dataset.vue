<template>
  <div>
    <v-container>
      <h2 class="text-center my-5">{{ $t('dataset') }}</h2>

      <v-row>
        <v-col v-for="(item, key) in items" :key="key" cols="12" sm="3">
          <v-card>
            <div class="pa-4">
              <a :href="item.url">
                <h3>{{ item.label }}</h3>
              </a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
// import axios from 'axios'
@Component
export default class Volumes extends Vue {
  baseUrl: any = process.env.BASE_URL
  head() {
    return {
      title: this.$t('dataset'),
    }
  }

  get items() {
    return [
      {
        label: '酉蓮社画像 ' + this.$t('iiif_collection'),
        url:
          'https://www.kanzaki.com/works/2016/pub/image-annotator?u=' +
          process.env['u-renja'] +
          '/iiif/collection/top.json',
      },
      {
        label: '大正新脩大蔵経勘同目録 IIIFマニフェスト',
        url:
          'https://www.kanzaki.com/works/2016/pub/image-annotator?u=' +
          process.env.BASE_URL +
          '/iiif/kandomokuroku/manifest.json',
      },
    ]
  }
}
</script>
