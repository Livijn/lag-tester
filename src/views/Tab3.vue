<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="white">
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="p-3 grid grid-cols-2 gap-x-3 gap-y-6">
        <div v-for="x in 10" :key="x">
          <div
            class="aspect-w-1 aspect-h-1 rounded bg-cover bg-center"
            :style="{ backgroundImage: `url(${image})` }"
          />

          <div class="mt-2 text-black font-bold">blabla</div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  components: { IonContent, IonHeader, IonToolbar, IonTitle, IonPage },
  setup() {
    return {
      image: 'https://images.unsplash.com/photo-1638825183364-01e8b64b00e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    }
  },
}
</script>
