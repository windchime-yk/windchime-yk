<template>
  <div class="container">
    <section id="about" class="section__wrap">
      <h2 class="content__title">About</h2>
      <p class="content__description">このサイトはWhyKのポートフォリオサイトです</p>
      <section>
        <h3 class="content__title-sub">Why? WhyK</h3>
        <dl>
          <dt>WhyK（ほわぁいけー）</dt>
          <dd>そこらへんのフロントエンドエンジニア</dd>
          <dd>好きなものはVue SFCとアクセシビリティ</dd>
          <dd>嫌いなものはメモ帳コーディング</dd>
          <dd>Figmaでデザイン、VS Codeでコーディングするマン</dd>
        </dl>
      </section>
    </section>
    <section id="about" class="section__wrap">
      <h2 class="content__title">Work</h2>
      <ul>
        <li>
          <a href="https://github.com/windchime-yk/novel-support.js">
            <h2>novel-support.js</h2>
            <img src="" alt="">
            <dl>
              <dt>使用技術</dt>
              <dd>TypeScript</dd>
              <dd>Sass</dd>
            </dl>
            <p>カクヨムの特殊記法をベースとした小説投稿サイト特殊記法支援パッケージ</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/windchime-yk/gas-es6-env">
            <h2>gas-es6-env</h2>
            <img src="" alt="">
            <dl>
              <dt>使用技術</dt>
              <dd>webpack</dd>
              <dd></dd>
              <dd></dd>
            </dl>
            <p>Google Apps ScriptをローカルでES6+を使って制作する環境</p>
          </a>
        </li>
        <li>
          <a href="">
            <h2>images-to-pdf-cli</h2>
            <img src="" alt="">
            <dl>
              <dt>使用技術</dt>
              <dd>Node.js</dd>
            </dl>
            <p>パッケージ<a href="https://github.com/mLuby/images-to-pdf">images-to-pdf</a>をCLI化したもの</p>
          </a>
        </li>
      </ul>
    </section>
    <section id="about" class="section__wrap">
      <h2 class="content__title">Blog</h2>
      <p>ここに</p>
    </section>
    <section id="about" class="section__wrap">
      <h2 class="content__title">Contact</h2>
      <ul>
        <li><a href="mailto:WhyK@gmail.com">メール</a></li>
        <li><a href="https://twitter.com/windchime_yk">Twitter</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
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

.content__title {
  font-size: 4rem;
  text-align: center;
}
.content__title-sub {
  font-size: 3rem;
  text-align: center;
  margin-top: 20px;
}
.content__description {
  text-align: center;
}
</style>

