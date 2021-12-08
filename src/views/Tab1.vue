<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="white">
        <ion-title>This has a sub tab</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/vue';

export default {
  components: { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonRouterOutlet },
}
</script>
