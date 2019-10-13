<template>
  <div class="container">
    <section id="about" class="section">
      <h2 class="content__title">About</h2>
      <p class="content__description">このサイトはWhyKのポートフォリオサイトです</p>
      <section class="section__sub">
        <h3 class="content__title-sub">Why? WhyK</h3>
        <dl>
          <dt>WhyK（ほわぁいけー）</dt>
          <dd>そこらへんのフロントエンドエンジニア。</dd>
          <dd>好きなものはVue SFCとアクセシビリティ。</dd>
          <dd>嫌いなものはメモ帳コーディング。</dd>
          <dd>Figmaでデザイン、VS Codeでコーディングするマン。</dd>
        </dl>
      </section>
    </section>
    <section id="work" class="section">
      <h2 class="content__title">Work</h2>
      <section class="section__sub">
        <h2>novel-support.js</h2>
        <img src="" alt="">
        <dl class="used-skill">
          <dt class="used-skill__title">使用技術</dt>
          <dd class="used-skill__item">TypeScript</dd>
          <dd class="used-skill__item">SCSS</dd>
        </dl>
        <p>カクヨムの特殊記法をベースとした小説投稿サイト特殊記法支援パッケージ</p>
        <ul class="content-link">
          <li class="content-link__item">
            <a class="content-link__href" href="https://github.com/windchime-yk/novel-support.js" target="_blank">
              GitHubで開く
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </a>
          </li>
        </ul>
      </section>
      <section class="section__sub">
        <h2>qr-code-generater</h2>
        <img src="" alt="">
        <dl class="used-skill">
          <dt class="used-skill__title">使用技術</dt>
          <dd class="used-skill__item">Vue</dd>
        </dl>
        <p>QRコードを発行するWebサービス</p>
        <ul class="content-link">
          <li class="content-link__item">
            <a class="content-link__href" href="https://github.com/windchime-yk/qr-code-generater" target="_blank">
              GitHubで開く
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </a>
          </li>
          <li class="content-link__item">
            <a class="content-link__href" href="https://qr-generate.whyk.dev" target="_blank">
              Webサービスを開く
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </a>
          </li>
        </ul>
      </section>
    </section>
    <section id="blog" class="section">
      <h2 class="content__title">Blog</h2>
      <p>ここに</p>
    </section>
    <section id="contact" class="section">
      <h2 class="content__title">Contact</h2>
      <ul class="content-contact">
        <li class="content-contact__item"><a class="content-contact__href content-contact__href--mail" href="mailto:windchimeyk@gmail.com"><font-awesome-icon :icon="['far', 'envelope']" /></a></li>
        <li class="content-contact__item"><a class="content-contact__href content-contact__href--twitter" href="https://twitter.com/windchime_yk" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
      </ul>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  @include mq() {
    padding-right: 20px;
    padding-left: 20px;
  }
}
.notice__wrap {
  text-align: center;
  color: white;
  border: 5px solid red;
  background: #f00;
  border-radius: 5px;
  width: 80%;
  margin: 10px auto;
  padding: 20px;
}

.section {
  margin-top:-100px;
  padding-top:100px;
  margin-bottom: 50px;
  @include mq {
    margin-top: 0;
    padding-top: 0;
  }
}

.section__sub {
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 10px;
}

.content__title {
  font-size: 4rem;
}
.content__title-sub {
  font-size: 3rem;
  margin-top: 20px;
}
.used-skill {
  margin-bottom: 20px;
}
.content-link {
  padding: 0;
  display: flex;
  margin-top: 10px;
  @include mq() {
    flex-direction: column;
  }
}
.content-link__item:not(:first-of-type) {
  margin-left: 10px;
  @include mq() {
    margin-left: 0;
    margin-top: 10px;
  }
}
.content-link__href {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  border-radius: 5px;
  &:hover {
    border-color: #999;
    background-color: #999;
    color: #fff;
  }
}
.content-contact {
  display: flex;
  justify-content: center;
}
.content-contact__item:not(:first-of-type) {
  margin-left: 20px;
}
.content-contact__href {
  font-size: 5rem;
  &--mail {
    color: #999;
  }
  &--twitter {
    color: #55acee;
  }
}
</style>

