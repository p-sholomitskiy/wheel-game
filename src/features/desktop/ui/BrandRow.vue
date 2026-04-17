<template>
  <div class="brand-row" aria-label="Partner logos">
    <img class="brand-row__logo brand-row__logo--wowbet" src="/desktop/logo-wowbet.svg" alt="Wowbet" />
    <img class="brand-row__logo brand-row__logo--volcano" src="/desktop/logo-coin-volcano.svg" alt="Coin Volcano" />
  </div>
</template>

<style scoped>
.brand-row {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  box-sizing: border-box;
}

.brand-row__logo {
  display: block;
  height: auto;
}

.brand-row__logo--wowbet {
  width: min(32vw, 210px);
}

.brand-row__logo--volcano {
  width: min(32vw, 210px);
}

@media (max-width: 900px) {
  .brand-row {
    gap: 16px;
  }

  .brand-row__logo--wowbet,
  .brand-row__logo--volcano {
    width: min(38vw, 170px);
  }
}
</style>
