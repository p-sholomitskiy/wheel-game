<template>
  <div class="chips-layer" aria-hidden="true">
    <img v-for="chip in chips" :key="chip.id" class="chip" :class="chip.className" :src="chip.src" alt="" />
  </div>
</template>

<script setup lang="ts">
import { chips } from "../constants/chips";
</script>

<style scoped>
.chips-layer { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.chip { position: absolute; top: -18%; width: clamp(48px, 6vw, 86px); height: auto; opacity: 0.95; will-change: transform; animation-timing-function: linear; animation-iteration-count: infinite; }
.chip--1 { left: 2%; animation-name: chip-fall-1; animation-duration: 8.4s; animation-delay: -1.4s; }
.chip--2 { left: 8%; width: clamp(42px, 5vw, 72px); animation-name: chip-fall-2; animation-duration: 7s; animation-delay: -5.6s; }
.chip--3 { left: 14%; animation-name: chip-fall-3; animation-duration: 9.8s; animation-delay: -3.5s; }
.chip--4 { left: 20%; width: clamp(50px, 5.6vw, 80px); animation-name: chip-fall-4; animation-duration: 7.7s; animation-delay: -0.7s; }
.chip--5 { left: 26%; animation-name: chip-fall-5; animation-duration: 9.1s; animation-delay: -4.9s; }
.chip--6 { left: 32%; width: clamp(40px, 4.8vw, 68px); animation-name: chip-fall-6; animation-duration: 6.3s; animation-delay: -2.1s; }
.chip--7 { left: 38%; animation-name: chip-fall-7; animation-duration: 10.5s; animation-delay: -7s; }
.chip--8 { left: 44%; width: clamp(46px, 5.2vw, 74px); animation-name: chip-fall-8; animation-duration: 8.8s; animation-delay: -4.2s; }
.chip--9 { left: 50%; width: clamp(44px, 5.1vw, 76px); animation-name: chip-fall-4; animation-duration: 9.8s; animation-delay: -6.3s; }
.chip--10 { left: 56%; animation-name: chip-fall-2; animation-duration: 7s; animation-delay: -1.1s; }
.chip--11 { left: 62%; width: clamp(41px, 4.9vw, 70px); animation-name: chip-fall-6; animation-duration: 6.3s; animation-delay: -5.5s; }
.chip--12 { left: 68%; animation-name: chip-fall-1; animation-duration: 8.4s; animation-delay: -3.8s; }
.chip--13 { left: 74%; width: clamp(48px, 5.4vw, 78px); animation-name: chip-fall-8; animation-duration: 10.5s; animation-delay: -8.8s; }
.chip--14 { left: 80%; animation-name: chip-fall-3; animation-duration: 7.7s; animation-delay: -2.4s; }
.chip--15 { left: 86%; width: clamp(43px, 5vw, 73px); animation-name: chip-fall-5; animation-duration: 9.1s; animation-delay: -4.4s; }
.chip--16 { left: 93%; animation-name: chip-fall-7; animation-duration: 8.8s; animation-delay: -0.9s; }
@keyframes chip-fall-1 { 0% { transform: translate3d(-6px, -14vh, 0) rotate(-12deg); } 30% { transform: translate3d(24px, 26vh, 0) rotate(140deg); } 62% { transform: translate3d(-18px, 68vh, 0) rotate(320deg); } 100% { transform: translate3d(12px, 126vh, 0) rotate(520deg); } }
@keyframes chip-fall-2 { 0% { transform: translate3d(8px, -16vh, 0) rotate(20deg); } 25% { transform: translate3d(-20px, 22vh, 0) rotate(-110deg); } 55% { transform: translate3d(18px, 60vh, 0) rotate(210deg); } 100% { transform: translate3d(-12px, 124vh, 0) rotate(430deg); } }
@keyframes chip-fall-3 { 0% { transform: translate3d(-10px, -18vh, 0) rotate(-30deg); } 35% { transform: translate3d(28px, 30vh, 0) rotate(160deg); } 70% { transform: translate3d(-24px, 82vh, 0) rotate(380deg); } 100% { transform: translate3d(16px, 128vh, 0) rotate(620deg); } }
@keyframes chip-fall-4 { 0% { transform: translate3d(4px, -15vh, 0) rotate(8deg); } 22% { transform: translate3d(-26px, 18vh, 0) rotate(-90deg); } 58% { transform: translate3d(22px, 64vh, 0) rotate(190deg); } 100% { transform: translate3d(-16px, 126vh, 0) rotate(470deg); } }
@keyframes chip-fall-5 { 0% { transform: translate3d(-8px, -17vh, 0) rotate(-18deg); } 28% { transform: translate3d(20px, 24vh, 0) rotate(120deg); } 66% { transform: translate3d(-30px, 74vh, 0) rotate(340deg); } 100% { transform: translate3d(10px, 125vh, 0) rotate(560deg); } }
@keyframes chip-fall-6 { 0% { transform: translate3d(10px, -13vh, 0) rotate(24deg); } 32% { transform: translate3d(-18px, 28vh, 0) rotate(-130deg); } 72% { transform: translate3d(26px, 86vh, 0) rotate(260deg); } 100% { transform: translate3d(-8px, 123vh, 0) rotate(450deg); } }
@keyframes chip-fall-7 { 0% { transform: translate3d(-4px, -18vh, 0) rotate(-22deg); } 26% { transform: translate3d(30px, 20vh, 0) rotate(115deg); } 54% { transform: translate3d(-16px, 58vh, 0) rotate(250deg); } 100% { transform: translate3d(22px, 127vh, 0) rotate(600deg); } }
@keyframes chip-fall-8 { 0% { transform: translate3d(6px, -14vh, 0) rotate(14deg); } 33% { transform: translate3d(-24px, 32vh, 0) rotate(-120deg); } 63% { transform: translate3d(14px, 72vh, 0) rotate(210deg); } 100% { transform: translate3d(-20px, 126vh, 0) rotate(500deg); } }
@media (prefers-reduced-motion: reduce) { .chip { animation: none; transform: none; opacity: 0; visibility: hidden; } }
</style>
