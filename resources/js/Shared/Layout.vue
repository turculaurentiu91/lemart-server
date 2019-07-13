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

        <div v-if="isNavOpened" style="margin-top: 10vh" class="w3-container">
            Registrato come: <br>
            {{ $page.user.name }} <br>
            {{ $page.user.email }} <br> <br>
            <inertia-link class="w3-button w3-light-gray" href="/logout" method="post">Logout</inertia-link>

        </div>

        <div style="margin-top: 20vh">
            <inertia-link
            href="/home"
            class="w3-bar-item w3-button w3-hover-gray"
            :class="{'w3-light-gray': path === '/home' || path === '/'}"
            >
            <i class="fa fa-home w3-xxlarge"></i>
            <span v-if="isNavOpened" class="w3-large">Acasa</span>
            </inertia-link>

            <inertia-link
            href="/users"
            class="w3-bar-item w3-button w3-hover-gray"
            :class="{'w3-light-gray': path === '/users'}"
            >
            <i class="fa fa-users w3-xxlarge"></i>
            <span v-if="isNavOpened" class="w3-large">Amministratori</span>
            </inertia-link>

            <inertia-link
            href="/standard-requests"
            class="w3-bar-item w3-button w3-hover-gray w3-display-container"
            :class="{'w3-light-gray': path === '/standard-requests'}"
            >
            <i class="fa fa-upload w3-xxlarge"></i>
            <span v-if="isNavOpened" class="w3-large">Richeste</span>
            <span
                v-if="$page.user.unreadStandardRequests.length > 0"
                class="w3-badge w3-red"
                :class="{'w3-display-topright w3-small' : isNavClosed}"
                style="margin: 3px;"
                >
                {{$page.user.unreadStandardRequests.length}}
            </span>
            </inertia-link>

            <inertia-link
            href="/express-requests"
            class="w3-bar-item w3-button w3-hover-gray w3-display-container"
            :class="{'w3-light-gray': path === '/express-requests'}"
            >
            <i class="fa fa-truck w3-xxlarge"></i>
            <span v-if="isNavOpened" class="w3-large">Richeste Express</span>
            <span
                v-if="$page.user.unreadExpressRequests.length > 0"
                class="w3-badge w3-red"
                :class="{'w3-display-topright w3-small' : isNavClosed}"
                style="margin: 3px;"
                >
                {{$page.user.unreadExpressRequests.length}}
            </span>
            </inertia-link>

            <inertia-link
            href="/push-notifications/create"
            class="w3-bar-item w3-button w3-hover-gray"
            :class="{'w3-light-gray': path === '/push-notifications/create'}"
            >
            <i class="fa fa-bell w3-xxlarge"></i>
            <span v-if="isNavOpened" class="w3-large">Notifiche Push</span>
            </inertia-link>
        </div>
    </nav>


    <div
        class="page"
        :class="{'page--nav-closed': isNavClosed, 'page--nav-opened': isNavOpened}"
    >
        <transition name="fade">
            <div class="overlay" v-if="isNavOpened"></div>
        </transition>

        <header>
            <h1 class="w3-green w3-padding">
            <span style="font-family: Times New Roman">Lemart &amp; Lemart</span> Express Control Panel
            </h1>
        </header>

        <div v-for="(value, name) in $page.flash" :key="name">
            <div
                v-if="value && displayFlashMessages.indexOf(name) !== -1"
                class="w3-card-4 flash-message w3-border-blue w3-leftbar w3-padding w3-display-container"
            >
                {{value}}
                <span
                    class="w3-button w3-display-right"
                    @click="displayFlashMessages = displayFlashMessages.filter(msgName => msgName !== name)"
                >&times;</span>
            </div>
        </div>

      <div class="w3-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>

    .flash-message {
        width: 90%;
        margin-left: 3%;
    }

    body {
        background-color: lightgray;
        margin: 8px;
    }

    .page {
        position: relative;
        transition: margin-left .5s;
    }

    .page--nav-closed {
        margin-left: 70px;
    }

    .page--nav-opened {
        margin-left: 20%;
    }

    .sidebar {
        width: 20%;
        transition: all .5s;
    }

    .sidebar--closed {
        width: 70px;
        text-align: center;
    }

    .overlay { display: none;}

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

     @media screen and (max-width: 768px) {
        .page--nav-opened {
            margin-left: 7px;
        }

        .sidebar {
            width: 70%;
            z-index: 20;
        }

        .sidebar--closed {
        width: 70px;
        text-align: center;
        }

        .overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .8);
            z-index: 10;
        }
    }


</style>

<script>
export default {
  data: function() {
    return {
      isNavClosed: true,
      displayFlashMessages: Object.keys(this.$page.flash),
    };
  },

  methods: {
    toggleNav: function() { this.isNavClosed = !this.isNavClosed },
  },

  computed: {
    isNavOpened: function() { return !this.isNavClosed; },
    path: function() { return window.location.pathname; },
  },
}
</script>


