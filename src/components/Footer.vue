<template>
    <div class="my-5">
        <footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-logo">
       
      </div>
      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
      <div class="footer-social-media">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2023.
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