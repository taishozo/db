<template>
  <div>
    <v-sheet color="grey">
      <v-carousel cycle height="600" show-arrows-on-hover>
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide"
          contain
        >
        </v-carousel-item>
      </v-carousel>
    </v-sheet>

    <v-container class="my-10">
      <h3 class="mb-5">『大正新脩大蔵経』底本・校本データベースへようこそ</h3>
      <p>『大正新脩大蔵経』底本・校本データベースへようこそ。</p>
      <p>以下からお試しください。</p>
      <v-btn
        class="mr-1"
        dark
        color="primary"
        :to="
          localePath({
            name: 'search',
          })
        "
      >
        <v-icon>mdi-magnify</v-icon> {{ $t('search') }}
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Page extends Vue {
  head() {
    return {
      titleTemplate: null,
    }
  }

  slides: string[] = [
    process.env.BASE_URL + '/img/kandomokuroku DB_img 005.jpg',
    process.env.BASE_URL + '/img/kandomokuroku DB_img 001.jpg',
  ]
}
</script>
