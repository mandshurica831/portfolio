<template>
  <div>
    <h1>Profile</h1>
    <div>
      <div class="icon">
        <img src="@/assets/images/icon.jpg" alt="" width="200" />
      </div>
      <h2>田中 りえ</h2>
      <p>
        インテリア通販会社でECサイトの商品ページ制作を約2年、<br />
        ゲーム会社のブラウザゲーム開発（UI制作/フロントエンド）を8年経験<br />
      </p>
    </div>
    <div class="gray">
      <h1>Skill</h1>
      <p>
        HTML/CSS/Javascript　★★★★☆<br />
        jQuery　★★★★☆<br />
        Ruby on Rails　★★★☆☆<br />
        TypeScript　★★☆☆☆<br />
        Node.js　★★☆☆☆<br />
        <br />
        Adobe Photoshop　★★★★☆<br />
        Adobe Illustrator　★★★★☆<br />
        Adobe Animate　★★★☆☆<br />
        Adobe AfterEffects　★★☆☆☆<br />
        Spine　★★☆☆☆<br />
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0 auto 1em;
  border-radius: 9999px;
  padding: 0;
}
div {
  margin-bottom: 0.7em;
  padding: 1em;
  position: relative;

  &.gray {
    padding: 1.5em;
    &:before {
      position: absolute;
      content: '';
      width: 200vw;
      height: 100%;
      background: #f8f8f8;
      z-index: -2;
      left: -30vw;
      top: 0;
    }
  }
}
</style>
