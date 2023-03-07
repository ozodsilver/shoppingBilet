<template>
    <div class="my-5">
        <footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
       
      </div>
     
      <div class="footer-social-media">
     
        <a href="https://t.me/unired_fc"><i class="fab fa-telegram"></i></a>
        <a href="https://www.instagram.com/united_redbridge_football_club"><i class="fab fa-instagram"></i></a>
        
      </div>
    </div>
    <div class="footer-bottom">
      <p>utickets.uz © 2023.
        All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
		
        .footer {
  background-color: #222222;
  color: #ffffff;
  font-size: 14px;
  padding: 50px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

    .footer-logo {
      margin-right: 50px;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .footer-links {
      display: flex;

      a {
        color: #ffffff;
        margin-right: 20px;

        &:hover {
          color: #cccccc;
        }
      }
    }

    .footer-social-media {
      display: flex;

      a {
        color: #ffffff;
        margin-right: 20px;
        font-size: 18px;

        &:hover {
          color: #cccccc;
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    font-size: 12px;
  }
}
</style>