import { AboutFragment } from '../components/fragments/AboutFragment';
import foto from '../assets/pics/coba.jpg';

export default () => {
  return (
    <AboutFragment
      title="About The Fandom"
      pic={foto}
      paragraph1={`
          Daisynateur merupakan fanbase untuk mendukung Desy Natalia atau Daisy JKT48. Berdiri untuk mendukung dan memberikan semangat untuk Daisy agar terus berkarya dan dapat memberikan yang terbaik untuk fans JKT48. Kami juga akan mentrasfer keceriaan dan semangat dari Daisy untuk kalian.
        `}
      paragraph2={`
         Sebagai komunitas, tujuan utama Daisynateur adalah menyebarkan semangat dan energi positif dari Daisy kepada seluruh penggemarnya. Kami ingin membangun hubungan yang erat antara Daisy dan para fans, menciptakan ruang bagi semua orang untuk berbagi kebahagiaan, serta menjadi bagian dari perjalanan luar biasa yang sedang ia jalani. Dengan dukungan yang tulus dan penuh semangat, kami berharap Daisy dapat semakin bersinar di dunia hiburan.
        `}
      paragraph3={`
        Daisynateur juga berkomitmen untuk menciptakan lingkungan fanbase yang positif, di mana setiap penggemar dapat saling mendukung dan berbagi antusiasme mereka terhadap Daisy. Kami percaya bahwa kebersamaan dalam komunitas ini akan semakin mempererat hubungan antara Daisy dan para penggemarnya, sekaligus menjadi sumber inspirasi bagi semua orang untuk terus menyebarkan kebaikan dan energi positif.
        `}
      paragraph4={`Jangan lupa untuk terus mengikuti perkembangan Daisy dan berbagai aktivitas Daisynateur melalui media sosial kami! Dapatkan informasi terbaru, keseruan event, serta konten eksklusif hanya di akun resmi kami:`}
      xLink={'daisynateur'}
      igLink={'daisynateur'}
      tiktokLink={'daisynate'}
    />
  );
};
