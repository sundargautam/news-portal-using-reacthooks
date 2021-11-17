import "./Banner.css";
const Banner = ({ banner }) => {
  return (
    <div id="breaking-news-container">
      <div id="breaking-news-colour" class="slideup animated"></div>

      <span class="breaking-news-title"> FlashNews </span>

      <div
        href="https://forbes.com.mx"
        class="breaking-news-headline delay-animated2 fadein marquee"
      >
        Just belive in yourself, no one can stop you from learning to code
      </div>

      <a href="#" class="breaking-news-link"></a>
    </div>
  );
};

export default Banner;
