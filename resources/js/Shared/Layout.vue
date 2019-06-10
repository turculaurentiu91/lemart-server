<template>
  <div class="w3-white page">
    <nav 
      class="w3-sidebar w3-bar-block sidebar w3-green w3-border-right"
      v-bind:class="{'sidebar--closed': isNavClosed}"  
    >
      <button 
        class="w3-xxlarge w3-padding w3-button w3-hover-green"
        v-bind:class="{'w3-display-topright': isNavOpened}"
        @click="toggleNav"  
      >
        <i v-if="isNavClosed" class="fa fa-bars"></i>
        <i v-if="isNavOpened" class="fa fa-times"></i>
      </button>

      <div v-if="isNavOpened" style="margin-top: 10vh">
        Registrato come: <br>
        {{ $page.user.name }} <br>
        {{ $page.user.email }}
      </div>

      <div style="margin-top: 20vh">
        <inertia-link 
          href="/home" 
          class="w3-bar-item w3-button w3-hover-gray"
          :class="{'w3-light-gray': path === '/home' || path === '/'}"
        >
          <i class="fa fa-home w3-xxlarge"></i> 
          <span v-if="isNavOpened" class="w3-xlarge">Acasa</span>
        </inertia-link>

        <inertia-link 
          href="/users" 
          class="w3-bar-item w3-button w3-hover-gray"
          :class="{'w3-light-gray': path === '/users'}"
        >
          <i class="fa fa-users w3-xxlarge"></i> 
          <span v-if="isNavOpened" class="w3-xlarge">Amministratori</span>
        </inertia-link>

        <inertia-link 
          href="/standard-requests" 
          class="w3-bar-item w3-button w3-hover-gray"
          :class="{'w3-light-gray': path === '/standard-requests'}"
        >
          <i class="fa fa-upload w3-xxlarge"></i> 
          <span v-if="isNavOpened" class="w3-xlarge">Richeste</span>
        </inertia-link>

        <inertia-link 
          href="/express-requests" 
          class="w3-bar-item w3-button w3-hover-gray"
          :class="{'w3-light-gray': path === '/express-requests'}"
        >
          <i class="fa fa-truck w3-xxlarge"></i> 
          <span v-if="isNavOpened" class="w3-xlarge">Richeste Express</span>
        </inertia-link>

        <inertia-link 
          href="/push-notifications/create" 
          class="w3-bar-item w3-button w3-hover-gray"
          :class="{'w3-light-gray': path === '/push-notifications/create'}"
        >
          <i class="fa fa-bell w3-xxlarge"></i> 
          <span v-if="isNavOpened" class="w3-xlarge">Notifiche Push</span>
        </inertia-link>
      </div>
    </nav>
    <div :style="{marginLeft: isNavClosed ? '70px' : '20%'}">
      <header>
        <h1 class="w3-green w3-padding"> 
          <span style="font-family: Times New Roman">Lemart &amp; Lemart</span> Express Control Panel
        </h1>
      </header>
      <div class="w3-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
  body {
    background-color: lightgray;
    margin: 8px;
  }

  .page {
    min-height: calc(100vh - 20px);
  }

  .sidebar {
    width: 20%;
  }

  .sidebar--closed {
    width: 70px;
    text-align: center;
  }
</style>

<script>
export default {
  data: function() {
    return {
      isNavClosed: true,
    };
  },

  methods: {
    toggleNav: function() { this.isNavClosed = !this.isNavClosed }
  },

  computed: {
    isNavOpened: function() { return !this.isNavClosed; },
    path: function() { return window.location.pathname; },
  }
}
</script>


