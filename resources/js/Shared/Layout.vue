<template>
  <div class="w3-white template" style="">

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

        <transition name="profile-tr">
            <div v-if="isNavOpened" style="margin-top: 10vh" class="w3-container">
                Registrato come: <br>
                {{ $page.user.name }} <br>
                {{ $page.user.email }} <br> <br>
                <inertia-link class="w3-button w3-light-gray" href="/logout" method="post">Logout</inertia-link>

            </div>
        </transition>

        <div :style="{marginTop: isNavClosed ? '20vh' : '5vh'}">
            <inertia-link
            href="/home"
            class="w3-bar-item w3-button w3-hover-gray"
            :class="{'w3-light-gray active-link': path === '/home' || path === '/'}"
            >
            <i class="fa fa-home w3-xxlarge"></i>
            <transition name="nav-text-tr"><span v-if="isNavOpened" class="w3-large">Acasa</span></transition>
            </inertia-link>

            <inertia-link
            href="/users"
            class="w3-bar-item w3-button w3-hover-gray"
            :class="{'w3-light-gray active-link': path === '/users'}"
            >
            <i class="fa fa-users w3-xxlarge"></i>
            <transition name="nav-text-tr"><span v-if="isNavOpened" class="w3-large">Amministratori</span></transition>
            </inertia-link>

            <inertia-link
            href="/standard-requests"
            class="w3-bar-item w3-button w3-hover-gray w3-display-container"
            :class="{'w3-light-gray active-link': path === '/standard-requests'}"
            >
            <i class="fa fa-upload w3-xxlarge"></i>
            <transition name="nav-text-tr"><span v-if="isNavOpened" class="w3-large">Richeste</span></transition>
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
            :class="{'w3-light-gray active-link': path === '/express-requests'}"
            >
            <i class="fa fa-truck w3-xxlarge"></i>
            <transition name="nav-text-tr"><span v-if="isNavOpened" class="w3-large">Richeste Express</span></transition>
            <span
                v-if="$page.user.unreadExpressRequests.length > 0"
                class="w3-badge w3-red"
                :class="{'w3-display-topright w3-small' : isNavClosed}"
                style="margin: 3px;"
                >
                {{$page.user.unreadExpressRequests.length}}
            </span>
            </inertia-link>

            <div class="w3-dropdown-hover">
                <inertia-link
                    href="/easypress"
                    class="w3-bar-item w3-button w3-hover-gray w3-display-container"
                    :class="{'w3-light-gray active-link': path === '/easypress' || path === '/easypress-price-rules'}"
                >
                    <i class="fa fa-etsy w3-xxlarge"></i>
                    <transition name="nav-text-tr"><span v-if="isNavOpened" class="w3-large">Easypress</span></transition>
                    <span
                        v-if="$page.user.unreadEasypressRequests.length > 0"
                        class="w3-badge w3-red"
                        :class="{'w3-display-topright w3-small' : isNavClosed}"
                        style="margin: 3px;"
                    >
                        {{$page.user.unreadEasypressRequests.length}}
                    </span>
                </inertia-link>
                    <div v-if="isNavOpened" class="w3-dropdown-content w3-bar-block w3-card-4">
                        <inertia-link
                            href="/easypress"
                            class="w3-bar-item w3-button"
                            :class="{'w3-gray' : path === '/easypress'}"
                        >
                            Preventivi Easypress
                        </inertia-link>
                        <inertia-link
                            href="/easypress-price-rules"
                            class="w3-bar-item w3-button"
                            :class="{'w3-gray' : path === '/easypress-price-rules'}"
                        >
                            Regole Prezzi
                        </inertia-link>
                    </div>
            </div>

            <inertia-link
            href="/push-notifications/create"
            class="w3-bar-item w3-button w3-hover-gray"
            :class="{'w3-light-gray active-link': path === '/push-notifications/create'}"
            >
            <i class="fa fa-bell w3-xxlarge"></i>
            <transition name="nav-text-tr"><span v-if="isNavOpened" class="w3-large">Notifiche Push</span></transition>
            </inertia-link>
        </div>
    </nav>

    <transition name="fade">
        <div class="overlay" v-if="isNavOpened"></div>
    </transition>

    <div
        class="page"
        :class="{'page--nav-closed': isNavClosed, 'page--nav-opened': isNavOpened}"
    >

        <header>
            <h1 class="w3-padding">
            <span style="font-family: Times New Roman">Lemart &amp; Lemart</span> Express Control Panel
            </h1>
        </header>

        <div v-for="(value, name) in $page.flash" :key="name">
          <transition name="fade">
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
          </transition>
        </div>

      <div class="w3-container w3-animate-opacity">
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
        background: linear-gradient(to left, #4CAF50 20vw, #EEE 20.2vw);
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
        margin-left: 20rem;
    }

    .sidebar {
        width: 20rem;
        transition: all .5s;
        position: absolute!important;
    }

    .template {
        min-height: calc(100vh - 20px);
        width: 80vw;
        margin: 10vh auto;
        position: relative;
        border: 1px solid #999;
        box-shadow: 7px 15px 10px rgba(0, 0, 0, .3);
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

    .nav-text-tr-enter-active {
        transition: opacity .2s;
        transition-delay: .5s;
    }

    .nav-text-tr-enter{
        opacity: 0;
    }

    .profile-tr-enter-active {
        transition: all .2s;
        transition-delay: .5s;
    }

    .profile-tr-enter {
        height: 0%;
        opacity: 0;
    }

    .w3-dropdown-content {
        display: block;
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
        transition: transform, opacity .2s;
    }

    .w3-dropdown-hover:hover .w3-dropdown-content {
        display: block;
        transform: scaleY(1);
        opacity: 1;
    }

    .active-link {
        animation: active-link-anim 1s ease-in-out;
    }

    @keyframes active-link-anim {
        from {
          background-color: #4CAF50;
        }
        to {
          background-color: #F1F1F1;
        }
    }

     @media screen and (max-width: 768px) {

         h1 {
             font-size: 2rem;
         }

        .template {
            margin: 5vh auto;
            width: 90vw;
        }

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
      isNavClosed: Boolean(Number(localStorage.getItem('isNavClosed'))),
      displayFlashMessages: Object.keys(this.$page.flash),
    };
  },

  methods: {
    toggleNav: function() {
      this.isNavClosed = !this.isNavClosed;
      localStorage.setItem('isNavClosed', Number(this.isNavClosed));
    },
  },

  computed: {
    isNavOpened: function() { return !this.isNavClosed; },
    path: function() { return window.location.pathname; },
  },
}
</script>


